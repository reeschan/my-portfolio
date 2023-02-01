import { Career } from './career'
import { Header } from './header'
import { Profile } from './profile'
import { Skill } from './skill'
import { Top } from './top'
import style from '../styles/page.module.css'
import { Particles } from './particles'

const topPageName = 'Top'
const profilePageName = 'Profile'
const careerPageName = 'Career'
const skillPageName = 'Skill'
const navItems = [topPageName, profilePageName, careerPageName, skillPageName]

export default async function Page() {
  return (
    <div className={style.AppBox}>
      <Particles />
      <Header navItems={navItems}></Header>
      <Top name={topPageName.toLowerCase()} nextPageName={profilePageName.toLowerCase()} />
      <Profile name={profilePageName.toLowerCase()} />
      <Career name={careerPageName.toLowerCase()} />
      <Skill name={skillPageName.toLocaleLowerCase()} />
    </div>
  )
}
