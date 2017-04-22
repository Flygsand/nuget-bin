#!/usr/bin/env node
'use strict';

var spawn = require('child_process').spawn;
var path = require('path');

var child = spawn(path.resolve(__dirname, 'nuget.exe'), process.argv.slice(2), {stdio: 'inherit'});
child.on('close', function(code) {
	process.exit(code);
});
