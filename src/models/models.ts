interface Rating {
    rate: number,
    count: number
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    quantity: number; 
}

export interface IState {
    start: number;
    end: number;
    currentPage: number;
    totalPages: number;
}

export enum EActionType {
  NEXT = 'NEXT',
  PREV = 'PREV',
  SET_TOTAL = 'SET_TOTAL',
  RESET = 'RESET'
}

export interface IAction {
  type: EActionType;
  payload: number;
}

export interface IUser {
  id?:string;
  name:string;
  email?: string;
  cart: Product[];
  userName?: string;
  password?:string;
}
