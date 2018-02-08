import { Router } from 'express';
import { index } from '../controllers/home';

const router: Router = Router();

router.get('/', async (req, res) => {
    await index(req, res);
});

export default index;
