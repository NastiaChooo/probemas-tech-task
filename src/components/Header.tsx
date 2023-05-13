import React, { useContext } from "react";
import { Box, Button, List, ListItem, useMediaQuery } from "@mui/material";
import { useStyles } from "../styles/header";
import SelectCurrency from "./Select";
import { BurgerMenuContext } from "../App";

const Header = () => {
  const classes = useStyles();
  const desktopScreen = useMediaQuery("(max-width: 1154px)");
  const tabletScreen = useMediaQuery("(max-width: 960px)");
  const mobileScreen = useMediaQuery("(max-width: 640px)");

  const { onChangeBurgerMenu } = useContext(BurgerMenuContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        padding: !desktopScreen ? "0 70px" : mobileScreen ? "0 20px" : "0 30px",
        display: "flex",
        marginBottom: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#142241",
      }}
    >
      {tabletScreen && (
        <img
          src="/burger-menu-icon.svg"
          alt="burger-menu"
          style={{ cursor: "pointer" }}
          onClick={() => onChangeBurgerMenu()}
        />
      )}
      <Box
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <img src="/logo.svg" alt="logo" style={{ cursor: "pointer" }} />
        {!tabletScreen && (
          <List
            sx={{
              width: "100%",
              listStyle: "none",
              display: "flex",
              padding: "0",
              alignItems: "center",
            }}
          >
            <ListItem className={classes.navbarHeaderItem} disablePadding>
              OSRS Gold
            </ListItem>
            <ListItem className={classes.navbarHeaderItem} disablePadding>
              RS3 Gold
            </ListItem>
            <ListItem className={classes.navbarHeaderItem} disablePadding>
              Sell RS Gold
            </ListItem>
            <ListItem className={classes.navbarHeaderItem} disablePadding>
              OSRS Items
            </ListItem>
            <ListItem className={classes.navbarHeaderItem} disablePadding>
              OSRS Accounts
            </ListItem>
            <ListItem className={classes.navbarHeaderItem} disablePadding>
              Reward Chests
            </ListItem>
          </List>
        )}
      </Box>
      <Box
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {!tabletScreen && <SelectCurrency />}
        <Box
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {!tabletScreen && (
            <Button
              variant="text"
              sx={{
                fontFamily: "Gilroy",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "17px",
                textAlign: "center",
                color: "#FFFFFF",
                textTransform: "none",
                whiteSpace: "nowrap",
              }}
            >
              Sign Up
            </Button>
          )}

          <Button
            variant="text"
            sx={{
              width: "87px",
              height: "33px",
              backgroundColor: "#E9B109",
              boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.15)",
              borderRadius: "4px",
              padding: "8px 24px",

              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17px",
              textAlign: "center",
              color: "#142241",
              whiteSpace: "nowrap",
              textTransform: "none",
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
    </Box>
  );
};

export default Header;
