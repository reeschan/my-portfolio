import styled from "@emotion/styled";
import { Box} from "@mui/material";

export const SkillBox = styled(Box)(() => ({
  margin: "auto",
  display: "flex",
  width: "100%",
  height: "100vh",
}))

export const SkillContentBox = styled(Box)(() => ({
  margin: "auto",
  backgroundColor: "#efe",
  boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  overflow: "hidden",
  color: "#333333",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "center",
  padding: "20px",
  borderRadius: "5px"
}))

export const SkillChartBox = styled(Box)(() => ({
  display: "flex",
  marginTop:"20px"
}))

export const MereSkillChartBox = styled(Box)(() => ({
  flexDirection: "column",
  paring: "10px",

}))
