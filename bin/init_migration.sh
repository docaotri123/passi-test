#!/bin/bash
SCRIPT=${BASH_SOURCE[0]}
source $( dirname ${SCRIPT} )/commons.sh

ME=$( basename $SCRIPT )
PWD=$( cd $( dirname $SCRIPT ) && pwd )
ROOT=$( pwd )
NAME=${1}

DATETIME=$( date +%Y%m%d%H%M )
SAMPLES=(
  migration.js
)

echo_usage() {
  puke_usage "USAGE:"
  puke_usage
  puke_usage "$ ${SCRIPT} NAME"
  puke_usage
  puke_usage "Where *NAME* is required."
}

check_and_copy_file() {
  local file=$1
  local target=${ROOT}/$file
  local source=${PWD}/samples/${file}

  cp -v $source seeds/${DATETIME}-${NAME}.js
}

if [ "${NAME}x" == "x" ]; then
  echo_usage; exit 1
fi

# Copying samples
for f in "${SAMPLES[@]}"; do
  check_and_copy_file $f
done
