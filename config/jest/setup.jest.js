function trimText(t) {
  return t.replace(/^\s+/gm, '');
}

expect.extend({
  toHaveBeenCalledIncludingText(recieved, text) {
    const {calls} = recieved.mock;

    if (!calls.length) {
      return {
        pass: false,
        message: () => recieved.getMockName() + ' was not called',
      };
    }
    const [argText] = calls[calls.length - 1];
    const pass = trimText(argText).includes(trimText(text));

    return {
      pass,
      message: () => `expected
${text}
${pass ? 'not ' : ''}to be within
${argText}`,
    };
  },
});

const rtl = require('@testing-library/react');
const testTimeout = (Number(process.env.TEST_TIMEOUT) || 15000) / 2;
rtl.configure({
  asyncUtilTimeout: testTimeout,
  getElementError: message => {
    const error = new Error(message);
    error.name = 'TestingLibraryElementError';
    error.stack = null;
    return error;
  },
});
