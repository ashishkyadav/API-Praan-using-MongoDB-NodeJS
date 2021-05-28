var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({                   /Products schema has fields device,t,w,h,p1,p25,p10 as per the datasets given /

  device: { type: String},

  t:    { type: datetime },

  w: { type: int },

  h: { type: String },

  p1: { type: int },

  p25: { type: int },

  p10: { type: int },

  pi: { type: String }
});

module.exports = mongoose.model('Products', productSchema);                     /Finally, products schema is exported/