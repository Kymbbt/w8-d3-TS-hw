"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createUser = void 0;
// import { createItem} from './item';
const uuid_1 = require("uuid");
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function addToCart(user, item) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(user, item) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(item, user, quantity) {
    user.cart = user.cart.filter((cartItem) => {
        if (cartItem.id === item.id) {
            quantity--;
            return quantity >= 0;
        }
        return true;
    });
}
exports.removeQuantityFromCart = removeQuantityFromCart;
// export function removeQuantityFromCart(user: User, item: Item, quantity: number): void {
//   const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
//   if (index !== -1) {
//         user.cart[].quantity -= quantity;
//         if (user.cart(index).quantity <= 0) {
//       user.cart.splice(index, 1);
//     }
//   }
// }
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log('User Cart:');
    user.cart.forEach((item) => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}
exports.printCart = printCart;
