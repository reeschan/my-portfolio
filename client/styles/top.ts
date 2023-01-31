import styled from "@emotion/styled";
import { Box, Card, CardContent } from "@mui/material";
import Particles from "react-tsparticles";

export const TopBox = styled(Box)(() => ({
  margin: "auto",
  width: "100%",
  height: "100vh",
  display:"grid"
}))

export const TopMenuCard = styled(Card)(() => ({
  width: 540,
  height: 300,
  color: "#333333",
  fontWeight: "bold",
  fontSize: 62,
  margin: "auto",
  textAlign: "center",
  display:"table"
}))

export const TopMenuCardContent = styled(CardContent)(() => ({
  display: "table-cell",
  verticalAlign: "middle",
}))

export const TopMenuParticles = styled(Particles)(() => ({
  position: "absolute",
  width: "100vh",
  height: "100vh",
  zIndex:-1
}))

export const ScrollBox = styled(Box)(() => ({
  position: "absolute",
  top: "70%",
  right: "48%",
  fontSize: "28px",
  color: "#222",
  fontWeight: "bold",
  "&:hover":{
    cursor: "pointer"
  }
}))

export const DownArrow = styled(Box)(() => ({
  width: 30,
  height: 30,
  border: "5px solid",
  borderColor: "transparent transparent #222 #222",
  transform: "rotate(-45deg)",
  margin: "auto",
}))