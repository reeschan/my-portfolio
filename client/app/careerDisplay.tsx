"use client";
import { Element } from "react-scroll";
import { CareerItem } from "@/types/type";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CareerBox, CareerContentBox } from "@/styles/career";
import dayjs from "dayjs";

interface CareerDisplayProps {
  name: string;
  careers: CareerItem[];
}

export const CareerDisplay = (props: CareerDisplayProps) => {
  return (
    <Element name={props.name}>
      <CareerBox>
        <CareerContentBox>
          <VerticalTimeline>
            {props.careers
              .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
              .map((career) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date={`${dayjs(career.startDate).format("YYYY-MM")}-${dayjs(
                      career.endDate
                    ).format("YYYY-MM")}}`}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {career.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {career.subtitle}
                    </h4>
                    <p>{career.description}</p>
                  </VerticalTimelineElement>
                );
              })}
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
        </CareerContentBox>
      </CareerBox>
    </Element>
  );
};
