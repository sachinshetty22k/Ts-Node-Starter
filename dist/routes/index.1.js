"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const router = express_1.Router();
/**
 * @swagger
 *  tags:
 *  - name: "pet"
 *    description: "Everything about your Pets"
 *    externalDocs:
 *    - description: "Find out more"
 *    url: "http://swagger.io"
 *  - name: "store"
 *    description: "Access to Petstore orders"
 *  - name: "user"
 *    description: "Operations about user"
 *    externalDocs:
 *    - description: "Find out more about our store"
 *    url: "http://swagger.io"
 */
/**
 * @swagger
 *  patch:
 *    tags:
 *    - Account-Routers
 *    description: for updating user detail
 *    operationId: for the URL
 *    produces:
 *    - application/json
 *    parameters:
 *    - name: id
 *      in: path
 *      description: _id of an authenticated user
 *      required: true
 *      type: string
 *    - name: body parameters for updating
 *      in: body
 *      description: Parameters to update(username,credential,accesstoken cant be upadated)
 *      required: false
 *    responses:
 *      '200':
 *        description: updated user object
 */
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    yield home_controller_1.index(req, res);
}));
exports.default = home_controller_1.index;
//# sourceMappingURL=index.1.js.map