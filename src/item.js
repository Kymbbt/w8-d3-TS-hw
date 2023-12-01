"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = void 0;
var uuid_1 = require("uuid");
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description,
    };
}
exports.createItem = createItem;
