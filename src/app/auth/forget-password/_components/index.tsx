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
import { forgetPassword } from "@/redux/forget-password/thunk";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { resetForgetPasswordState } from "@/redux/forget-password/slice";
import { forgetPasswordValidationSchema } from "@/schemas/forget-password-form";

const ForgetPasswordForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { status, error, responseMessage } = useAppSelector(
		(state) => state.forgetPassword
	);

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: forgetPasswordValidationSchema,
		onSubmit: async (values, { setSubmitting }) => {
			try {
				// ✅ Properly handle thunk result
				const resultAction = await dispatch(
					forgetPassword(values)
				).unwrap();
				toast.success(resultAction.message);

				// ✅ Navigate to login page after success
				router.replace("/auth/login");
			} catch (err: any) {
				toast.error(
					err.message || "Failed to send reset password email"
				);
			} finally {
				setSubmitting(false);
			}
		},
	});

	useEffect(() => {
		if (status === ApiStatusEnum.FAILED && error) {
			toast.error(error);
		}

		return () => {
			// ✅ Reset state only when the component unmounts
			dispatch(resetForgetPasswordState());
		};
	}, [status, error, dispatch]);

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
