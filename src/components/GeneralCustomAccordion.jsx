import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography
} from "@material-ui/core/";
import CustomCheckbox from "./CustomChexbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  },
  heading: {
    fontSize: "24px",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 500,
    lineHeight: "29px",
    paddingLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px"
    }
  },
  subText: { fontSize: "18px" },
  text: {
    marginRight: theme.spacing(2),
    color: "#757575",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 500,
    fontSize: "24px"
  }
}));

const GeneralCustomAccordion = ({
  questionId,
  questionData,
  handleSelection,
  carePlanDetailsInfo,
  setCarePlanDetailsInfo,
  sectionId,
  sectionData
}) => {
  const classes = useStyles();
  return (
    <Accordion
      style={{ borderRadius: "8px" }}
      defaultExpanded={true}
      key={questionData.id}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          {questionData?.name} ({questionData?.answerType} choice)<br />
          <span className={classes.subText}>{questionData?.subtext}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.root1}>
          <Grid container spacing={5}>
            {questionData.items?.map((item) => (
              <Grid item xs={12} sm={6}>
                <CustomCheckbox
                  key={item.id}
                  itemId={item.id}
                  label={item.name}
                  selected={item?.isSelected}
                  questionData={questionData}
                  handleSelection={handleSelection}
                  questionId={questionId}
                  carePlanDetailsInfo={carePlanDetailsInfo}
                  setCarePlanDetailsInfo={setCarePlanDetailsInfo}
                  sectionId={sectionId}
                  sectionData={sectionData}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default GeneralCustomAccordion;
