import { StaticImageData } from "next/image";
import Link from "next/link";
import games from "../images/games.png.jpeg";
import foods from "../images/food.png.jpeg";
import BackButton from "./BackButton";

interface Props {
  image: StaticImageData;
  title: string;
  route: string;
}

const Menues = () => {
  const menuOptions = [
    { id: "foods", title: "غذا ها", route: "/food", image: foods },
    { id: "games", title: "بازی ها", route: "/games", image: games },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft: "16px",
        paddingRight: "16px",
        marginTop: "40px",
        gap: "32px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <BackButton />
      </div>
      <p style={{ fontWeight: "bolder", fontSize: "22px" }}>
        کدوم منو رو میخوای ببینی؟
      </p>
      {menuOptions.map((menu) => (
        <MenuCard
          key={menu.id}
          image={menu.image}
          title={menu.title}
          route={menu.route}
        />
      ))}
    </div>
  );
};

function MenuCard({ image, title, route }: Props) {
  return (
    <div
      style={{
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
        overflow: "hidden",
        border: "1px solid",
        borderColor: "rgba(255,255,255,0.55)",
      }}
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 0,
        }}
      />

      <Link
        href={route}
        prefetch={true}
        style={{
          width: "100%",
          height: "100%",
          textDecoration: "none",
          zIndex: 2,
          color: "inherit",
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "18px",
          }}
        >
          {title}
        </span>
      </Link>
    </div>
  );
}

export default Menues;
