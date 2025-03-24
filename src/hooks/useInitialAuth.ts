import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLoginData } from "@/redux/login/slice";

const useInitializeAuth = () => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("user"); // Optional if userId is stored separately

    if (userId) {
      // If JWT exists, set it in Redux and allow access
      dispatch(setLoginData({ id: userId }));
      setLoading(false); // Stop loading
    } else {
      // If JWT doesn't exist, redirect to login
      router.replace("/auth/login");
    }
  }, [dispatch, router]);

  return { loading };
};

export default useInitializeAuth;
