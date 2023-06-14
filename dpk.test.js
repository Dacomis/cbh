const { deterministicPartitionKey } = require("./dpk");
const crypto = require('crypto');
const { hash, toString } = require("./utils");

describe("deterministicPartitionKey", () => {
  it("returns the trivial partition key when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe("0");
  });

  it("when the mock event is present returns the partitionKey from the mock event", () => {
    const event = { partitionKey: 'partitionKey' };
    const deterministicPartitionKeyResult = deterministicPartitionKey(event);
  
    expect(deterministicPartitionKeyResult).toBe('partitionKey');
  });

  it("if the partitionKey is not a string returns a stringified version of the partitionKey", () => {
    const event = { partitionKey: { data: 'innerData' } };
    const deterministicPartitionKeyResult = deterministicPartitionKey(event);

    expect(deterministicPartitionKeyResult).toBe(toString(event.partitionKey));
  });


  it("if partitionKey is longer than max length returns hashed version", () => {
    const event = { partitionKey: 'a'.repeat(257) };
    const hashedPartitionKey = hash(event.partitionKey);
    const deterministicPartitionKeyResult = deterministicPartitionKey(event);

    expect(deterministicPartitionKeyResult).toBe(hashedPartitionKey);
  });
});
