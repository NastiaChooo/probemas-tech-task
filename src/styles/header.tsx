import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  navbarHeaderItem: {
    fontFamily: "Gilroy",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#FAFAFA",
    textAlign: "center",
    whiteSpace: "nowrap",
    transitionDuration: ".3s",

    padding: "15px 8px",

    "&:hover": {
      cursor: "pointer",
      color: "#E9B109BF",
    },
    "@media (max-width: 1154px)": {
      whiteSpace: "normal",
    },
  },
  navbarHeaderItemInBgMenu: {
    fontFamily: "Gilroy",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FAFAFA",
    textAlign: "center",
    whiteSpace: "nowrap",
    transitionDuration: ".3s",

    padding: "10px 0px",
    borderBottom: "1px solid #FFFFFF33",

    "&:hover": {
      cursor: "pointer",
      color: "#E9B109BF",
    },
  },
  selectList: {
    width: "105px",
    border: "0",
    outline: "none",
    fontFamily: "Gilroy",
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "center",
    backgroundColor: "#142241",
    padding: 0,
  },
  selectListBgMenu: {
    width: "100vw",
    border: "0",
    boxShadow: "none",
    outline: "none",
    fontFamily: "Gilroy",
    fontSize: "16px",
    lineHeight: "21px",
    textAlign: "center",
    backgroundColor: "#142241",
    padding: 0,
    borderBottom: "1px solid #FFFFFF33",
    borderRadius: "0",
  },
}));
