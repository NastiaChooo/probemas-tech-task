import React, { FC, useContext, useState } from "react";
import { CURRENCY_DATA } from "../utils/variables";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import { CalculatorContext } from "../App";
import { useStyles } from "../styles/header";

type Props = {
  inBgMenu?: boolean;
};

const SelectCurrency: FC<Props> = ({ inBgMenu }) => {
  const [open, setOpen] = useState(false);
  const { currency, onChangeCurrency } = useContext(CalculatorContext);
  const classes = useStyles();

  const logo = () => {
    return !open ? (
      <img
        src="/arrow-select-icon.svg"
        alt=""
        width={inBgMenu ? "16px" : undefined}
        height={inBgMenu ? "16px" : undefined}
      />
    ) : (
      <img
        src="/arrow-select-icon-opened.svg"
        alt=""
        width={inBgMenu ? "16px" : undefined}
        height={inBgMenu ? "16px" : undefined}
        style={{ transform: "rotate(180deg)" }}
      />
    );
  };

  return (
    <FormControl
      sx={{
        maxWidth: inBgMenu ? "100%" : 90,
        marginBottom: open && inBgMenu ? "175px" : "0",
      }}
      size="small"
    >
      <Select
        value={currency.id}
        IconComponent={logo}
        autoFocus={false}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        variant="outlined"
        sx={{
          fontFamily: "Gilroy",
          fontSize: "14px",
          lineHeight: "21px",
          textAlign: "center",
          color: open ? "#E9B109" : "#FFFFFF",
          padding: "6px",
          ".MuiOutlinedInput-notchedOutline": { border: 0, outline: 0 },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "red",
            border: 0,
            boxSizing: "border-box",
            outline: 0,
          },
          ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              padding: "10px 5px 10px 0",
              width: inBgMenu ? "100vw" : "120px",
              display: "flex",
              alignItems: "center",
            },
        }}
        MenuProps={{
          classes: {
            list: !inBgMenu ? classes.selectList : classes.selectListBgMenu,
          },
          autoFocus: false,
          elevation: 0,
        }}
        onChange={(e) => {
          const currency = CURRENCY_DATA.find(
            (currency) => currency.id === e.target.value
          );

          if (!currency) return;
          onChangeCurrency(currency);
        }}
      >
        {!!CURRENCY_DATA &&
          CURRENCY_DATA.map((currency) => (
            <MenuItem
              key={currency.id}
              value={currency.id}
              sx={{
                fontFamily: "Gilroy",
                fontSize: "14px",
                lineHeight: "21px",
                textAlign: "center",
                padding: inBgMenu ? "8px 0" : "",
                color: "#FFFFFF",

                "&:hover": {
                  backgroundColor: "rgba(44, 62, 103, 0.2)",
                  borderRight: "2px solid #E9B109",
                  color: "#E9B109",
                },
                "&.Mui-selected": {
                  backgroundColor: "inherit",
                },
              }}
            >
              <img
                src={currency.iconUrl}
                alt=""
                style={{ width: "16px", height: "16px", marginRight: "8px" }}
              />
              {currency.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectCurrency;
