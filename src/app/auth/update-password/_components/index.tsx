"use client";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import FSInput from "@/components/ui/FS-Input";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { ApiStatusEnum } from "@/interface/interface";
import { updatePassword } from "@/redux/update-password/thunk";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { resetUpdatePasswordState } from "@/redux/update-password/slice";
import { updatePasswordValidationSchema } from "@/schemas/update-password-form";

const UpdatePasswordForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const { status, error, responseMessage } = useAppSelector(
		(state) => state.updatePassword
	);

	const formik = useFormik({
		initialValues: {
			password: "",
		},
		validationSchema: updatePasswordValidationSchema,
		onSubmit: async (values, { setSubmitting }) => {
			if (!token) {
				toast.error("Invalid or missing token");
				setSubmitting(false);
				return;
			}

			try {
				const resultAction = await dispatch(
					updatePassword({ password: values.password, token })
				).unwrap();
				toast.success(resultAction.message);
				router.replace("/auth/login"); // ✅ Use replace to avoid back navigation issues
			} catch (err: any) {
				toast.error(err.message || "Failed to update password");
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
			dispatch(resetUpdatePasswordState()); // ✅ Reset state only when the component unmounts
		};
	}, [status, error, dispatch]);

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
					type="password"
					label="Password"
					placeholder="Enter New Password"
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
						? "Updating..."
						: "Update Password"}
				</Button>
			</form>
		</div>
	);
};

const UpdatePasswordWrapper = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<UpdatePasswordForm />
	</Suspense>
);

export default UpdatePasswordWrapper;
