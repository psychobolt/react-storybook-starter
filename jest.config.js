export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/test-config.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/flow-deps-modules/',
  ],
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
};
