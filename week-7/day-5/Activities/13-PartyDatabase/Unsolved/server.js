var orm = require("./config/orm.js");

// Console log all the party names
orm.selectWhere("parties", "party_name");

// Console log all the client names.
orm.selectWhere("clients", "client_name");

// Console log all the parties that have a party-type of grown-up.
orm.electWhere("parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.electWhere("clients", "parties");
