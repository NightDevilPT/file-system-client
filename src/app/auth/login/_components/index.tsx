"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import icons, { IconType } from "@/utils/icons";
import { loginUser } from "@/redux/login/thunk";
import FSInput from "@/components/ui/FS-Input";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { ApiStatusEnum } from "@/interface/interface";
import { loginValidationSchema } from "@/schemas/login-form";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";

const LoginForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	// Get login state from Redux
	const { status, error, responseMessage, data } = useAppSelector(
		(state) => state.login
	);

	// Formik setup
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginValidationSchema,
		onSubmit: async (values, { setSubmitting }) => {
			dispatch(loginUser(values));
			setSubmitting(false);
		},
	});

	// Handle login status updates
	useEffect(() => {
		if (status === ApiStatusEnum.SUCCEEDED) {
			window.localStorage.setItem("user", data.id);
			toast.success(responseMessage || "Login successful!");
			// dispatch(resetLoginState());
			router.push("/"); // Redirect to dashboard
		} else if (status === ApiStatusEnum.FAILED && error) {
			toast.error(error);
		}
	}, [status, error, responseMessage, router, dispatch]);

	// Safe localStorage access
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.localStorage.removeItem("user");
		}
	}, []);

	return (
		<div
			className={`w-96 h-auto p-5 rounded-md shadow-2xl bg-background grid-cols-1 gap-3 dark:border-2 dark:border-foreground-50`}
		>
			<div className={`w-full h-auto flex justify-center items-center`}>
				<FSLogoFrame />
			</div>
			<Divider className={`mt-1`} />
			<form
				className={`w-full h-auto mt-5 space-y-3`}
				onSubmit={formik.handleSubmit}
			>
				<FSInput
					type="text"
					label="Email"
					placeholder="Enter Email"
					name="email"
					icon="mail"
					required={true}
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.errors.email}
				/>
				<FSInput
					type="password"
					label="Password"
					placeholder="Enter Password"
					name="password"
					icon="password"
					required={true}
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.errors.password}
				/>

				<Button
					aria-label="Login"
					type="submit"
					className={`w-full`}
					color="primary"
					variant={"solid"}
					isDisabled={
						formik.isSubmitting || status === ApiStatusEnum.LOADING
					}
				>
					{formik.isSubmitting || status === ApiStatusEnum.LOADING
						? "Logging in..."
						: "Log In"}
				</Button>
			</form>

			<div
				className={`w-full flex justify-center items-center gap-2 my-3`}
			>
				<Divider className={` flex-1`} />
				<span className={`text-sm font-rubik text-foreground-400`}>
					OR
				</span>
				<Divider className={` flex-1`} />
			</div>

			<Button
				aria-label="Login with GitHub"
				color="primary"
				fullWidth
				startContent={icons(IconType.GITHUB)}
			>
				Login with GitHub
			</Button>

			<div
				className={`w-full h-auto mt-2 flex justify-center items-center text-xs gap-2`}
			>
				Don't have an account?
				<Link
					className="text-primary-500 font-bold underline"
					href={"/auth/signup"}
				>
					Signup
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
