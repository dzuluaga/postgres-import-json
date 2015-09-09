#postgres-import-json
The main goal of this tool is to get the data in Postgres tables, so it can be later processed and ingested by running Postgres operations at the table level. This Node.js tool imports JSON files into Postgres leveraging psql and copy utilities from Postgres. So it doesn't reinvent the wheel by running individual operations at the record level.

**You can run this tool in two methods. Method 1: Clone this repo and run Node.js tool or Method 2: install this tool with NPM**

```shell
$ node ./bin/postgres-import-json.js --help

  Usage: postgres-import-json [options]

  import json all JSON files into a postgres table with a JSON column

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -f, --files [filePath]     JSON files location e.g. ../tmp/data/*.json
    -d, --database [database]  Postgres database e.g. postgres
    -t, --table [table]        Postgres table e.g. public.apiproxyhistory
    -h, --host [host]          Postgres host
    -u, --username [uri]       Postgres username
    -p, --port [port]          Postgres port
```

### Method 1: Install it

```shell
$ npm install postgress-import-json -g
/usr/local/bin/postgres-import-json -> /usr/local/lib/node_modules/postgress-import-json/bin/postgres-import-json.js
```

**Run it**
```shell
$ postgres-import-json -f '../api-deployment-collector/tmp/data/*.json' -d postgres -t public.apiproxyhistory -h localhost -u diegozuluaga -p 5432

you executed a import-json import with:
../api-deployment-collector/tmp/data/*.json  - files
postgres  - database
localhost  - host
diegozuluaga  - username
5432  - port
importing file: ../api-deployment-collector/tmp/data/test-9-8-2015.json
COPY 21
importing file: ../api-deployment-collector/tmp/data/test2-poc-9-8-2015.json
COPY 213
importing file: ../api-deployment-collector/tmp/data/test3-9-8-2015.json
```

### Method 2: Run from the repo
**clone this repo**

```shell
node ./bin/postgres-import-json.js -f '../api-deployment-collector/tmp/data/abercrombie-9-8-2015.json' -d postgres -t public.apiproxyhistory -h localhost -u diegozuluaga -p 5432
```
