const crypto = require('crypto');
const { hash, toString } = require('./utils');

// constants out of the function
const TRIVIAL_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

// helper functions
const getCandidate = (event) => event?.partitionKey ?? toString(event);

const isString = (value) => typeof value === 'string';

const isLengthTooBig = (value) =>
  value.length > MAX_PARTITION_KEY_LENGTH;

const convertToString = (candidate) =>
  isString(candidate) ? candidate : toString(candidate);

const checkLength = (candidate) =>
  isLengthTooBig(candidate) ? hash(candidate) : candidate;

exports.deterministicPartitionKey = (event) => {
  const candidate = getCandidate(event);

  if (!candidate) {
    return TRIVIAL_PARTITION_KEY;
  }

  const stringCandidate = convertToString(candidate);

  return checkLength(stringCandidate);
};