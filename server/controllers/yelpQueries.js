const yelp = require("yelp-fusion");
const config = require("../config/config.json");
const apiKey = config.yelp.Key;
const client = yelp.client(apiKey);
// const testQuery = {
//   //should have been req.body
//   term: "food: mexican",
//   location: "portland, or"
// };
module.exports = {
  categories: function(req, res) {
    console.log(req.body);
    // const query = this.formatQuery(req.body);
    // client
    //   .search(query)
    //   .then(response => {
    //     res.json(response);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    res.send({ result: "response" });
  },
  formatQuery: function(queryObject) {
    //code to format the query
    return {};
  }
};
