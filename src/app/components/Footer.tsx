import { IoCallOutline } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0px 28px",
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>
          <IoCallOutline size={28} color="rgba(255,255,255,0.75)" />
        </span>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px" }}>
          ۰۲۱-۲۲۳۶۸۹۷۳
        </p>
      </div>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <RiTelegram2Line size={28} color="rgba(255,255,255,0.75)" />
        <FaInstagram size={28} color="rgba(255,255,255,0.75)" />
      </div>
    </div>
  );
};

export default Footer;
