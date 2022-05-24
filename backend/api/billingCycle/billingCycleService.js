const BillingCycle = require('./billingCycle');

//CRUD
BillingCycle.methods(['get', 'post', 'put', 'delete']);

//Validações
BillingCycle.updateOptions({new: true, runValidators: true});

//Rota Count
BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(error, value) {
        if(error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        }
    })
})

module.exports = BillingCycle;