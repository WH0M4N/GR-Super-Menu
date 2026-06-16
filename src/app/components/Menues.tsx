"use client";
import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import games from "../images/boardgame-playing.jpeg";
import foods from "../images/main-food-section-image.jpg";

interface Props {
  image: StaticImageData;
  title: string;
  // route: string;
}

const Menues = () => {
  const menuOptions = [
    { id: "foods", title: "غذا هامون", route: "/food", image: foods },
    { id: "games", title: "بازیامون", route: "/games", image: games },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        px: 2,
        mt: 5,
        gap: 4,
      }}
    >
      {menuOptions.map((menu) => {
        return <MenuCard image={menu.image} title={menu.title} key={menu.id} />;
      })}
    </Box>
  );
};

function MenuCard({ image, title }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        height: "200px",
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        },
      }}
    >
      <Typography
        sx={{ zIndex: 2, color: "text.primary", fontSize: "22px !important" }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Menues;
