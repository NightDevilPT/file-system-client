import FSInput from "@/components/ui/FS-Input";
import FSLogoFrame from "@/components/ui/FS-Logo";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import React from "react";

const UpdatePasswordForm = () => {
	return (
		<div
			className={`w-96 h-auto p-5 rounded-md shadow-2xl bg-background grid-cols-1 gap-3 dark:border-2 dark:border-foreground-50`}
		>
			<div className={`w-full h-auto flex justify-center items-center`}>
				<FSLogoFrame />
			</div>
			<Divider className={`mt-1`} />
			<form className={`w-full h-auto mt-5 space-y-3`}>
				<FSInput
					type="password"
					label="Password"
					placeholder="Enter Password"
					name="password"
					icon="password"
				/>
				<Button
					type="submit"
					className={`w-full `}
					color="primary"
					variant={"solid"}
				>
					Update Password
				</Button>
			</form>
		</div>
	);
};

export default UpdatePasswordForm;
