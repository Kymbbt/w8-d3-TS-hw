"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = void 0;
const uuid_1 = require("uuid");
function createItem(quantity, name, price, description) {
    return {
        quantity: 1,
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
    };
}
exports.createItem = createItem;
