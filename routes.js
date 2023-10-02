module.exports = function(app, databaseService){

app.get('/', (request, response) =>{
    response.json({"mensaje":"Llegaste hasta aca"})
});

app.post('/customer', (request, response) =>{
    const customer  = request.body;
    console.log(customer);
    databaseService.createCustomer(customer)
    .then(()=>{
        response.json({"mensaje":"Cliente creado"})
    })
    .catch(e=>{
        response.status(500).json(e)
    })
});

app.get('/allcustomers', (request, response) =>{
    const customer  = request.body;
    console.log(customer);
    databaseService.getAllCustomers()
    .then(resultado=>{
        response.json(resultado)
    })
    .catch(e=>{
        response.status(500).json(e)
    })
});


app.get('/getCustomer', (request, response) =>{
    const customer  = request.body;
    console.log(customer);
    databaseService.getCustomer(customer.dni)
    .then(resultado=>{
        response.json(resultado)
    })
    .catch(e=>{
        response.status(500).json(e)
    })
});



app.post('/lenguajes', (request, response) =>{
    const nuevoLenguaje =request.body;
    console.log(nuevoLenguaje);
    response.json({"mensaje":"Lenguaje creado"})
});

app.get('/login', (request, response) =>{
    const login  = request.body;
    console.log(login);
    response.json({"mensaje":"Acceso correcto"})
});

app.get('/customer', (request, response) =>{
    const getCustomer  = request.body;
    console.log(getCustomer);
    response.json({"mensaje":"Datos del cliente"})
});



app.get('/transactions', (request, response) =>{
    const getCustomer  = request.body;
    console.log(getCustomer);
    response.json({"mensaje":"Informacion de ventas al cliente"})
});

app.post('/transactions', (request, response) =>{
    const getCustomer  = request.body;
    console.log(getCustomer);
    response.json({"mensaje":"Altas o bajas de puntos"})
});

};