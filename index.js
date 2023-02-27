const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const bookingRoute = require('./routes/booking');
const dinningRoute = require('./routes/dinning');
const meetingRoute = require('./routes/meeting');
const orderRoute = require('./routes/food-order');
const cors = require('cors');
const pdf = require('html-pdf');
const invoiceTemp = require('./document/invoice')
const roomInvoiceTemp = require('./document/room-invoice')
const app = express();

dotenv.config();
app.use(
    cors({
        origin:'*',
        methods:['GET', 'POST', 'DELETE', 'PUT']
    })
)

app.use(express.json());

mongoose.connect(process.env.MONGO_DB,{
useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => console.log('Database is well connected')).catch(err => console.log(err))

const PORT = process.env.PORT || 8080;

app.use('/api', bookingRoute);
app.use('/api', dinningRoute);
app.use('/api', meetingRoute);
app.use('/api', orderRoute);

//POST --Invoice generation
app.post('/api/create-pdf', (req, res) => {
    pdf.create(invoiceTemp(req.body), {}).toFile('results.pdf', (err) => {
        if(err){
           res.send(Promise.reject());
        }
       res.send(Promise.resolve());
    })
});

//GET --Send the generated Invoice to the client
app.get('/api/relax-invoice', (req, res) => {
    res.sendFile(`${__dirname}/results.pdf`)
})


//POST -- Room invoice generation
app.post('/api/create-room-pdf', (req, res) => {
    pdf.create(roomInvoiceTemp(req.body), {}).toFile('results.pdf', (err) => {
        if(err){
           res.send(Promise.reject());
        }
       res.send(Promise.resolve());
    })
});

//GET --Send the generated Room Invoice to the client
app.get('/api/room-invoice', (req, res) => {
    res.sendFile(`${__dirname}/results.pdf`)
})

app.get('/', (req, res) => {
    res.send('Hello welcome to the server')
})



app.listen(PORT, () =>{console.log(`port is up and running on port ${PORT}`)})
