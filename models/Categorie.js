var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Categorie = new Schema({
    title : String,
    description : String,
    done : {
      type : Boolean,
      default : false
    },
    createdAt : {
      type : Date,
      default : Date.now
    },
  });

  module.exports = mongoose.model('eCommerce', Categorie);