import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-left">Email</Label>
          <Input id="email" type="email" placeholder="email address" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="text-left">Password</Label>
          <Input id="password" type="password" placeholder="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
    </section>
  )
}
