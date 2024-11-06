# Difference between Promise.all() and Promise.allSettled()

### Use Cases:

**Promise.all** 💵: Useful when you want to wait for multiple asynchronous operations to complete and need all of them to be successful before proceeding. For example, making multiple API requests in parallel and waiting for all responses.

**Promise.allSettled** 💵: Useful when you want to gather (tập trung) the results of multiple asynchronous operations, regardless of whether they succeeded or failed. It's often used when you want to know the outcome of all promises, even if some of them are rejected.

# Difference between Promise.race() and Promise.any()

### Use Cases:

**Promise.race** 💵: Useful when you want to implement scenarios like a timeout mechanism where you want to respond to the first promise to complete, regardless of whether it succeeds or fails.

**Promise.any** 💵: Useful when you want to handle a case where at least one promise out of multiple promises succeeds, and you're interested in the result of the first resolving promise.
