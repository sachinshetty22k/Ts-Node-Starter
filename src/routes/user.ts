import { Router } from 'express';
import { index } from '../controllers/home.controller';

const router: Router = Router();
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
router.get('/', async (req, res) => {
    await index(req, res);
});

export default index;
