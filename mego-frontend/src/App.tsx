import { ThemeProvider } from "@mui/material";
import CustomeTheme from "./themes/CustomeTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={CustomeTheme}>
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
      );
    </>
  );
}

export default App;
