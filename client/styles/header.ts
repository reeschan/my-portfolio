import styled from "@emotion/styled";
import { AppBar, Box, Button } from "@mui/material";

export const PortfolioAppBarBox = styled(Box)(() => ({
  flexGrow: 1
}))

export const PortfolioAppBar = styled(AppBar)(() => ({
  backgroundColor: "#838a8bb3",
}));

export const LogoImageBox = styled(Box)(() => ({
  flexGrow:1
}))

export const HeaderContentButton = styled(Button)(() => ({
  marginLeft: 30,
  marginRight: 30,
  color: "white",
  "& :hover": {
    textShadow:
      "-6px 0px 15px rgba(255, 255, 240, 0.83), 6px 0px 15px rgba(255, 255, 240, 0.83)",
    transition: ".4s",
  },
}));
