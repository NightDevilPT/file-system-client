import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const useInitializeAuth = () => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const userId = localStorage.getItem("userId"); // Optional if userId is stored separately

    if (jwt && userId) {
      // If JWT exists, set it in Redux and allow access
      // dispatch(setJwtAndId({ jwt, id: userId }));
      setLoading(false); // Stop loading
    } else {
      // If JWT doesn't exist, redirect to login
      router.replace("/auth/login");
    }
  }, [dispatch, router]);

  return { loading };
};

export default useInitializeAuth;
