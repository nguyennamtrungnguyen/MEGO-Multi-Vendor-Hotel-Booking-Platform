export const partnerRoutes = [
  {
    path: "/",
    element: "",
  },

  {
    path: "/",
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
