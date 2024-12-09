"use client";
import { Button, Button } from "@/components/ui/button";
import { GoogleSignIn } from "../authAction";
import { SignInWithGoogle } from "../authActions";

export function GoogleSignInButton() {
	return (
		<Button
			type="button"
			variant="outline"
			className="w-full"
			onClick={() => {
				SignInWithGoogle();
			}}
		>
			Login with Google
		</Button>
	);
}

"use client";

export function GoogleSignInButton({ text }: { text?: string }) {
	return (
		<Button
			type="button"
			variant="outline"
			className="w-full"
			onClick={() => {
				GoogleSignIn();
			}}
		>
			{text ? `${text}` : "Login with Google"}
		</Button>
	);
}
