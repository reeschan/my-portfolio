import { CareerItem } from "@/types/type";
import axios from "axios";
import { use } from "react";
import { CareerDisplay } from "./careerDisplay";

interface CareerProps {
  name: string;
}

const getCareer = async () => {
  const careerItem = (await axios.get(`${process.env.API_BASE_URL}/api/career`))
    .data as CareerItem[];

  return careerItem;
};

export const Career = (props: CareerProps) => {
  const career = use(getCareer());
  return <CareerDisplay name={props.name} careers={career} />;
};
