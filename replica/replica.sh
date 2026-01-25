#!/bin/bash
set -e

echo "Waiting for primary..."
until pg_isready -h postgres-primary -p 5432 -U postgres; do
  sleep 2
done

echo "Cleaning old data..."
rm -rf /var/lib/postgresql/data/*

echo "Cloning from primary (replica)..."
export PGPASSWORD=postgres

pg_basebackup \
  -h postgres-primary \
  -D /var/lib/postgresql/data \
  -U postgres \
  -Fp \
  -Xs \
  -P \
  -R

echo "Replica initialized"
