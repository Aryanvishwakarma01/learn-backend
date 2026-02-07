import express from 'express';
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.send(`Comments for post ${req.params.postId}`);
});

export default router;
