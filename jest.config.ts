export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>src/__mocks__/fileMock.ts",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
