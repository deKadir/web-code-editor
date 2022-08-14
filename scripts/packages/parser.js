import prettier from 'https://unpkg.com/prettier@2.7.1/esm/standalone.mjs';
import htmlParser from 'https://unpkg.com/prettier@2.7.1/esm/parser-html.mjs';
import babelParser from 'https://unpkg.com/prettier@2.7.1/esm/parser-babel.mjs';
import cssParser from 'https://unpkg.com/prettier@2.7.1/esm/parser-postcss.mjs';
const parsers = {
  html: {
    plugin: htmlParser,
  },
  js: { plugin: babelParser },
  css: { plugin: cssParser },
};
export { parsers, prettier };
