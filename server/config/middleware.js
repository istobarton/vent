var bodyParser = require('body-parser')

module.exports = function (app, express){
  var userRouter = express.Router();

  app.use(bodyParser.json());
};