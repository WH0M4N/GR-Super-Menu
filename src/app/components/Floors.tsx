import { StaticImageData } from "next/image";
import Link from "next/link";
import mainFloor from "../images/mainFloor.png.jpeg";
import lundge from "../images/lundge.png";

interface Props {
  image: StaticImageData;
  title: string;
  route: string;
  theme: "orange" | "purple";
}

const Floors = () => {
  const menuOptions = [
    {
      id: "mainFloor",
      title: "طبقه اصلی",
      route: "/mainFloor",
      image: mainFloor,
      theme: "orange" as const,
    },
    {
      id: "republicLundge",
      title: "ریپابلیک لانژ",
      route: "/lundge",
      image: lundge,
      theme: "purple" as const,
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes orangeBorder {
            0% {
              box-shadow:
                0 0 6px rgba(255, 145, 55, 0.35),
                0 0 14px rgba(255, 145, 55, 0.15);
            }

            50% {
              box-shadow:
                0 0 10px rgba(255, 166, 75, 0.65),
                0 0 24px rgba(255, 145, 55, 0.3);
            }

            100% {
              box-shadow:
                0 0 6px rgba(255, 145, 55, 0.35),
                0 0 14px rgba(255, 145, 55, 0.15);
            }
          }

          @keyframes purpleBorder {
            0% {
              box-shadow:
                0 0 6px rgba(168, 85, 247, 0.35),
                0 0 14px rgba(139, 92, 246, 0.15);
            }

            50% {
              box-shadow:
                0 0 10px rgba(192, 132, 252, 0.65),
                0 0 24px rgba(168, 85, 247, 0.3);
            }

            100% {
              box-shadow:
                0 0 6px rgba(168, 85, 247, 0.35),
                0 0 14px rgba(139, 92, 246, 0.15);
            }
          }
        `}
      </style>

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
        {menuOptions.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            title={menu.title}
            route={menu.route}
            theme={menu.theme}
          />
        ))}
      </div>
    </>
  );
};

function MenuCard({ image, title, route, theme }: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "250px",
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        overflow: "hidden",

        border:
          theme === "orange"
            ? "1px solid rgba(255, 145, 55, 0.8)"
            : "1px solid rgba(168, 85, 247, 0.8)",

        animation:
          theme === "orange"
            ? "orangeBorder 4s ease-in-out infinite"
            : "purpleBorder 4s ease-in-out infinite",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
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

export default Floors;
