import { Card, makeStyles } from "@material-ui/core";

import CheckIcon from "../assets/check.svg";
import React from "react";
const Delimeter='|';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow:
      "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  text: {
    fontSize: "18px",
    fontWeight: 500
  },
  icon: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(2)
    }
  }
}));

const CustomCheckbox = ({ label, 
label1, 
selected, 
data, 
questionId,
sectionId,
itemId,
handleSelection
 }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{
        background: selected ? "#219653" : "#CFD8DC",
        justifyContent: selected ? "center" : "center"
      }}
      onClick={() => handleSelection(sectionId+Delimeter+questionId+Delimeter+itemId)}
    >
      {selected && (
        <img src={CheckIcon} alt="check mark" className={classes.icon} />
      )}
      <div className={classes.textWrapper}>
        <span
          className={classes.text}
          style={{ color: selected ? "#fff" : "#000" }}
        >
          {label}
        </span>
        <br />
        {label1 && (
          <span
            className={classes.text}
            style={{ color: selected ? "#fff" : "#000" }}
          >
            {label1}
          </span>
        )}
      </div>
    </Card>
  );
};

export default CustomCheckbox;
