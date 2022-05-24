const _ = require('lodash');
const BillingCycle = require('./billingCycle');

//CRUD
BillingCycle.methods(['get', 'post', 'put', 'delete']);

//Validações
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.after('post', sendErrorOrNext).after('put', sendErrorOrNext);

function sendErrorOrNext(req, res, next) {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        var errors = parserErrors(bundle.errors);
        res.status(500).json({errors});
        console.log(errors)
    } else {
        next();
    } 
}

function parserErrors(nodeRestfullErrors) {
    const errors = [];

    _.forIn(nodeRestfullErrors, error => errors.push(error.message));

    return errors;
}

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