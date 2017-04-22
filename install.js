#!/usr/bin/env node
'use strict';

var request = require('request');
var fs = require('fs');
var pkg = require('./package.json');

var req = request('https://dist.nuget.org/win-x86-commandline/v' + pkg.version + '/nuget.exe');
req.on('response', function(res) {
	if (res.statusCode !== 200) {
		throw new Error('Got HTTP ' + res.statusCode);
	}
	req.pipe(fs.createWriteStream('nuget.exe'));
});
