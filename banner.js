const fs = require("fs");
const pkg = require("./package.json");
const filename = "assets/js/bundle.js";
const script = fs.readFileSync(filename);
const padStart = str => ("0" + str).slice(-2);
const dateObj = new Date();
const date = `${dateObj.getFullYear()}-${padStart(
  dateObj.getMonth() + 1
)}-${padStart(dateObj.getDate())}`;
const banner = `/*!
 * Motionsplan ${pkg.version} by ${pkg.author}
 * Copyright 2007-${dateObj.getFullYear()} Lars Olesen - motionsplan.dk | @motionsplan
 * Licensed under ${pkg.license}
 */
`;

if (script.slice(0, 3) != "/**") {
  fs.writeFileSync(filename, banner + script);
}
