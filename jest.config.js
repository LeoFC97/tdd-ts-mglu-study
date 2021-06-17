module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'mjs', 'js', 'json'],
  preset: "ts-jest",
  transform: {
    '^.+\\.(js|jsx)?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '<rootDir>/src/**/*.test.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};