#!/bin/bash
echo "Start Kernel BulkData"

rm /kernel-bulk-data/db/pid
/usr/bin/rethinkdb --config-file /kernel-bulk-data/rethinkdb.conf
/usr/bin/node start
