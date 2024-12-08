from rest_framework.response import Response
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from accounts.serializers import UserSerializer
from accounts.models import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action in ['register', 'login']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]

    @action(
            detail=False, 
            url_path='register',
            methods=['post'])
    def register(self, request, *args, **kwargs):
        """
        Register a new user.
        """
        serializer = self.get_serializer(data=request.data)
        
        try:
            # Validate password strength
            validate_password(request.data.get('password'))
            
            if serializer.is_valid():
                user = serializer.save()
                
                # Generate tokens
                refresh = RefreshToken.for_user(user)
                
                return Response({
                    'user': serializer.data,
                    'message': 'User registered successfully',
                    'tokens': {
                        'refresh': str(refresh),
                        'access': str(refresh.access_token),
                    }
                }, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except ValidationError as e:
            return Response({
                'password': list(e.messages)
            }, status=status.HTTP_400_BAD_REQUEST)

    @action(
            detail=False, 
            url_path='login',
            methods=['post'])
    def login(self, request, *args, **kwargs):
        """
        Authenticate a user and return tokens.
        """
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({
                'error': 'Please provide both email and password'
            }, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            serializer = self.get_serializer(user)
            
            return Response({
                'user': serializer.data,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            })
        
        return Response({
            'error': 'Invalid credentials'
        }, status=status.HTTP_401_UNAUTHORIZED)

    @action(
            detail=False, 
            url_path='change-password',
            methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def change_password(self, request, *args, **kwargs):
        """
        Change password for authenticated user.
        """
        user = request.user
        old_password = request.data.get('old_password')
        new_password = request.data.get('new_password')

        if not old_password or not new_password:
            return Response({
                'error': 'Please provide both old and new password'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Verify old password
        if not user.check_password(old_password):
            return Response({
                'error': 'Invalid old password'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Validate new password strength
            validate_password(new_password)
            
            # Set new password
            user.set_password(new_password)
            user.save()

            # Generate new tokens since password changed
            refresh = RefreshToken.for_user(user)
            
            return Response({
                'message': 'Password changed successfully',
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            })
            
        except ValidationError as e:
            return Response({
                'password': list(e.messages)
            }, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        """
        Redirect create to register action
        """
        return self.register(request)

    def list(self, request, *args, **kwargs):
        """
        Disable listing all users
        """
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def retrieve(self, request, *args, **kwargs):
        """
        Allow users to only retrieve their own data
        """
        if str(request.user.id) != kwargs.get('pk'):
            return Response(status=status.HTTP_403_FORBIDDEN)
        return super().retrieve(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        """
        Allow users to only update their own data
        """
        if str(request.user.id) != kwargs.get('pk'):
            return Response(status=status.HTTP_403_FORBIDDEN)
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        """
        Allow users to only delete their own account
        """
        if str(request.user.id) != kwargs.get('pk'):
            return Response(status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, **kwargs)
