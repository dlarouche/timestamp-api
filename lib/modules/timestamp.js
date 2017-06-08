const moment = require('moment');

function parseURL(url) {
  const string = url.substr(1); // remove the "/" in front
  let output = {
    unix: null,
    natural: null
  }

  if (string.length === 0) return output;
  
  // check if the string is a timestamp
  const isUnix = moment.unix(Number(string)).isValid();

  if (isUnix) {
    const date = moment.unix(Number(string));
    output.unix = date.unix();
    output.natural = date.format('MMMM D, YYYY');
    return output;
  }
  
  // check if the string is a readable date
  const isDate = moment(string).isValid();

  if (isDate) {
    const date = moment(string);
    output.unix = date.unix();
    output.natural = date.format('MMMM D, YYYY');
    return output;
  }

  return output;
}

module.exports = {
  parseURL
}