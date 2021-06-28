'use strict';
module.exports = (req, res, next) =>{
  if(req.query.name){
    next();
  }else{
    throw new Error('ERROR 500: No Query there buddy !');
  }
};