
import { Item } from './item';
import { createItem} from './item';
import { v4 as uuidv4 } from 'uuid';

export type User = {
  id: string;
  name: string;
  age: number;
  cart: Item[];
};

export function createUser(name: string, age: number): User {
  return {
    id: uuidv4(),
    name,
    age,
    cart: [],
  };
}

export function addToCart(user: User, item: Item): void {
  user.cart.push(item);
}

export function removeFromCart(user: User, item: Item): void {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}


export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
  user.cart = user.cart.filter((cartItem) => {
    if (cartItem.id === item.id) {
      quantity--;
      return quantity >= 0;
    }
    return true;
  });
}
// export function removeQuantityFromCart(user: User, item: Item, quantity: number): void {
//   const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
//   if (index !== -1) {
//         user.cart[].quantity -= quantity;
//         if (user.cart(index).quantity <= 0) {
//       user.cart.splice(index, 1);
//     }
//   }
// }

export function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

export function printCart(user: User): void {
  console.log('User Cart:');
  user.cart.forEach((item) => {
    console.log(`- ${item.name}: $${item.price}`);
  });
}