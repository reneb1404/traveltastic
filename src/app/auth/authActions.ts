"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema, signupSchema } from "./authSchema";

export async function login(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const validation = loginSchema.safeParse(data);

	if (!validation.success) {
		console.error(validation.error.errors);
		redirect("/error");
	}

	const { error } = await supabase.auth.signInWithPassword({
		email: validation.data.email,
		password: validation.data.password,
	});

	if (error) {
		console.error(error);
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/dashboard");
}

export async function signup(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		confirmPassword: formData.get("confirmPassword") as string,
	};

	const validation = signupSchema.safeParse(data);

	if (!validation.success) {
		console.error(validation.error.errors);
		redirect("/error");
	}

	const { error } = await supabase.auth.signUp({
		email: validation.data.email,
		password: validation.data.password,
	});

	if (error) redirect("/error");

	revalidatePath("/", "layout");
	redirect("/auth/login?success=1");
}

export async function SignInWithGoogle() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: "http://localhost:3000/api/auth/callback",
			queryParams: {
				access_type: "offline",
				prompt: "consent",
			},
		},
	});

	if (data.url) {
		redirect(data.url);
	}

	if (error) {
		console.error(error);
		redirect("/error");
	}
}
