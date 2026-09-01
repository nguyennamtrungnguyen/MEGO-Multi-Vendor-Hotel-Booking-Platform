import type { RouteObject } from "react-router-dom";
import AdminHome from "../modules/admin/pages/AdminHome";

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminHome />,
  },
];
