const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Criando conexão com o mongoDB => Parâmetros (porta e nome do banco);
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient:true});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "O {VALUE} não é válido para o atributo '{PATH}'.";

