"use client";

import React, { useState } from "react";
import { FSInputInterface, InputVariantEnum } from "@/types/form.type";
import { Input } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import icons from "@/utils/icons";

const FSInput = ({
	type,
	value,
	placeholder,
	label,
	name,
	icon,
	formVarient,
}: FSInputInterface) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isVisible, setIsVisible] = React.useState(false);
	const [inputType, setInputType] = React.useState(type);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
		setInputType(isVisible ? "text" : "password");
	};

	return (
		<Input
			// label={label}
			name={name}
			variant={formVarient || InputVariantEnum.FLAT}
			placeholder={placeholder}
			startContent={
				icon && (
					<div className="text-xl text-default-400 pointer-events-none">
						{icons(icon)}
					</div>
				)
			}
			endContent={
				type === "password" && (
					<button
						className="focus:outline-none"
						type="button"
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<AiOutlineEye className="text-xl text-default-400 pointer-events-none" />
						) : (
							<AiOutlineEyeInvisible className="text-xl text-default-400 pointer-events-none" />
						)}
					</button>
				)
			}
			type={inputType}
			className="min-w-40 w-full !text-foreground-900"
		/>
	);
};

export default FSInput;
