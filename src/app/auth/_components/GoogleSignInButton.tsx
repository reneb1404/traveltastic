"use client";
import { Button } from "@/components/ui/button";
import { SignInWithGoogle } from "../authActions";

export function GoogleSignInButton({ text }: { text?: string }) {
	return (
		<Button
			type="button"
			variant="outline"
			className="w-full"
			onClick={() => {
				SignInWithGoogle();
			}}
		>
			{text ? `${text}` : "Login with Google"}
		</Button>
	);
}
