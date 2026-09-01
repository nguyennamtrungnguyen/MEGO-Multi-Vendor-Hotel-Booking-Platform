import type { RouteObject } from "react-router-dom";
import GuestHome from "../modules/guest/pages/GuestHome";

export const guestRoutes: RouteObject[] = [
  {
    path: "/",
    element: <GuestHome />,
  },
];
