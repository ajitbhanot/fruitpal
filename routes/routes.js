const mysql = require('mysql');
const path = require('path');
const http = require('http');

const router = app => {
    app.get('/', (request, response) => {
            response.sendFile('/Users/ajitb/git/fruitpal/index.html');
    });
    /* app.get('/commodity/:quantity/:quote', (request, response) => {
        var quantity = request.params.quantity;
        var quote = request.params.quote;
        var stringToQuery = 'SELECT ' + quantity + ' *(' + quote + '+variableOverhead)+fixedoverhead as price, ' + quantity + ' as Quantityaskedfor, commodity,marketCd,fixedoverhead,variableoverhead FROM apiCom.commodity order by price desc';
        console.log(stringToQuery);
        pool.query(stringToQuery, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    }); */
    app.post('/commodity/', (request, response) => {
		var fruit = pool.escape(request.body.fruit);
        var quantity = pool.escape(request.body.quantity);
        var quote = pool.escape(request.body.quote);
        var stringToQuery = 'SELECT ' + quantity + '  *(' + quote + '+variableOverhead)+fixedoverhead as price, ' + quote + ' as quote, ' + quantity + ' as quantity, commodity,marketCd,fixedoverhead,variableoverhead, marketCd as market FROM apiCom.commodity where commodity ='+fruit+ ' order by price desc';

        console.log(stringToQuery);
        pool.query(stringToQuery, (error, result) => {
            if (error) throw error;
            console.log(result);
            //response.send(result);
			response.render('showresults',{page_title:"Final Quotes",data:result});
        });
    });



}
const pool = require('../data/config');



module.exports = router;
