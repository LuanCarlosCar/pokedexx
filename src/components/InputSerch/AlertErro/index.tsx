import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertErro(props) {
  const { open, handleClose } = props;

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open.abrir} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={open.name}
          sx={{ width: "100%" }}
        >
          {open.description}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
