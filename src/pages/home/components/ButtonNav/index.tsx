import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ContainerButton } from "./style";
import SearchIcon from "@mui/icons-material/Search";

export default function ButtonNav() {
  return (
    <ContainerButton>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <a href="/#top">
          <Fab size="medium" color="primary" aria-label="add">
            <SearchIcon />
          </Fab>
        </a>
      </Box>
    </ContainerButton>
  );
}
