import { SkillItem, SkillCategoryType } from "@/types/type";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function useChart() {
  const makeRadarChart = (data: SkillItem[]) => {
    const skillCategory = data[0].category;
    const skillSets = [
      { category: SkillCategoryType.FrontEnd, color: "#0593A2" },
      { category: SkillCategoryType.BackEnd, color: "#151F30" },
      { category: SkillCategoryType.DevOps, color: "#FF7A48" },
    ];

    const areaColor =
      skillSets.filter((skillSet) => skillSet.category === skillCategory)[0]
        ?.color ?? "#0593A2";

    return (
      <ResponsiveContainer width={400} height={300}>
        <RadarChart
          title="test"
          cx={200}
          cy={150}
          data={data}
          margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
        >
          <text
            x={400 / 2}
            y={10}
            fill="#333"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="20">{skillCategory}</tspan>
          </text>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" fontSize="14px" />
          <PolarRadiusAxis
            domain={[0, 6]}
            fontSize="16px"
            tickCount={7}
            tickFormatter={(val) => {
              if (val > 5) {
                return "";
              } else {
                return val;
              }
            }}
            angle={90}
          />
          <Radar
            name=""
            dataKey="level"
            stroke={areaColor}
            fill={areaColor}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  return { makeRadarChart };
}
