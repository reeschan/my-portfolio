import { SkillCategoryType, SkillItem } from "@/types/type";
import axios from "axios";
import { use } from "react";
import { SkillDisplay } from "./skillDisplay";

interface SkillProps {
  name: string;
}

const getSkill = async (): Promise<SkillItem[]> => {
  const skillItem = (await axios.get(`${process.env.API_BASE_URL}/api/skill`))
    .data as SkillItem[];

  return skillItem;
};

export const Skill = (props: SkillProps) => {
  const skills = use(getSkill());
  const frontEndSkills: SkillItem[] = [];
  const backEndSkills: SkillItem[] = [];
  const devOpsSkills: SkillItem[] = [];

  skills.forEach((skill) => {
    if (skill.category === SkillCategoryType.FrontEnd) {
      frontEndSkills.push(skill);
    }
    if (skill.category === SkillCategoryType.DevOps) {
      devOpsSkills.push(skill);
    }
    if (skill.category === SkillCategoryType.BackEnd) {
      backEndSkills.push(skill);
    }
  });

  return (
    <>
      <SkillDisplay
        name={props.name}
        frontEndSkills={frontEndSkills}
        backEndSkills={backEndSkills}
        devOpsSkills={devOpsSkills}
      />
    </>
  );
};
