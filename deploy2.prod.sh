#!/bin/bash

source ./read-env.sh

deploy_dist_dir=$(read_env DEPLOY_CRA_DIST_DIR .env.production.local)

echo '-- DEPLOY STARTED' &&

EXTERNAL_DIR=""$(dirname "$PWD")""

rsync -av --delete ${EXTERNAL_DIR}/frontend.cra/build/ $deploy_dist_dir &&

echo '-- DEPLOY COMPLETED'
