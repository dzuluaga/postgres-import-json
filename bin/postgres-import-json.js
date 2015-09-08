#!/usr/bin/env node
require('shelljs/global');
var program = require('commander'),
    format = require("string-template");

program
    .version('0.0.1')
    .description('import csv all JSON files into a postgres table with a JSON column')
    .option('-f, --files [filePath]', 'JSON files location', '../tmp/data/*.csv')
    .option('-d, --database [database]', 'Postgres database e.g. postgres')
    .option('-t, --table [table]', 'Postgres table e.g. public.apiproxyhistory')
    .option('-h, --host [host]', 'Postgres host')
    .option('-u, --username [uri]', 'Postgres username')
    .option('-p, --port [port]', 'Postgres port')
    .parse(process.argv);

console.log('you executed a import-csv import with:');
if (program.files) console.log(program.files + '  - files');
if (program.database) console.log(program.database +'  - database');
if (program.host) console.log(program.host +'  - host');
if (program.username) console.log(program.username +'  - username');
if (program.port) console.log(program.port +'  - port');

//ls('../tmp/data/*.csv').forEach(function(file) {
ls( program.files ).forEach(function(file) {
    console.log('importing file: ' + file);
    var cmd = format('psql -d {database} -h {host} -U {username} -p {port} -c "\COPY {table} FROM \'' + pwd() + '/' + file + '\' CSV quote e\'\x01\' delimiter e\'\x02\'"',
        {database : program.database, username : program.username, host : program.host, port : program.port });
    //console.log( cmd );
    exec('psql -d postgres -h localhost -U diegozuluaga -p 5432 -c "\COPY public.apiproxyhistory FROM \'' + pwd() + '/' + file + '\' CSV quote e\'\x01\' delimiter e\'\x02\'"')
});

