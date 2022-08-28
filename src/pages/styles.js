import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  common: {
    outline: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    background: "#CFD8DC",
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontWeight: 600,
    fontSize: "20px",
    color: "#000000",
    lineHeight: "24px",
    padding: "15px 40px",
    cursor: "pointer",
    "&:first-child": {
      borderRadius: "5px 0 0 5px"
    },
    "&:last-child": {
      borderRadius: "0px 5px 5px 0px"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      padding: "5px 15px"
    }
  },
  active: {
    color: "#fff",
    background: theme.palette.primary.main
  },
  save: {
    background: theme.palette.secondary.main,
    color: "#fff"
  },
  btnSaveAll: {
    display: "flex",
    justifyContent: "end",
    marginTop: "40px",
    marginRight: "40px"
  },
  myBtn: {
    boxShadow:
      "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    padding: "15px 70px",
    fontSize: "15px",
    background: "#15703C",
    color: "#fff",
    "&:hover": {
      background: "#15703C",
      color: "#fff"
    },
    "&:disabled": {
      background: "#15703C",
      color: "#fff"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 35px",
      fontSize: "12px"
    }
  },
  root2: {
    background: theme.palette.primary.main,
    flexGrow: 1
  },
  container: {
    paddingTop: "5px",
    background: theme.palette.primary.main,
    color: "#fff",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1)
    }
  },
  wrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: theme.spacing(8),
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      // paddingLeft: theme.spacing(2),
      display: "none"
    }
  },
  userName: {
    fontFamily: "Barlow Semi Condensed",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "24px",
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

export default useStyles;
