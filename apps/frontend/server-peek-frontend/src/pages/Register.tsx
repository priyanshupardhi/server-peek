import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A sign up form with username, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function SignUpForm() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <a href="#" target="_blank" className="flex flex-col items-center gap-2">
              <center><img src="src/public/logo.svg" width={40} height={40}/></center>
              <span className="font-medium text-sm">ServerPeek</span>
          </a>
          <CardTitle className="text-xl">Setup the server</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-left">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username" className="text-left" >Username</Label>
              <Input id="first-name" placeholder="Username" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-left">Password</Label>
              <Input id="password" placeholder="Password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-left">Confirm Password</Label>
              <Input id="password" placeholder="Confirm Password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
