"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function OpenRoute({ children }) {
  const { token, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      if (user?.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    }
  }, [token, user, router]);

  if (token) {
    return null;
  }

  return children;
}

export default OpenRoute;
