#!/usr/bin/env node
require('shelljs/global');
var program = require('commander'),
    format = require("string-template");

program
    .version('0.0.1')
    .description('import all JSON files into a postgres table with a JSON column')
    .option('-f, --files [filePath]', 'JSON files location e.g. ../tmp/data/*.json')
    .option('-d, --database [database]', 'Postgres database e.g. postgres')
    .option('-t, --table [table]', 'Postgres table e.g. public.apiproxyhistory')
    .option('-h, --host [host]', 'Postgres host')
    .option('-u, --username [uri]', 'Postgres username')
    .option('-p, --port [port]', 'Postgres port')
    .parse(process.argv);

console.log('you executed an postgres-import-json import with:');
if (program.files) console.log(program.files + '  - files');
if (program.database) console.log(program.database +'  - database');
if (program.table) console.log(program.table +'  - table');
if (program.host) console.log(program.host +'  - host');
if (program.username) console.log(program.username +'  - username');
if (program.port) console.log(program.port +'  - port');

ls( program.files ).forEach(function(file) {
    console.log('importing file: ' + file);
    var cmd = format('psql -d {database} -h {host} -U {username} -p {port} -c "\COPY {table} FROM \'' + pwd() + '/' + file + '\' CSV quote e\'\x01\' delimiter e\'\x02\'"',
        {database : program.database, username : program.username, host : program.host, port : program.port, table : program.table });
    console.log( cmd );
    exec(cmd);
});