import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";
import Particles from "react-tsparticles";

export const CareerBox = styled(Box)(() => ({
  margin: "auto",
  display: "flex",
  width: "100%",
  minHeight: "100vh",
}))

export const CareerContentBox = styled(Box)(() => ({
  margin: "auto",
  backgroundColor: "#2F3D40",
  boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  overflow: "hidden",
  color: "#333333",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "center",
  padding: "20px",
  borderRadius: "5px",
  width: "80%",
  "& .vertical-timeline::before": {
    backgroundColor:"#eee"
  }
}))

export const TopMenuCard = styled(Card)(() => ({
  width: 540,
  height:320,
  color: "#333333",
  fontWeight: "bold",
  fontSize: 62,
  margin: "auto",
  zIndex: 1,
  textAlign: "center",
}))

export const TopMenuParticles = styled(Particles)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
}))