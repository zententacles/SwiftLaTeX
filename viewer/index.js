"use strict";
exports.__esModule = true;
var fs = require("fs");
var machine_1 = require("./src/machine");
var parser_1 = require("./src/parser");
var bufContent = fs.readFileSync("test.xdv");
var machine = new machine_1.Machine();
parser_1.parseDVI(bufContent, machine);
var html = "";
html = html + "<!doctype html>\n";
html = html + "<html lang=en>\n";
html = html + "<head><style>\n";
html = html + machine.getStyle();
html = html + "</style></head>\n";
html = html + '<body>\n';
html = html + machine.getBody();
html = html + '</body>\n';
html = html + "</html>\n";
fs.writeFileSync("index.html", html);
console.log("DONE");