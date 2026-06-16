"use client";
import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import games from "../images/boardgame-playing.jpeg";
import foods from "../images/main-food-section-image.jpg";
import Link from "next/link";

interface Props {
  image: StaticImageData;
  title: string;
  route: string;
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
        return (
          <MenuCard
            image={menu.image}
            title={menu.title}
            route={menu.route}
            key={menu.id}
          />
        );
      })}
    </Box>
  );
};

function MenuCard({ image, title, route }: Props) {
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
      <Link
        href={route}
        style={{
          width: "100%",
          height: "100%",
          textDecoration: "none",
          zIndex: 2,
          color: "text.primary",
          fontSize: "24px !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{title}</Typography>
      </Link>
    </Box>
  );
}

export default Menues;
