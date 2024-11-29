import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./ui/button";

export async function NavBar() {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
			<nav className="flex items-center gap-10 container font-semibold">
				<Link href="/" className="mr-auto">
					<BrandLogo />
				</Link>
				<Link className="text-lg" href="/#features">
					Features
				</Link>
				<Link className="text-lg" href="/#pricing">
					Pricing
				</Link>
				<Link className="text-lg" href="/#about">
					About
				</Link>
				{user ? (
					<div className="flex items-center gap-10">
						<Link className="text-lg" href="/dashboard">
							Dashboard
						</Link>
						<form action="/api/auth/signout" method="post">
							<Button className="text-lg" type="submit">
								Sign out
							</Button>
						</form>
					</div>
				) : (
					<span className="text-lg">
						<Link className="text-lg" href="/auth/login">
							Login
						</Link>
					</span>
				)}
			</nav>
		</header>
	);
}
