import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
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
  dateTag: {
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    background: theme.palette.secondary.main,
    borderRadius: "4px",
    color: "#fff",
    padding: "10px 20px 10px 20px",
    width: "100%",
    fontWeight: 500,
    fontSize: "20px",
    outline: "none",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 8px 8px 8px",
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
      width: "100%"
    }
  }
}));

const DateAndTimeAccordion = ({ data, handleCheck }) => {
  const classes = useStyles();
  return (
    <Accordion style={{ borderRadius: "8px" }} defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{data?.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.root1}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  type="date"
                  className={classes.dateTag}
                  id="date-tag"
                  // onChange={(e) => setDate(e)}
                  name="date"
                  // value={date ? moment(date).format('YYYY-MM-DD') : ''}
                  variant="outlined"
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  type="time"
                  className={classes.dateTag}
                  id="date-tag"
                  // onChange={(e) => setTime(e)}
                  name="time"
                  // value={time}
                  variant="outlined"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default DateAndTimeAccordion;
