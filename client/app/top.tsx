'use client'
import { useMemo } from 'react'
import { DownArrow, ScrollBox, TopBox, TopMenuCard, TopMenuCardContent } from '../styles/top'
import { Box } from '@mui/material'
import { Link as Scroll, Element } from 'react-scroll'

interface TopProps {
  name: string
  nextPageName: string
}

export const Top = (props: TopProps) => {
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
            <Scroll to={props.nextPageName} duration={600} smooth={true} offset={-34}>
              Scroll
              <DownArrow />
            </Scroll>
          </ScrollBox>
        </TopBox>
      </Element>
    )
  }, [])
}
