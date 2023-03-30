module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+||.ts$': 'ts-jest'
  }
}
