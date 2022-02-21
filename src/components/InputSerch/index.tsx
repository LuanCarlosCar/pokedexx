import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch } from "react-redux";
import { increment } from "store/Stock/Stock.actions";
import { PropsNewPokemon } from "./type";
import { useNavigate } from "react-router-dom";
import AlertErro from "./AlertErro";
import { ContainerError } from "./AlertErro/style";

export default function InputSerch(props) {
  const Navigate = useNavigate();
  const { setSerch, serch, setSerchLoading } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState({
    abrir: false,
    name: "error",
    description: "Invalid name!",
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ ...open, abrir: false });
  };

  const BuscaNovoPokemon = async () => {
    if (!serch) {
      setOpen({ abrir: true, name: "info", description: "Enter a name." });
      return;
    }
    setSerchLoading(true);
    await fetch(` https://pokeapi.co/api/v2/pokemon/${serch}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        dispatch(increment({ name: response.name, id: response.id }));
      })
      .then(() => Navigate("/detail"))
      .catch((erro) =>
        setOpen({ abrir: true, name: "error", description: "Invalid name!" })
      );
    setSerchLoading(false);
  };

  function renderErro() {
    return (
      <ContainerError>
        <AlertErro open={open} handleClose={handleClose} />;
      </ContainerError>
    );
  }
  return (
    <div id="top">
      {renderErro()}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search your pokemon. Ex: Mewtwo"
          inputProps={{ "aria-label": "search" }}
          fullWidth
          onChange={(ev) => {
            ev.preventDefault();
            setSerch(ev.target.value);
          }}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={(ev) => {
            ev.preventDefault();
            BuscaNovoPokemon();
          }}
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  );
}
