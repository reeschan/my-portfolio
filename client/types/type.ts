
export type Todo = {
  title: string;
}

export const SkillCategoryType = {
  FrontEnd: "Front End",
  BackEnd: "Back End",
  DevOps: "DevOps",
} as const

export type SkillCategoryType = typeof SkillCategoryType[keyof typeof SkillCategoryType]

export type SkillItem = {
  name: string;
  category: SkillCategoryType;
  level: number;
}

export type ProfileItem = {
  description: string;
}

export type CareerItem = {
  startDate: Date;
  endDate: Date;
  title: string;
  subtitle: string;
  description: string;
}

export type AuthItem = {
  password: string;
}