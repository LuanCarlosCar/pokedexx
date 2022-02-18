import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function ButtonExit() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<TransitEnterexitIcon />}
        onClick={() => navigate("/")}
      >
        Return
      </Button>
    </Stack>
  );
}
