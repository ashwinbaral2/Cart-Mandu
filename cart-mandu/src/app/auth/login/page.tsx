import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <Card className="w-400px p-6">
            <CardHeader>
                <CardTitle className="text-2xl text-center mb-2">Login</CardTitle>
                <CardDescription className="text-center">Welcome back! Please login to your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="********" />
                </div>
                <Button className="w-full mt-2">Login</Button>
            </CardContent>
        </Card>
    </div>  
  );
}
