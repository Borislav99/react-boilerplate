const testTimeout = Number(process.env.TEST_TIMEOUT) || 10000;
const transformDependencies = ['react-redux', '@babel\\runtime', '@babel/runtime'].join('|');

module.exports = {
  ...{
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@config/(.*)$': '<rootDir>/src/config/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@router/(.*)$': '<rootDir>/src/router/$1',
      '^@store/(.*)$': '<rootDir>/src/store/$1',
      '^@features/(.*)$': '<rootDir>/src/store/features/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@/(.*)$': '<rootDir>/src/$1',
      '^[./a-zA-Z0-9$_-]+\\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$':
        '<rootDir>/config/jest/FileStub.js',
      '^[./a-zA-Z0-9$_@-]+\\.s?css$': '<rootDir>/config/jest/CSSStub.js',
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/setup.jest.js'],
    testPathIgnorePatterns: ['<rootDir>/(node_modules|build|dist|docs|config|typings|tests)/'],
    transform: {
      '\\.[jt]sx?$': '<rootDir>/config/jest/transform.js',
    },
    transformIgnorePatterns: [`node_modules/(?!(${transformDependencies})/)`],
    coverageDirectory: '<rootDir>/coverage/',
    coveragePathIgnorePatterns: ['/node_modules/', '(/__data__/.*|(\\.|-)data).*\\.(js|jsx)$'],
    testTimeout,
    displayName: 'client',
    testEnvironment: 'jsdom',
    testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  },
};
