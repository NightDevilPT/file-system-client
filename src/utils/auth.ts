// utils/auth.js
export const isTokenAvailable = () => {
	if (typeof window !== "undefined") {
	  const token = localStorage.getItem("jwt");
	  return !!token;
	}
	return false;
  };
  