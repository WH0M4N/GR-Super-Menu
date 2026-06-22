import { Dialog, Box, IconButton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { TbX } from "react-icons/tb";

interface Props {
  isOpen: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  image: string | StaticImageData;
  title: string;
}

const ImageDialog = ({ isOpen, setOpen, image, title }: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpen(false)}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            background: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "85vw",
            sm: "70vw",
            md: 500,
          },
          height: {
            xs: "50vh",
            sm: "60vh",
            md: 500,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden !important",
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",

            "@media (max-width: 270px)": {
              display: "none",
            },

            "@media (min-width: 270px) and (max-width: 320px)": {
              top: 55,
              right: 20,
            },

            "@media (min-width: 320px) and (max-width: 340px)": {
              top: 45,
              right: 20,
            },

            "@media (min-width: 340px) and (max-width: 360px)": {
              top: 35,
              right: 20,
            },

            "@media (min-width: 360px) and (max-width: 380px)": {
              top: 35,
              right: 20,
            },

            "@media (min-width: 380px) and (max-width: 420px)": {
              top: 25,
              right: 20,
            },

            "@media (min-width: 420px) and (max-width: 480px)": {
              top: 15,
              right: 30,
            },

            "@media (min-width: 480px)": {
              display: "none",
            },

            zIndex: 100,
          }}
        >
          <TbX color="white" />
        </IconButton>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "contain", overflow: "hidden" }}
        />
      </Box>
    </Dialog>
  );
};

export default ImageDialog;
