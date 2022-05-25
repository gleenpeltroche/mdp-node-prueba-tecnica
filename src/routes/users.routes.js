import {Router} from 'express';
import { getUsers, getUsersAverageAge, createNewUser } from '../controllers/users.controller.js';
const router = Router();

router.get('/users', getUsers);
router.get('/users/age_average', getUsersAverageAge);
router.post('/users', createNewUser);

export default router;
