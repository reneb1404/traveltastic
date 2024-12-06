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
import { signup } from "../authActions";

export function SignUpForm() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Sign Up</CardTitle>
					<CardDescription>
						Create an account to start planning your travels
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
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									name="password"
									type="password"
									minLength={8}
									placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="confirmPassword">Confirm Password</Label>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									minLength={8}
									placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
									required
								/>
							</div>
							<Button formAction={signup} type="submit" className="w-full">
								Sign up
							</Button>
						</div>
					</form>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href="login" className="underline">
							Log in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
