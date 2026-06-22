import theme from "@/theme/theme";
import { InfoOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function GamePageHeader() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "background.default",
        top: "0",
        left: "1%",
        right: "1%",
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        position: "fixed",
        zIndex: "2",
        padding: ".7rem",
        borderBottom: ".5px solid #806a25",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
          }}
          href="/games/info"
        >
          <Button
            variant="text"
            sx={{
              fontSize: "10px",
              color: "white",
              border: ".5px solid #806a25",
              ":hover": {
                border: ".5px solid #FFD54F",
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                transition: 1,
              },
              borderRadius: 3,
              p: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: ".2rem",
            }}
          >
            <Box component="span">
              <InfoOutlined sx={{ color: "#FFD54F" }} />
            </Box>
            میخوای درباره بازیامون بیشتر بدونی ؟
          </Button>
        </Link>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".4rem",
          }}
        >
          <Typography
            component="h1"
            sx={{ fontSize: "15px", fontWeight: "600", textAlign: "end" }}
          >
            گیم ریپابلیک
          </Typography>
          <Box
            component="span"
            sx={{
              backgroundColor: "#FFD54F",
              borderRadius: 1,
              padding: ".1rem",
              fontSize: "20px",
            }}
          >
            🎲
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
