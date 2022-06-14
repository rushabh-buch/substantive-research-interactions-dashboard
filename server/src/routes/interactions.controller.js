const { getInteraction } = require("../model/interactions.model");

function httpGetInteractions(req, res) {
  return res.status(200).json(getInteraction());
}

module.exports = {
  httpGetInteractions,
};
