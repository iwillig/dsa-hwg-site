// Action Network only allows 4 requests per second.
const CONCURRENCY = 4;
const WAIT_MS = 1000;

let startTimestamps: number[] = [];
export const limit = <T>(request: () => Promise<T>): Promise<T> => {
  const now = Date.now();
  // Clean startTimestamps so that it's only timestamps in the last second.
  // This helps prevent a memory leak.
  startTimestamps = startTimestamps.filter(
    timestamp => (now - timestamp) <= WAIT_MS
  );

  // If there are fewer than 4 timestamps remaining in startTimestamps,
  // we can execute the request.
  if (startTimestamps.length < CONCURRENCY) {
    startTimestamps.push(Date.now());
    return request();

  // If there are 4 or more timestamps remaining in startTimestamps, try
  // again a bit later (1 second after the latest request).
  } else {
    const latestTimestamp = startTimestamps[startTimestamps.length - 1];
    const sinceLatestTimestamp = Date.now() - latestTimestamp;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(limit(request));
      }, WAIT_MS - sinceLatestTimestamp);
    });
  };
};
