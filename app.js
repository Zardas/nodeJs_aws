const express = require('express');
const app = express();
const path = require('path');



const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
    
});

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '0',
            productName: 'Pommes',
            price: 2
        },
        {
            productId: '1',
            productName: 'Couscous',
            price: 3
        },
        {
            productId: '2',
            productName: 'Caramel',
            price: 4
        },
        {
            productId: '3',
            productName: 'Kebab',
            price: 5
        },
    ])
});


app.get('/clients', (req, res) => {
    res.send([
        {
            clientId: '0',
            clientName: 'Marsh',
            clientFirstName: 'Stan'
        },
        {
            clientId: '1',
            clientName: 'McCormick',
            clientFirstName: 'Kenny'
        },
        {
            clientId: '2',
            clientName: 'Kyle',
            clientFirstName: 'Broflowski'
        },
        {
            clientId: '0',
            clientName: 'Stotch',
            clientFirstName: 'Butters'
        },
    ])
});

app.listen(port, () => {
    console.log(`Prêt à écouter sur localhost:${port}`);
})


