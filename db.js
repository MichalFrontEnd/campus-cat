const spicedPg = require("spiced-pg");
const db = spicedPg("postgres:postgres:postgres@localhost:5432/caper-petition");

// -- THIS IS A QUERY BEING WRITTEN FOR DEMO PURPOSES
module.exports.getSignatures = function () {
    let q = "SELECT * FROM signatures";
    return db.query(q);
};

// this is an alternative way of doing the same exact query!
// module.exports.getCities = function () {
// 	return db.query("SELECT * FROM cities");
// };

module.exports.addSignatures = (first, last, signature) => {
    let q =
        "INSERT INTO signatures (first, last, signature) VALUES ($1, $2, $3) RETURNING id";

    // "params" is something you ONLY have to do IF the query takes arguments
    let params = [first, last, signature];
    return db.query(q, params);
};

module.exports.sigNumber = (id) => {
    let q = "SELECT * FROM signatures ORDER BY id DESC LIMIT 1";
    //"SELECT COUNT(*) FROM signatures";
    //let q = "SELECT MAX(id) FROM signatures";
    let param = id;
    //console.log("params: ", param);
    //console.log("q: ", q);
    return db.query(q, param);
};
//return db.query(q);
//};
// module.exports.addCity = (city, country) => {
// 	return db.query("INSERT INTO cities (city, country) VALUES ($1, $2)", [
// 		city,
// 		country,
// 	]);
// };

module.exports.getNames = () => {
    let q = "SELECT first, last FROM signatures";
    // "params" is something you ONLY have to do IF the query takes arguments
    //console.log("q: ", q);
    return db.query(q);
};