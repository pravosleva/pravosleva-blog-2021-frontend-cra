#!/bin/bash

EXTERNAL_DIR=""$(dirname "$PWD")""

# See also https://stackoverflow.com/questions/41495658/use-custom-build-output-folder-when-using-create-react-app
cd build &&

if [ ! -d "${EXTERNAL_DIR}/backend/public/cra" ]
  then
    echo "${EXTERNAL_DIR}/backend/public/cra Should be created"
    mkdir "${EXTERNAL_DIR}/backend/public/cra"
fi

echo '1/3 Clear "backend/public/cra/*" directory...'
rm -rf ${EXTERNAL_DIR}/backend/public/cra/*

echo '2/3 Move fersh build...'
mv -v ${EXTERNAL_DIR}/frontend/build/* "${EXTERNAL_DIR}/backend/public/cra/"

echo '3/3 Remove frontend/build directory.'
rm -rf ./build
# Done
