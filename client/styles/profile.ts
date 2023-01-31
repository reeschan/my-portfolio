import styled from "@emotion/styled";
import { Box, FormLabel} from "@mui/material";

export const ProfileBox = styled(Box)(() => ({
  margin: "auto",
  display: "flex",
  width: "100%",
  height: "100vh",

}))
export const ProfileContentBox = styled(Box)(() => ({
  margin: "auto",
  display: "flex",
  backgroundColor: "#fff",
  boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  overflow: "hidden",
  color: "#333333",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "center",
  padding: "20px",
  borderRadius: "5px"
}))
export const ProfileImageBox = styled(Box)(() => ({
  width: 350,
  height: 530,
  flexDirection: "column",
  fontSize: "14px",
  textAlign: "center"
}))
export const SocialLinkBox = styled(Box)(() => ({
  display: "flex",
  textAlign: "center",
  justifyContent:"center"
}))
export const SocialIconButtonBox = styled(Box)(() => ({
  width: 50,
  height:50
}))

export const ProfileDescriptionBox = styled(Box)(() => ({
  width:600,
  flexDirection: "column",
  marginLeft: "40",
  display:"table"
}))

export const ProfileDescriptionTextBox = styled(Box)(() => ({
  display: "table-cell",
  verticalAlign:"middle"
}))