"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import icons, { IconType } from "@/utils/icons";
import FSInput from "@/components/ui/FS-Input";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { ApiStatusEnum } from "@/interface/interface";
import { loginValidationSchema } from "@/schemas/login-form";

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginValidationSchema,
		onSubmit: async (values, { setSubmitting }) => {},
	});

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
					required={true}
					value={formik.values.password}
					onChange={formik.handleChange}
					error={
						formik.touched.password && formik.errors.password
							? formik.errors.password
							: undefined
					}
				/>
				<div
					className={`w-full h-auto mt-2 flex justify-end items-center text-xs gap-2`}
				>
					<Link
						className="text-primary-500 font-bold underline"
						href={"/auth/forget-password"}
					>
						Forget Password
					</Link>
				</div>
				<Button
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
				color="primary"
				fullWidth
				data-hover=""
				className={`text-slate-200 tracking-wider bg-slate-950 hover:bg-slate-900 dark:bg-slate-50 dark:hover:bg-slate-200 dark:text-foreground-50`}
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
