module.exports = ( { name,  roomTitle, email, phone,  country,  totalPrice,  identificationcard,  days, invoiceNo}) => {
    const newdate = new Date();
    return `
    <!DOCTYPEHTLM>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Relax Hotel Invoice</title>
    <style>
    .invoice-body{
        width:90%;
        height:70vh;
        padding:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

   

    .logo{
        font-size:24px;
        text-align:center;
        color:teal;
    }

    .title{
        text-align:center;
    }

    .underline{
        width:100%;
        height:2px;
        background-color:teal;
        margin:10px 0;
    }

    .invoice-list{
        width:100%;
        display:flex;
        flex-direction:column;
    }

    .list-style{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        border-bottom:1px solid gray;
    }

    .small{
        text-align:center;
    }

    .name{
        text-align:center;
        font-weight:bold;
        color:#333;
    }

    .name-date{
        text-align:center;
        color:#333;
    }
    </style>

    </head>
    <body>
    <div class='invoice-body'>
    <h1 class='logo'>RELAX HOTEL</h1>
    <h1 class='title'>ROOM BOOKING INVOICE NO:${invoiceNo}</h1>
    <p class='small'>We ensure you have a great stay when you make a visit in Kenya. Our services are professional and our rooms are great. Professional house keeping food preparation and much more to make you feel at home. Lipa na M-pesa paybill No: 894785 | account No: 39489379</p>
    <div class='underline'></div>

    <div class = 'invoice-list'>

    <div class='list-style' ><p><b>Recipt No:</b></p> <p>${invoiceNo}</p></div>
    <div class='list-style' ><p><b>Room Category:</b></p> <p>${roomTitle}</p></div>
    <div class='list-style' ><p><b>Customer's Name:</b></p> <p>${name}</p></div>
    <div class='list-style' ><p><b>Customer's Email:</b></p> <p>${email}</p></div>
    <div class='list-style' ><p><b>Phone Number:</b> </p> <p>${phone}</p></div>
    <div class='list-style' ><p><b>Country of residence:</b></p> <p>${country}</p></div>    
    <div class='list-style' ><p><b>National ID:</b></p> <p>${identificationcard}</p></div>    
    <div class='list-style' ><p><b>Number of Days:</b></p> <p>${days}</p></div>    
    <div class='list-style' ><p><b>Total cost:</b></p> <p>${totalPrice}</p></div>
    
    </div>
    <p class='name'>Thank you ${name}. Karibu tena</p>
    <p class='name-date'>This order was made by ${name} on ${newdate} located at ${country}</p>
    </div>
  
    </body>
    </html>
    `
}