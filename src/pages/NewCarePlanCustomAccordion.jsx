import React from "react";
import GeneralCustomAccordion from "../components/GeneralCustomAccordion";
import DateAndTimeAccordion from "../components/DateAndTimeAccordion";
import TextAreaAccordion from "../components/TextAreaAccordion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  root1: {
    width: "100%",
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    padding: "0px 20px 20px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px 0px 0px",
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0)
    }
  }
}));

const NewCarePlanCustomAccordion = ({
  sectionId,
  sectionData,
  carePlanDetailsInfo,
  setCarePlanDetailsInfo,
  handleSelection
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionData?.questions?.map((data) => {
        if (data.answerType === "single" || data.answerType === "multiple") {
          return (
            <GeneralCustomAccordion
              key={data.id}
              questionId={data.id}
              questionData={data}
              carePlanDetailsInfo={carePlanDetailsInfo}
              setCarePlanDetailsInfo={setCarePlanDetailsInfo}
              sectionId={sectionId}
              handleSelection={handleSelection}
              sectionData={sectionData}
            />
          );
        }
        if (data.answerType === "date") {
          return (
            <DateAndTimeAccordion
              key={data.id}
              questionId={data.id}
              questionData={data}
              carePlanDetailsInfo={carePlanDetailsInfo}
              setCarePlanDetailsInfo={setCarePlanDetailsInfo}
              sectionId={sectionId}
              handleSelection={handleSelection}
              sectionData={sectionData}
            />
          );
        }
        if (data.answerType === "text") {
          return (
            <TextAreaAccordion
              data={data}
              // handleInputChange={handleInputChange}
              key={data.id}
              questionId={data.id}
              questionData={data}
              carePlanDetailsInfo={carePlanDetailsInfo}
              setCarePlanDetailsInfo={setCarePlanDetailsInfo}
              sectionId={sectionId}
              handleSelection={handleSelection}
              sectionData={sectionData}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default NewCarePlanCustomAccordion;
