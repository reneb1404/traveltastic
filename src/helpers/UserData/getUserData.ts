"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface UserData {
	username: string;
	full_name: string;
	avatar_url: string;
}

export function GetUserData() {
	const supabase = createClient();
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		async function fetchUserData() {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (user?.id) {
				const userId = user.id;

				const res = await fetch(
					`http://localhost:3000/api/userdata?userId=${userId}`,
					{ method: "GET" }
				);

				const data = await res.json();

				if (res.ok) {
					setUserData(data);
				} else {
					console.error("Error fetching user data: ", data.error);
				}
			}
		}
		fetchUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!userData) {
		return { username: "", full_name: "", avatar_url: "" };
	}

	const { username, full_name, avatar_url } = userData;

	return { username, full_name, avatar_url };
}
