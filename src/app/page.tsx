import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<form action="/auth/signout" method="post">
			<Button type="submit">Sign out</Button>
		</form>
	);
}
