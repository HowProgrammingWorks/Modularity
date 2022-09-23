({
  doSomething(a, b) {
    console.log({ a, b });
  },

  async doSomethingElse(name) {
    console.log({ name });
  },

  collection: new Map(),
});
