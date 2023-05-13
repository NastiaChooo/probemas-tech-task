import React, { createContext, useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { CURRENCY_DATA, ITEM_PRICE } from "./utils/variables";
import {
  IBurgerMenuProvider,
  ICalculatorProvider,
  ICurrency,
} from "./types/interfaces";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState(CURRENCY_DATA[0]);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const updatePrice = (amount: string) => {
    setAmount(amount);
  };

  const onChangeCurrency = (currency: ICurrency) => {
    setCurrency(currency);
  };

  const onChangeBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  useEffect(() => {
    const num = +amount * ITEM_PRICE * currency.coefficient;
    setPrice(parseFloat(num.toFixed(3)));
  }, [amount, currency.coefficient]);

  const calculatorProviderValue: ICalculatorProvider = {
    amount,
    price,
    updatePrice,
    currency,
    onChangeCurrency,
  };

  const burgerMenuProviderValue: IBurgerMenuProvider = {
    showBurgerMenu,
    onChangeBurgerMenu,
  };

  return (
    <div className="App">
      <BurgerMenuContext.Provider value={burgerMenuProviderValue}>
        <CalculatorContext.Provider value={calculatorProviderValue}>
          {showBurgerMenu && <BurgerMenu />}
          <MainPage />
        </CalculatorContext.Provider>
      </BurgerMenuContext.Provider>
    </div>
  );
}

export const CalculatorContext = createContext<ICalculatorProvider>({
  price: 0,
  amount: "",
  updatePrice: () => {},
  currency: CURRENCY_DATA[0],
  onChangeCurrency: () => {},
});

export const BurgerMenuContext = createContext<IBurgerMenuProvider>({
  showBurgerMenu: false,
  onChangeBurgerMenu: () => {},
});

export default App;
