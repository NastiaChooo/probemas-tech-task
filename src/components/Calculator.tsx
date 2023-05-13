import React, { useContext, useState } from "react";
import { Box, FormHelperText, TextField } from "@mui/material";
import { CalculatorContext } from "../App";

const Calculator = () => {
  const { amount, price, currency, updatePrice } =
    useContext(CalculatorContext);
  const [error, setError] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "300px",
        flexDirection: "row",
        gap: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box>
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[0-9.]+$/.test(value) || value === "") {
              updatePrice(value);
              setError(false);
            } else {
              setError(true);
            }
          }}
        />
        {error && String(amount).length > 0 && (
          <FormHelperText>Please using only numbers</FormHelperText>
        )}
      </Box>

      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={`${currency.name}: ${price}`}
      />
    </Box>
  );
};

export default Calculator;
