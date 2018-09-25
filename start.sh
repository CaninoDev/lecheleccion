#!/bin/bash
cd backend-api
bundle install
rails db:migrate
bin/rails server &
cd ..
npm install
yarn start &
