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
 *  - name: "user"
 *    description: "Operations about user"
 *    externalDocs:
 *    - description: "Find out more about our store"
 *    url: "http://swagger.io"
 */
/**
 * @swagger
 * "/associated-accounts/":
 *      put:
 *        tags:
 *        - associated-accounts-Routers
 *        description: Update associated account
 *        operationId:
 *        produces:
 *        - application/json
 *        parameters:
 *        - name: id
 *          in: path
 *          description: user id
 *          required: true
 *        - name: type
 *          in: path
 *          description: accountype to be updated
 *          required: true
 *        - name: Parameters
 *          in: body
 *          description: Parameters to update an associated account
 *          required: true
 *          schema:
 *            "$ref": "#/definitions/associateAccounUpdate"
 *        responses:
 *          '200':
 *            description: create response
 */
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    yield home_controller_1.index(req, res);
}));
exports.default = home_controller_1.index;
//# sourceMappingURL=user.js.map