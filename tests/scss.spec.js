// scss.spec.js
const path     = require('path'),
      sassTrue = require('sass-true'),
      glob     = require('glob');

const testPath = `tests/**/*.spec.scss`;

describe('Sass', () => {
  const testFiles = glob.sync(path.resolve(process.cwd(), testPath));

  // Run on each file with describe() and it() functions
  testFiles.forEach(( file ) => sassTrue.runSass({ file: file }, { describe, it }));
});
