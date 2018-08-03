var faker = require("faker");

var appRouter = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get("/", function (req, res) {
        res.status(200).send({ message: `Thanks to:  https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq` });
    });

    app.get("/user", function (req, res) {
        var data = ({
            User: faker.internet.userName(),
            Password: faker.internet.password(),
            Token: faker.random.uuid()
        });
        res.status(200).send(data);
    });

    app.get("/users/:num", function (req, res) {
        var users = [];
        var num = req.params.num;

        if (isFinite(num) && num > 0) {
            for (i = 0; i <= num - 1; i++) {
                users.push({
                    User: faker.internet.userName(),
                    Password: faker.internet.password(),
                    Token: faker.random.uuid()
                });
            }

            res.status(200).send(users);

        } else {
            res.status(400).send({ message: 'invalid number supplied' });
        }

    });
}

module.exports = appRouter;

//app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //next();
//});