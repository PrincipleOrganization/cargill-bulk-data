#!/bin/bash
echo "Start Kernel BulkData"

/usr/bin/mongod -f /kernel-bulk-data/mongodb.yaml
/usr/bin/node start
