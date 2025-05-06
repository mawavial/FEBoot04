module.exports = {
  verbose: true,
  // automock: true,
  fakeTimers: {
    doNotFake: ['nextTick'],
    timerLimit: 1000,
  },
  globals: {
    MOANA: 32
  },
  displayName: 'HERMANO TEU NA TERRA DE GODA',
  collectCoverage: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

};