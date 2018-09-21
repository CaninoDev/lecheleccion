#!/bin/bash
cd backend-api
bundle install
rails db:reset
rails db:migrate
cd ..
npm install
node proxy_server.js &
cd backend-api
./bin/rails server &
cd ..
yarn start &
