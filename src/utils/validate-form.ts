import { showErrorToast, showWarningToast } from "./toast";

export const validateFormState = (form: HTMLFormElement): FormData | null => {
	const formData = new FormData();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	for (const element of Array.from(form.elements)) {
		if ((element as HTMLInputElement).name) {
			const [name, value] = [
				(element as HTMLInputElement).name,
				(element as HTMLInputElement).value,
			];
			if (value === "") {
				console.log(`${name} is required`);
				showErrorToast(`${name} is required`);
				return null;
			}
			if (name === "email") {
				if (!emailRegex.test(value)) {
					console.log("Invalid email format");
					showWarningToast("Invalid Email Format");
					return null;
				}
			}
			formData.append(name, value);
		}
	}

	return formData;
};
