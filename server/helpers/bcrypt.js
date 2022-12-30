var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

let hash = (password) => bcrypt.hashSync(password, salt);
let compare = (password, hashedPassword) = bcrypt.compareSync(password, hashedPassword);


module.exports = {hash, compare}