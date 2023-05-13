import React, { useContext } from "react";
import { Box, Button, List, ListItem } from "@mui/material";
import { useStyles } from "../styles/header";
import { BurgerMenuContext } from "../App";
import SelectCurrency from "./Select";

const BurgerMenu = () => {
  const classes = useStyles();
  const { onChangeBurgerMenu } = useContext(BurgerMenuContext);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#142241",
        zIndex: "2",
        padding: "0 16px",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          padding: "32px 8px",
          width: "100%",
          borderBottom: "1px solid #FFFFFF33",
          cursor: "pointer",
        }}
      >
        <img
          src="/close-burger-menu-icon.svg"
          alt="close burger menu"
          width="18px"
          height="18px"
          onClick={() => onChangeBurgerMenu()}
        />
      </Box>
      <Box>
        <List
          sx={{
            width: "100%",
            listStyle: "none",
            padding: "0",
          }}
        >
          <ListItem className={classes.navbarHeaderItemInBgMenu} disablePadding>
            OSRS Gold
          </ListItem>
          <ListItem className={classes.navbarHeaderItemInBgMenu} disablePadding>
            RS3 Gold
          </ListItem>
          <ListItem className={classes.navbarHeaderItemInBgMenu} disablePadding>
            Sell RS Gold
          </ListItem>
          <ListItem className={classes.navbarHeaderItemInBgMenu} disablePadding>
            OSRS Items
          </ListItem>
          <ListItem className={classes.navbarHeaderItemInBgMenu} disablePadding>
            OSRS Accounts
          </ListItem>
          <ListItem className={classes.navbarHeaderItemInBgMenu} disablePadding>
            Reward Chests
          </ListItem>
        </List>
      </Box>
      <SelectCurrency inBgMenu />
      <Box
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          sx={{
            fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
            textTransform: "none",
            textAlign: "center",
            color: "#FAFAFA",
            whiteSpace: "nowrap",
            boxShadow: "4px 0px 3px rgba(23, 34, 39, 0.25)",
            border: "2px solid #FAFAFA",
          }}
        >
          Sign Up
        </Button>

        <Button
          variant="text"
          sx={{
            width: "87px",
            height: "33px",
            backgroundColor: "#E9B109",
            boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
            padding: "8px 24px",

            textTransform: "none",
            fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
            textAlign: "center",
            color: "#142241",
            whiteSpace: "nowrap",
            transitionDuration: ".3s",

            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#e8bb32",
            },
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default BurgerMenu;
