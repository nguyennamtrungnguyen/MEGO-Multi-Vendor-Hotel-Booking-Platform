import { ThemeProvider } from "@mui/material";
import AppRoutes from "./routers/AppRoutes";
import { ToastContainer } from "react-toastify";
import CustomTheme from "./themes/CustomTheme";
function App() {
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <AppRoutes />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
