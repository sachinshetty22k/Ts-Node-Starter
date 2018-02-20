import { Router } from 'express';
import { index } from '../controllers/home.controller';

const router: Router = Router();
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
router.get('/', async (req, res) => {
    await index(req, res);
});

export default index;
