import { IoCallOutline } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
          gap: 10,
          alignItems: "center",
        }}
      >
        <a
          href="https://t.me/Gamerepublic_complex"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RiTelegram2Line size={28} color="rgba(255,255,255,0.75)" />
        </a>
        <a
          href="https://www.instagram.com/gamerepublic_complex?igsh=N3RpOHV0aGpoNXh6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaInstagram size={28} color="rgba(255,255,255,0.75)" />
        </a>
        <a
          href="https://www.waze.com/en-GB/live-map/directions?to=ll.35.78644%2C51.377542&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcATMa6RleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaefDdoxFKtT5GV_qxCBUKLaC5IEGZUATap6vpL3WxgVLQxrwQsMbjdtJAGYIA_aem_ZeEdgIdMWR9Jq-7m4h97aA"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HiOutlineLocationMarker size={28} color="rgba(255,255,255,0.75)" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
