"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import icons, { IconType } from "@/utils/icons";
import FSInput from "@/components/ui/FS-Input";
import { signupUser } from "@/redux/signup/thunk";
import { ApiStatusEnum } from "@/interface/interface";
import { resetSignupState } from "@/redux/signup/slice";
import { signupValidationSchema } from "@/schemas/signup-form";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";

const SignupForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	// Get signup state from Redux
	const { status, error, responseMessage } = useAppSelector(
		(state) => state.signup
	);

	// Formik setup
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validationSchema: signupValidationSchema,
		onSubmit: async (values, { setSubmitting }) => {
			dispatch(signupUser(values));
			setSubmitting(false);
		},
	});

	// Handle signup status updates
	useEffect(() => {
		if (status === ApiStatusEnum.SUCCEEDED) {
			toast.success(responseMessage || "Signup successful!");
			dispatch(resetSignupState());
			router.push("/auth/login"); // Redirect to login
		} else if (status === ApiStatusEnum.FAILED && error) {
			toast.error(error);
		}
	}, [status, error, responseMessage, router, dispatch]);

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
					label="Username"
					placeholder="Enter Username"
					name="username"
					icon="userName"
					required={true}
					value={formik.values.username}
					onChange={formik.handleChange}
					error={
						formik.touched.username && formik.errors.username
							? formik.errors.username
							: undefined
					}
				/>
				<FSInput
					type="text"
					label="Email"
					placeholder="Enter Email"
					name="email"
					icon="mail"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={
						formik.touched.email && formik.errors.email
							? formik.errors.email
							: undefined
					}
				/>
				<FSInput
					type="password"
					label="Password"
					placeholder="Enter Password"
					name="password"
					icon="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={
						formik.touched.password && formik.errors.password
							? formik.errors.password
							: undefined
					}
				/>

				{/* Display error message if signup fails */}
				{error && <p className="text-red-500">{error}</p>}
				{/* Display success message */}
				{responseMessage && (
					<p className="text-green-500">{responseMessage}</p>
				)}

				<Button
					aria-label="Signup"
					type="submit"
					className={`w-full`}
					color="primary"
					variant={"solid"}
					isDisabled={
						formik.isSubmitting || status === ApiStatusEnum.LOADING
					}
				>
					{formik.isSubmitting || status === ApiStatusEnum.LOADING
						? "Signing up..."
						: "Signup"}
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
				aria-label="Signup with github"
				color="primary"
				fullWidth
				data-hover=""
				className={`text-slate-200 tracking-wider bg-slate-950 hover:bg-slate-900 dark:bg-slate-50 dark:hover:bg-slate-200 dark:text-foreground-50`}
				startContent={icons(IconType.GITHUB)}
			>
				Signup with Github
			</Button>

			<div
				className={`w-full h-auto mt-2 flex justify-center items-center text-xs gap-2`}
			>
				Already have an account?
				<Link
					className="text-primary-500 font-bold underline"
					href={"/auth/login"}
				>
					Login
				</Link>
			</div>
		</div>
	);
};

export default SignupForm;
