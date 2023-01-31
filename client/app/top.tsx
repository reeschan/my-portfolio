"use client";
import { useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";
import {
  DownArrow,
  ScrollBox,
  TopBox,
  TopMenuCard,
  TopMenuCardContent,
  TopMenuParticles,
} from "../styles/top";
import { loadFull } from "tsparticles";
import { Box, CardContent } from "@mui/material";
import { Link as Scroll, Element } from "react-scroll";

interface TopProps {
  name: string;
  nextPageName: string;
}

export const Top = (props: TopProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return useMemo(() => {
    return (
      <Element name={props.name}>
        <TopBox>
          <TopMenuCard>
            <TopMenuCardContent>
              <Box>Ryuki Tobita's</Box>
              <Box>Portfolio</Box>
            </TopMenuCardContent>
          </TopMenuCard>
          <ScrollBox>
            <Scroll
              to={props.nextPageName}
              duration={600}
              smooth={true}
              offset={-34}
            >
              Scroll
              <DownArrow />
            </Scroll>
          </ScrollBox>
          <TopMenuParticles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: {
                  value: "#3D5A73",
                },
              },
              fpsLimit: 30,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
              },
              particles: {
                collisions: {
                  enable: false,
                },
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "star",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </TopBox>
      </Element>
    );
  }, []);
};
