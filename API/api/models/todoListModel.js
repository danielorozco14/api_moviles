'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    default:""
  },
  country:{
    type:String,
    default:""
  },
  value:{
    type:Number,
    default:0
  },
  value_us:{
    type:Number,
    default:0
  },
  year:{
      type:Number,
      default:0
  },
  review: {
      type:String,
      default:""
  },
  isAvailable:{
      type: Boolean,
      default:false
  },
  img:{
      type:String
      ,default:""
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);