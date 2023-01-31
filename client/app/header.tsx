"use client";
import { Box, Toolbar } from "@mui/material";

import { Link as Scroll } from "react-scroll";
import { HeaderContentButton, PortfolioAppBar } from "../styles/header";

interface HeaderProps {
  navItems: string[];
}

export const Header = (props: HeaderProps) => {
  return (
    <PortfolioAppBar>
      <Toolbar>
        <Box sx={{ display: "flex" }}>
          {props.navItems.map((item) => (
            <HeaderContentButton>
              <Scroll
                to={item.toLowerCase()}
                key={item}
                duration={600}
                smooth={true}
                offset={-34}
              >
                {item}
              </Scroll>
            </HeaderContentButton>
          ))}
        </Box>
      </Toolbar>
    </PortfolioAppBar>
  );
};
