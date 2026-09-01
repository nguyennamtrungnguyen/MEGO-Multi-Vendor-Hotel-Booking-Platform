import { ThemeProvider, Button, Stack, Typography, Paper } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import AppRoutes from "./routers/AppRoutes";
import CustomTheme from "./themes/CustomTheme";

function App() {
  const handleSuccess = () => {
    toast.success("Đăng nhập thành công!");
  };

  const handleError = () => {
    toast.error("Đã xảy ra lỗi!");
  };

  const handleWarning = () => {
    toast.warning("Vui lòng kiểm tra lại thông tin!");
  };

  const handleInfo = () => {
    toast.info("Chào mừng bạn đến với MEGO!");
  };

  const handleDefault = () => {
    toast("Đây là Toast mặc định!");
  };

  return (
    <ThemeProvider theme={CustomTheme}>
      {/* Test UI */}
      <Paper
        elevation={3}
        sx={{
          m: 3,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          🏨 MEGO - Test Components
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Kiểm tra MUI Button và React Toastify
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" onClick={handleSuccess}>
            Success
          </Button>

          <Button variant="contained" color="error" onClick={handleError}>
            Error
          </Button>

          <Button variant="contained" color="warning" onClick={handleWarning}>
            Warning
          </Button>

          <Button variant="contained" color="info" onClick={handleInfo}>
            Info
          </Button>

          <Button variant="outlined" onClick={handleDefault}>
            Default Toast
          </Button>
        </Stack>
      </Paper>

      {/* Application Routes */}
      <AppRoutes />

      {/* Toast */}
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
}

export default App;
