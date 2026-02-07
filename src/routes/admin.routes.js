import express from 'express';
import {
    getAdminHome,
    getAdminProfile
} from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/', getAdminHome);
router.get('/:id', getAdminProfile);

export default router;
