import React from "react";
import useViews from "../../..";

const AdminContracts = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h1>Contract Screens</h1>
    </AdminLayout>
  );
};

export default AdminContracts;
