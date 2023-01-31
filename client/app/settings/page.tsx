"use client";
import useAuthContext from "@/hooks/useAuthContext";
import { CareerItem, SkillCategoryType, SkillItem } from "@/types/type";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import dayjs from "dayjs";
import { useReducer } from "react";

export default function Page() {
  const { isAutherized } = useAuthContext();

  const [skillEvent, updateSkillEvent] = useReducer(
    (prev: SkillItem, next: SkillItem) => {
      return { ...prev, ...next };
    },
    { category: SkillCategoryType.FrontEnd, level: 0, name: "" }
  );
  const [careerEvent, updateCareerEvent] = useReducer(
    (prev: CareerItem, next: CareerItem) => {
      return { ...prev, ...next };
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      title: "",
      subtitle: "",
      description: "",
    }
  );

  const postSkill = async () => {
    await axios.post(`/api/skill`, skillEvent);
    updateSkillEvent({
      category: SkillCategoryType.FrontEnd,
      level: 2,
      name: "",
    });
  };
  const postCareer = async () => {
    await axios.post(`/api/career`, careerEvent);
    updateCareerEvent({
      startDate: new Date(),
      endDate: new Date(),
      title: "",
      subtitle: "",
      description: "",
    });
  };
  return (
    <>
      {isAutherized ? (
        <Box>
          <Card>
            <CardContent>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  SkillCategory
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={skillEvent.category}
                  label="Age"
                  onChange={(event) =>
                    updateSkillEvent({
                      category: event.target.value as SkillCategoryType,
                      level: skillEvent.level,
                      name: skillEvent.name,
                    })
                  }
                >
                  <MenuItem value={SkillCategoryType.FrontEnd}>
                    FrontEnd
                  </MenuItem>
                  <MenuItem value={SkillCategoryType.BackEnd}>BackEnd</MenuItem>
                  <MenuItem value={SkillCategoryType.DevOps}>DevOps</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ marginLeft: 5 }}>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={skillEvent.level}
                  label="Age"
                  onChange={(event) =>
                    updateSkillEvent({
                      category: skillEvent.category,
                      level: event.target.value as number,
                      name: skillEvent.name,
                    })
                  }
                >
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <TextField
                value={skillEvent.name}
                onChange={(event) =>
                  updateSkillEvent({
                    category: skillEvent.category,
                    level: skillEvent.level,
                    name: event.target.value,
                  })
                }
                label="Name"
                sx={{ marginLeft: 5 }}
              >
                name
              </TextField>
              <Button
                onClick={postSkill}
                variant="contained"
                sx={{ marginLeft: 5 }}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                minDate={dayjs("2012-03-01")}
                maxDate={dayjs("2023-06-01")}
                value={careerEvent.startDate}
                onChange={(newValue) =>
                  updateCareerEvent({
                    ...careerEvent,
                    startDate: newValue?.toDate() ?? new Date(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
              <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                minDate={dayjs("2012-03-01")}
                maxDate={dayjs("2023-06-01")}
                value={careerEvent.endDate}
                onChange={(newValue) =>
                  updateCareerEvent({
                    ...careerEvent,
                    endDate: newValue?.toDate() ?? new Date(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
              <TextField
                value={careerEvent.title}
                onChange={(event) =>
                  updateCareerEvent({
                    ...careerEvent,
                    title: event.target.value,
                  })
                }
                label="Title"
              />
              <TextField
                value={careerEvent.subtitle}
                onChange={(event) =>
                  updateCareerEvent({
                    ...careerEvent,
                    subtitle: event.target.value,
                  })
                }
                label="Subtitle"
                sx={{ marginLeft: 5 }}
              />
              <TextField
                value={careerEvent.description}
                onChange={(event) =>
                  updateCareerEvent({
                    ...careerEvent,
                    description: event.target.value,
                  })
                }
                label="Description"
                sx={{ marginLeft: 5 }}
              />
              <Button
                onClick={postCareer}
                variant="contained"
                sx={{ marginLeft: 5 }}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Box>Not Authorized</Box>
      )}
    </>
  );
}
