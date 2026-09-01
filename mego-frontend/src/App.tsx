import { Button, Stack, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import AppRoutes from "./routers/AppRoutes";

function App() {
  return (
    <>
      {/* Router Test */}
      <Paper
        elevation={3}
        sx={{
          m: 3,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          🏨 MEGO - Router Test
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Click vào từng button để kiểm tra Router
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          <Button
            variant="contained"
            component={Link}
            to="/"
          >
            🏨 Guest
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/customer"
          >
            👤 Customer
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/partner"
          >
            🏢 Partner
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/admin"
          >
            🛠️ Admin
          </Button>
        </Stack>
      </Paper>

      {/* Routes */}
      <AppRoutes />
    </>
  );
}

export default App;