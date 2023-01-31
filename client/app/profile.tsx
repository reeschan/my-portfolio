import { ProfileItem } from '@/types/type'
import axios from 'axios'
import { use } from 'react'
import { ProfileDisplay } from './profileDisplay'

interface ProfileProps {
  name: string
}

const getProfile = async (): Promise<ProfileItem> => {
  const profileItem = (await axios.get(`${process.env.API_BASE_URL}/api/profile`)).data as ProfileItem

  return profileItem
}

export const Profile = (props: ProfileProps) => {
  const { description } = use(getProfile())
  return <ProfileDisplay name={props.name} description={description} />
}
