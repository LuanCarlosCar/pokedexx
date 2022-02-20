import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ContainerButton } from "./style";
import SearchIcon from "@mui/icons-material/Search";

export default function ButtonNav() {
  return (
    <ContainerButton>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <a href="/#topo">
          <Fab size="medium" color="primary" aria-label="add">
            <SearchIcon />
          </Fab>
        </a>
      </Box>
    </ContainerButton>
  );
}
