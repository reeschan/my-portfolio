"use client";
import { Box, Toolbar, Typography } from "@mui/material";

import { Link as Scroll } from "react-scroll";
import {
  HeaderContentButton,
  LogoImageBox,
  PortfolioAppBar,
  PortfolioAppBarBox,
} from "../styles/header";
import Image from "next/image";

interface HeaderProps {
  navItems: string[];
}

export const Header = (props: HeaderProps) => {
  return (
    <PortfolioAppBarBox>
      <PortfolioAppBar>
        <Toolbar>
          <LogoImageBox>
            <Image
              src="/portfolio_logo.png"
              width={80}
              height={50}
              alt={""}
            ></Image>
          </LogoImageBox>
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
        </Toolbar>
      </PortfolioAppBar>
    </PortfolioAppBarBox>
  );
};
