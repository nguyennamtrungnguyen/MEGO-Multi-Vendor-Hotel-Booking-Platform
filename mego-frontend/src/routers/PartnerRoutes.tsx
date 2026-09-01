import type { RouteObject } from "react-router-dom";
import PartnerHome from "../modules/partner/pages/PartnerHome";

export const partnerRoutes: RouteObject[] = [
  {
    path: "/partner",
    element: <PartnerHome />,
  },
];
