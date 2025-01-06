import OpenRoute from "@/components/admin/auth/OpenRoute";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <OpenRoute>{children}</OpenRoute>
    </div>
  );
};

export default layout;
