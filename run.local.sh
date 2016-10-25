#!/bin/bash
echo "Start Kernel BulkData"

/usr/local/bin/mongod -f /Users/yaroslavshamatienko/Projects/kernel-bulk-data/mongodb.local.yaml
/usr/local/bin/node start
