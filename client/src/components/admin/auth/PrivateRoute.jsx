"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const router = useRouter();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else if (user?.role !== "admin") {
      router.push("/");
    }
  }, [token, user, router]);

  // If redirection happens, don't render children
  if (!token || user?.role !== "admin") {
    return null; // Optional: you can show a loading spinner here
  }

  return children;
}

export default PrivateRoute;
