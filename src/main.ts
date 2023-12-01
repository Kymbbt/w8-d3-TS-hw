
import { createUser, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './user';
import { createItem } from './item';

const user = createUser('John Doe', 30);


const itemA = createItem( 10, 'Description A', 5, 'Item A');
const itemB = createItem( 15, 'Description B', 6, 'Item B',);
const itemC = createItem( 20, 'Description C', 7, 'Item C',);
const itemD = createItem( 20, 'Description D', 8,'Item D');

addToCart(user, itemA);

printCart(user);


console.log('Cart Total:', cartTotal(user));


addToCart(user, itemB);
addToCart(user, itemC);
addToCart(user, itemA);

printCart(user);


console.log('Cart Total:', cartTotal(user));


removeFromCart(user, itemA);

printCart(user);


console.log('Cart Total:', cartTotal(user));