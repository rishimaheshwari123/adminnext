"use client";
import { useEffect, useState } from "react";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";
import Sidebar from "@/components/admin/pages/Sidebar";

function Layout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <PrivateRoute>
      <div className="">
        <Sidebar />
        <div className="lg:ml-24 mx-5 mt-3 ml-[100px] min-h-screen bg-gradient-to-r">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default Layout;
