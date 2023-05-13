export interface ICurrency {
  coefficient: number;
  name: string;
  id: string;
  iconUrl: string;
}

export interface ICalculatorProvider {
  price: number;
  amount: string;
  currency: ICurrency;
  updatePrice: (amount: string) => void;
  onChangeCurrency: (currency: ICurrency) => void;
}

export interface IBurgerMenuProvider {
  showBurgerMenu: boolean;
  onChangeBurgerMenu: () => void;
}
