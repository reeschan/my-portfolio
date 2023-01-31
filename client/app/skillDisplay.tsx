"use client";
import useChart from "@/hooks/useChart";
import {
  MereSkillChartBox,
  SkillBox,
  SkillChartBox,
  SkillContentBox,
} from "@/styles/skill";
import { SkillItem } from "@/types/type";
import { Element } from "react-scroll";

interface SkillDisplayProps {
  name: string;
  frontEndSkills: SkillItem[];
  backEndSkills: SkillItem[];
  devOpsSkills: SkillItem[];
}

export const SkillDisplay = (props: SkillDisplayProps) => {
  const { makeRadarChart } = useChart();
  return (
    <Element name={props.name}>
      <SkillBox>
        <SkillContentBox>
          Skill Sets
          <SkillChartBox>
            <MereSkillChartBox>
              {makeRadarChart(props.frontEndSkills)}
            </MereSkillChartBox>
            <MereSkillChartBox>
              {makeRadarChart(props.backEndSkills)}
            </MereSkillChartBox>
            <MereSkillChartBox>
              {makeRadarChart(props.devOpsSkills)}
            </MereSkillChartBox>
          </SkillChartBox>
        </SkillContentBox>
      </SkillBox>
    </Element>
  );
};
