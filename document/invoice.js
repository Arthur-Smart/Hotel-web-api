module.exports = ( {qty,deliver,title,name,total,invoiceNo}) => {
    const date = new Date();
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
    <h1 class='title'>ORDER INVOICE NO:${invoiceNo}</h1>
    <p class='small'>We deliver quality food as requested by you. You can make payments before of after delivery. Lipa na M-pesa paybill No: 894785 | account No: 39489379</p>
    <div class='underline'></div>

    <div class = 'invoice-list'>

    <div class='list-style' ><p><b>Recipt No:</b></p> <p>${invoiceNo}</p></div>
    <div class='list-style' ><p><b>Person Name:</b></p> <p>${name}</p></div>
    <div class='list-style' ><p><b>Order Name:</b></p> <p>${title}</p></div>
    <div class='list-style' ><p><b>Order Quantity:</b> </p> <p>${qty}</p></div>
    <div class='list-style' ><p><b>Total Cost:</b></p> <p>${total}</p></div>    
    <div class='list-style' ><p><b>Order Location:</b></p> <p>${deliver}</p></div>
    
    </div>
    <p class='name'>Thank you ${name}. Karibu tena</p>
    <p class='name-date'>This order was made by ${name} on ${date} located at ${deliver}</p>
    </div>
  
    </body>
    </html>
    `
}