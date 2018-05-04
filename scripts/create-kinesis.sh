#!/bin/sh

AWS_ENDPOINT_URL=${AWS_ENDPOINT_URL:-http://localhost:4567}

if aws kinesis --endpoint-url ${AWS_ENDPOINT_URL} describe-stream --stream-name polls > /dev/null 2> /dev/null
then
  echo "Stream already exists"
else
  echo "Creating stream"
  aws kinesis create-stream --endpoint-url ${AWS_ENDPOINT_URL} --stream-name polls --shard-count 5 > /dev/null
fi
