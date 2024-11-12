import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, developer!')
});

app.post('/', (req, res) => {
    const { name, age } = req.body
    console.log(name,age);
    res.json({message: `Hello ${name}! You're ${age} years old.`});
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" }
    ];
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    res.json({message: 'User added successfully!', user: newUser});
});

app.listen(PORT, () => 
    console.log(`Server running on port: ${PORT}`)
);