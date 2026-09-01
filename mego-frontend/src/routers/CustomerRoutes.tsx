export const customerRoutes = [
  {
    path: "/admin/login",
    element: "",
  },

  {
    path: "/admin",
    element:
      // <ProtectedRoute allowedRoles={["ADMIN"]}>
      "",
    // </ProtectedRoute>
    children: [
      {
        index: true,
        element: "",
      },
      {
        path: "",
        element: "",
      },
      {
        path: "",
        element: "",
      },
    ],
  },
];
