import express from 'express';
import commentsRouter from './comments.routes.js';
import {showPosts} from '../controllers/post.controller.js'
const router = express.Router();

router.use('/', showPosts);
router.use('/:postId/comments', commentsRouter);

export default router;
