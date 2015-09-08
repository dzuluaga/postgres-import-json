#postgres-import-json
The main goal of this tool is to get the data in Postgres tables, so it can be later processed and ingested by running Postgres operations at the table level. This Node.js tool imports JSON or CSV files into Postgres leveraging psql and copy utilities from Postgres. So it doesn't reinvent the wheel by running individual operations at the record level.

**You can run this tool in two methods. Method 1: Clone this repo and run Node.js tool or Method 2: install this tool with NPM**

### Method 1: Run from the repo
```

```


### Method 2: Install it globally
```shell
$ npm install -g
/usr/local/bin/postgres-import-csv -> /usr/local/lib/node_modules/postgress-import-json/bin/postgres-import-json.js
```

**Executing it**
```shell
$ postgres-import-json -f '../api-deployment-collector/tmp/data/*.csv' -d postgres -t public.apiproxyhistory -h localhost -u diegozuluaga -p 5432
you executed a import-csv import with:
../api-deployment-collector/tmp/data/*.csv  - files
postgres  - database
localhost  - host
diegozuluaga  - username
5432  - port
importing file: ../api-deployment-collector/tmp/data/test-9-8-2015.csv
COPY 21
importing file: ../api-deployment-collector/tmp/data/test2-poc-9-8-2015.csv
COPY 213
importing file: ../api-deployment-collector/tmp/data/test3-9-8-2015.csv
```