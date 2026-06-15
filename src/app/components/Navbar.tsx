import logo from "../images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        color: "text.primary",
      }}
    >
      {/* Logo */}
      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={logo}
          alt="Game Republic logo"
          width={100}
          height={150}
          priority={true}
          style={{ marginTop: "30px" }}
        />
        <p
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#ffffff",
            marginTop: 5,
          }}
        >
          گیم ریپابلیک
        </p>
      </div>

      {/* Open & closing times */}
      <div
        style={{
          width: "100%",
          zIndex: 2,
          textAlign: "end",
          padding: "4px 12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>
          شنبه تا چهارشنبه ۱۴ تا ۱
        </p>
        <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "3px" }}>
          پنجشنبه و جمعه ۱۲ تا ۱
        </p>
      </div>
    </div>
  );
};

export default Navbar;
