import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const supabase = createClient();
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get("userId");

	if (!userId) {
		return NextResponse.json({ error: "User ID is required" }, { status: 400 });
	}
	try {
		const { data, error } = await supabase
			.from("profiles")
			.select("username,full_name,avatar_url")
			.eq("id", userId)
			.single();

		if (error) throw error;
		return NextResponse.json(data);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
