module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  fetch: jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
    }),
  ),
};
