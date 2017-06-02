
const homeRoutes     = require('./home');
const ussdRoutes     = require('./ussd');


module.exports = (app)=>{

app.get('/', homeRoutes.index);

app.post('/ussd', ussdRoutes.ussd);

}
