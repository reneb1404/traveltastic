"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export function SuccessMessage() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		setShow(urlParams.get("success") === "1");

		const timer = setTimeout(() => setShow(false), 5000000);
		return () => clearTimeout(timer);
	}, []);

	if (!show) return null;

	return (
		<Alert
			variant="default"
			className="fixed top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-md bg-green-100 border-green-400 text-green-800 flex items-center"
		>
			<CheckCircle2 className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
			<AlertDescription className="mt-2">
				You have successfully signed up! Please log in.
			</AlertDescription>
		</Alert>
	);
}
