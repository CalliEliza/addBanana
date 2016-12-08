#!/usr/bin/env node

function convertThis() {
  var userInput = process.argv[2];
  var stdin = process.stdin;
  var out = process.stdout;
  stdin.resume();
  out.write(userInput + " banana");
  process.exit(0);
};

exports.convert = convertThis;
