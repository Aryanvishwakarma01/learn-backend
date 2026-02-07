import express from 'express';
import adminRoutes from './routes/admin.routes.js';
import userRoutes from './routes/user.routes.js'
import postsRouter from './routes/posts.routes.js';

const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to homepage")
})

app.use('/admin', adminRoutes);
app.use('/user', userRoutes)
app.use("/posts", postsRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
