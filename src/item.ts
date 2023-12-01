import { v4 as uuidv4 } from 'uuid';


export type Item = {
  quantity: number;
  id: string;
  name: string;
  price: number;
  description: string;
};

export function createItem(quantity:number, name: string, price: number, description: string): Item {
    return {
        quantity: 1,
        id: uuidv4(),
        name,
        price,
        description,
  };
}
console.log()