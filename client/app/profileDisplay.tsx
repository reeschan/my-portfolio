'use client'
import {
  ProfileBox,
  ProfileContentBox,
  ProfileDescriptionBox,
  ProfileDescriptionTextBox,
  ProfileImageBox,
  SocialIconButtonBox,
  SocialLinkBox,
} from '@/styles/profile'
import Image from 'next/image'
import { Element } from 'react-scroll'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton } from '@mui/material'

interface ProfileDisplayProps {
  name: string
  description: string
}

export const ProfileDisplay = (props: ProfileDisplayProps) => {
  return (
    <Element name={props.name}>
      <ProfileBox>
        <ProfileContentBox>
          <ProfileImageBox>
            <Image src='/profile.png' width={320} height={480} alt={''}></Image>
            <div>made by stable diffusion</div>
            <SocialLinkBox>
              <SocialIconButtonBox>
                <IconButton aria-label='Send Email' component='a' href='mailto:riuki01@gmail.com'>
                  <MailOutlineIcon />
                </IconButton>
              </SocialIconButtonBox>
              <SocialIconButtonBox>
                <IconButton aria-label='Open Github' component='a' href='https://github.com/reeschan' target='_blank'>
                  <GitHubIcon />
                </IconButton>
              </SocialIconButtonBox>
            </SocialLinkBox>
          </ProfileImageBox>
          <ProfileDescriptionBox>
            <ProfileDescriptionTextBox>{props.description}</ProfileDescriptionTextBox>
          </ProfileDescriptionBox>
        </ProfileContentBox>
      </ProfileBox>
    </Element>
  )
}
