"use client";
import { Button } from "@/components/ui/button";
import { GoogleSignIn } from "../authAction";

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
