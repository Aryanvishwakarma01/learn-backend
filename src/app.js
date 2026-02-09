import express from 'express';
import adminRoutes from './routes/admin.routes.js';
import userRoutes from './routes/user.routes.js'
import postsRouter from './routes/posts.routes.js';
import { fileURLToPath } from 'url';
import path from "path"
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/profile/:id', (req,res) => {
    res.send(`Welcome to profile page with id ${req.params.id}`)
})

app.use('/admin', adminRoutes);
app.use('/user', userRoutes)
app.use("/posts", postsRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
