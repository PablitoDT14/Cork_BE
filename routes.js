module.exports = function(app, databaseService){

app.get('/', (request, response) =>{
    response.json({"mensaje":"BIENVENIDO"})
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

app.get('/login', (request, response) =>{
    const login  = request.body;
    console.log(login);
    response.json({"mensaje":"Acceso correcto"})
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