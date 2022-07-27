const express = require('express');

const app = express();

app.use(express.json())

let currentUser = {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
};

let users = [{
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],

},

{
    id: '234',
    name: 'Michael Adams',
    age: 54,
    hairColor: 'black',
    hobbies: ['singing', 'fishing', 'cooking'],
},

{
    id: '345',
    name: 'Naomi W',
    age: 22,
    hairColor: 'blonde',
    hobbies: ['biology', 'maths', 'tiktok'],
}]

const products = [{
    id: '1234',
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD Screen, great deal'
},

{
    id: '5678',
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros'
},

{
    id: '9112',
    name: 'Running Shoes',
    price: '$120',
    description: 'Nike Air Jordans'
}]

app.get('/current-user', (req, res) =>{
    res.json(currentUser);
});

app.post('/users/:id', (req, res) =>{
    const {id} = req.params;
    const{ user: updatedUser } = req.body;

    users = users.map(user => user.id === id ? updatedUser : user);

    res.json(users.find(user => user.id === id));
});

app.get('/users/:id', (req, res) =>{
    const {id} = req.params;
    res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    res.json(products.find(product => product.id === id));
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});