#!/bin/bash
echo "Start Kernel BulkData"

rm /home/yaroslav/Projects/kernel-bulk-data/db/pid
/usr/bin/rethinkdb --config-file /home/yaroslav/Projects/kernel-bulk-data/rethinkdb.local.conf
/usr/bin/node start
