const promise = import('events');
console.log({ promise });

promise.then((events) => {
  console.log({ defaultMaxListeners: events.defaultMaxListeners });
});

const events = await import('events');
console.log({ defaultMaxListeners: events.defaultMaxListeners });
