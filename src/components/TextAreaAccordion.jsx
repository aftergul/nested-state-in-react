import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@material-ui/core/";
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
  },
  textArea: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    width: "100%",
    borderRadius: "4px",
    height: "100px",
    padding: "8px"
  },
  textAreaWrapper: { textAlign: "center" }
}));

const TextAreaAccordion = ({ data, handleInputChange }) => {
  const classes = useStyles();
  return (
    <Accordion style={{ borderRadius: "8px" }} defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          {data?.name} <br />
          <span className={classes.subText}>{data?.subtext}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.root1}>
          <div className={classes.textAreaWrapper}>
            <textarea
              className={classes.textArea}
              placeholder="Provide details"
              onChange={(e) => handleInputChange(e, "carePlanGoal")}
              name="goalText"
              // value={carePlanData?.carePlanGoal?.goalText}
            ></textarea>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default TextAreaAccordion;
