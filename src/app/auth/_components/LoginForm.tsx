import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { login } from "../authActions";
import { GoogleSignInButton } from "./GoogleSignInButton";

export default function LoginForm() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="email@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link
										href="#"
										className="ml-auto inline-block text-sm underline"
									>
										Forgot your password?
									</Link>
								</div>
								<Input
									id="password"
									name="password"
									type="password"
									placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
									required
								/>
							</div>
							<Button formAction={login} type="submit" className="w-full">
								Login
							</Button>
							<GoogleSignInButton />
						</div>
					</form>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link href="signup" className="underline">
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
