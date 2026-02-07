import express from 'express';
import { getUserPage, getUserById } from '../controllers/user.controller.js';
import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js';
const router = express.Router();



router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);
  
router.get('/', getUserPage);
router.get('/:id', getUserById)
export default router;
