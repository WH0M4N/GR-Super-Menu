import { Dialog, Box } from "@mui/material";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  image: string | null;
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
        <Image
          src={image!}
          alt={title}
          fill
          style={{ objectFit: "contain", overflow: "hidden" }}
        />
      </Box>
    </Dialog>
  );
};

export default ImageDialog;
