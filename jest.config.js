module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   moduleFileExtensions: ['ts', 'tsx', 'js'],
   transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
   },
   testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
   moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
   },
};
