const axios = require("axios");

module.exports = async () => {
  const res = await axios.get('https://google.com');
  return res;
}
