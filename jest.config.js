module.exports = {
      "testEnvironment": "node",
  testMatch: [
        '**/*test.js?(x)',
      ],
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
      ],
  rootDir: '',
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      },
  moduleFileExtensions: ['js','json','jsx','node']
  }
