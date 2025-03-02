"use client";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import FSInput from "@/components/ui/FS-Input";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { ApiStatusEnum } from "@/interface/interface";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { sendForgotPasswordEmail } from "@/redux/forget-password/thunk";
import { resetForgotPasswordState } from "@/redux/forget-password/slice";
import { forgetPasswordValidationSchema } from "@/schemas/forget-password-form";

const ForgetPasswordForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	// Get state from Redux store
	const { status, responseMessage, error } = useAppSelector(
		(state) => state.forgetPassword
	);

	// Handle form submission
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: forgetPasswordValidationSchema,
		onSubmit: async (values, { setSubmitting }) => {
			dispatch(sendForgotPasswordEmail(values));
			setSubmitting(false);
		},
	});

	// Handle success and error messages
	useEffect(() => {
		if (status === ApiStatusEnum.SUCCEEDED && responseMessage) {
			toast.success(responseMessage);
			dispatch(resetForgotPasswordState());
			router.push("/auth/login");
		} else if (status === ApiStatusEnum.FAILED && error) {
			toast.error(error);
			dispatch(resetForgotPasswordState());
		}
	}, [status, responseMessage, error, dispatch]);

	return (
		<div
			className={`w-96 h-auto p-5 rounded-md shadow-2xl bg-background dark:border-2 dark:border-foreground-50 grid-cols-1 gap-3`}
		>
			<div className={`w-full h-auto flex justify-center items-center`}>
				<FSLogoFrame />
			</div>
			<Divider className={`mt-1`} />
			<span
				className={`w-full justify-center items-center flex mt-2 h-auto text-xs text-foreground-500`}
			>
				We will send you a link to reset your password.
			</span>
			<form
				className={`w-full h-auto mt-2 space-y-3`}
				onSubmit={formik.handleSubmit}
			>
				<FSInput
					type="email"
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
				<Button
					aria-label="Forget Password"
					type="submit"
					className={`w-full`}
					color="primary"
					variant={"solid"}
					isDisabled={
						formik.isSubmitting || status === ApiStatusEnum.LOADING
					}
				>
					{formik.isSubmitting || status === ApiStatusEnum.LOADING
						? "Sending..."
						: "Forget Password"}
				</Button>
			</form>
		</div>
	);
};

export default ForgetPasswordForm;
