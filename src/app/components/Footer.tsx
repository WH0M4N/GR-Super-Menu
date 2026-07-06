import { IoCallOutline } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "8px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IoCallOutline size={28} color="rgba(255,255,255,0.75)" />

        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
          }}
        >
          ۰۲۱-۲۲۳۶۸۹۷۳
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <RiTelegram2Line size={28} color="rgba(255,255,255,0.75)" />
        <FaInstagram size={28} color="rgba(255,255,255,0.75)" />
      </div>
    </div>
  );
};

export default Footer;
