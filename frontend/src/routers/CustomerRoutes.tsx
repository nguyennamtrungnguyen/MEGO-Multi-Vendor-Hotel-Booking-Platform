import type { RouteObject } from "react-router-dom";
import CustomerHome from "../modules/customer/pages/CustomerHome";

export const customerRoutes: RouteObject[] = [
  {
    path: "/customer",
    element: <CustomerHome />,
  },
];
