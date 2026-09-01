import React from "react";
import { useRoutes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { adminRoutes } from "./AdminRoutes";
import { customerRoutes } from "./CustomerRoutes";
import { partnerRoutes } from "./PartnerRoutes";
import { guestRoutes } from "./GuestRoutes";

const AppRoutes = () => {
  const routes = [
    ...adminRoutes,
    ...customerRoutes,
    ...partnerRoutes,
    ...guestRoutes,
  ];
  const routing = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      {routing}
    </>
  );
};

export default AppRoutes;
