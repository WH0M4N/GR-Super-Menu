"use client";
import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!res.ok) {
      alert("نام کاربری یا رمز عبور اشتباه است.");
      return;
    }

    window.location.href = "/admin";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <LockOutlinedIcon
            sx={{
              fontSize: 48,
              color: "primary.main",
              mb: 1,
            }}
          />

          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            پنل مدیریت
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            لطفا وارد شوید
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            size="small"
          />

          <TextField
            label="رمز عبور"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            size="small"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 1,
              py: 1.2,
            }}
          >
            ورود
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLoginPage;
