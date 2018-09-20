#!/bin/bash
node proxy_server.js &
cd backend-api
./bin/rails server &
cd ..
yarn start &
