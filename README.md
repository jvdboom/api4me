# api4me
Test REST service thanks to "https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq"

npm install express --save
npm install body-parser --save
npm install faker --save


Added in routes.js:


    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
to allow cross calls.    





