module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', 'timer'],
  globals: {
    'ts-jest': {
      tsConfig: './src/ts/tsconfig.json'
    }
  }
};
