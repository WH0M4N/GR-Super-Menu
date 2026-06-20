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
            top: 20,
            right: 10,
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
