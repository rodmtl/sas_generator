var sas = require('shared-access-signature');
 
exports.getSAS = function getSAS()
{  
  var url = 'https://rodbus.servicebus.windows.net/factory-03/messages/head';
  var sharedAccessKeyName = 'allpol';
  var sharedAccessKey = 'da+omMoJTzWnNvDfhKWZa5sOCDlZogFji7JGAmsDUv4=';
  var currentDate = new Date();
  var expiry = currentDate.getTime() / 1000 + 3600000000; // We require expiry time in seconds since epoch. 
 
  var sas = require('shared-access-signature');
  var signature = sas.generateServiceBusSignature(url, sharedAccessKeyName, sharedAccessKey, expiry);
  console.log(signature);
  return signature;
}

this.getSAS();