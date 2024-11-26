"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "../BrandLogo";
import { Button } from "../ui/button";

export function NavBar() {
	const supabase = createClient();
	const [authenticatedUser, setAuthenticatedUser] = useState<boolean>(false);

	useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) {
				setAuthenticatedUser(true);
			}
		};
		fetchUser();
	}, [supabase]);

	return (
		<header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
			<nav className="flex items-center gap-10 container font-semibold">
				<Link href="/" className="mr-auto">
					<BrandLogo />
				</Link>
				<Link className="text-lg" href="#">
					Features
				</Link>
				<Link className="text-lg" href="#">
					Pricing
				</Link>
				<Link className="text-lg" href="#">
					About
				</Link>
				<span className="text-lg">
					{authenticatedUser ? (
						<div className="flex items-center gap-10">
							<Link className="text-lg" href="/dashboard">
								Dashboard
							</Link>
							<User className="size-8" />
							<form action="/auth/signout" method="post">
								<Button className="text-lg" type="submit">
									Sign out
								</Button>
							</form>
						</div>
					) : (
						<Link className="text-lg" href="/auth/login">
							Login
						</Link>
					)}
				</span>
			</nav>
		</header>
	);
}
