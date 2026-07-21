"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Food } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function DeleteModal({ food }: { food: Food }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    bgcolor: "background.default",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/foods/${food.id}`, {
      method: "DELETE",
    });

    if (!res.ok) return;

    handleClose();

    router.refresh();
  };

  return (
    <>
      <Button
        size="small"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.3,
        }}
        variant="outlined"
        color="error"
        onClick={handleOpen}
      >
        حذف
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          component="span"
        >
          <FaTrashAlt />
        </Box>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "none",
          "& .MuiBox-root": {
            borderRadius: 2,
            border: "none",
          },
          maxWidth: {
            xs: "320px",
            sm: "320px",
          },
          marginX: "auto",
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            component="h2"
            variant="h6"
            sx={{
              color: "black",
              textAlign: "center",
            }}
          >
            بابت حذف اطمینان دارید ؟
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
              gap: 2,
            }}
          >
            <Button
              onClick={handleClose}
              size="small"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
                borderColor: "btn.blue",
                color: "btn.blue",
                "&:hover": {
                  bgcolor: "btn.lightBlue",
                },
              }}
              variant="outlined"
            >
              خیر
            </Button>
            <Button
              onClick={handleDelete}
              size="small"
              color="error"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
              }}
              variant="outlined"
            >
              بله
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
