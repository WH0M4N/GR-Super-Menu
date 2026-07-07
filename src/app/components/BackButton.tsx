"use client";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();

  return (
    <IconButton
      onClick={() => router.back()}
      sx={{
        width: "40px",
        height: "38.5px",
        p: 0.9,
        border: "1px solid",
        borderColor: "text.disabled",
        borderRadius: "8px",
      }}
    >
      <IoIosArrowBack />
    </IconButton>
  );
};

export default BackButton;
