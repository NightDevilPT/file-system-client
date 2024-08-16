export enum InputVariantEnum {
	FADED="faded",
	BORDERED="bordered",
	FLAT="flat",
	UNDERLINED="underlined"
}

export interface FSInputInterface{
	value?:string;
	name:string;
	type:string;
	placeholder?:string;
	label?:string;
	icon?:string;
	formVarient?:InputVariantEnum;
	disabled?:boolean;
	onChange?:any
	required?:boolean;
	error?:string;
}

export interface FSFileInputInterface{
	title:string;
	subtitle?:string;
	onChange?:any;
}

// export enum ButtonVariantEnum {
	
// }

// export interface FSButtonInterface {
// 	text:string;
// 	variant?:ButtonVariantEnum
// }