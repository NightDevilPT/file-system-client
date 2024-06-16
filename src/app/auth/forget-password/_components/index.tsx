import FSInput from "@/components/ui/FS-Input";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import React from "react";

const ForgetPasswordForm = () => {
	return (
		<div
			className={`w-96 h-auto p-5 rounded-md shadow-2xl bg-background dark:border-2 dark:border-foreground-50 grid-cols-1 gap-3`}
		>
			<div className={`w-full h-auto flex justify-center items-center`}>
				<FSLogoFrame />
			</div>
			<Divider className={`mt-1`} />
			<span className={`w-full justify-center items-center flex mt-2 h-auto text-xs text-foreground-500`}>
				We will send you a link to reset password.
			</span>
			<form className={`w-full h-auto mt-2 space-y-3`}>
				<FSInput
					type="text"
					label="Email"
					placeholder="Enter Email"
					name="email"
					icon="mail"
				/>
				<Button
					type="submit"
					className={`w-full `}
					color="primary"
					variant={"solid"}
				>
					Forget Password
				</Button>
			</form>
		</div>
	);
};

export default ForgetPasswordForm;
