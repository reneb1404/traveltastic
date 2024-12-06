"use client";
import { Button } from "@/components/ui/button";
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
