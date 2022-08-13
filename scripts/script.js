import prettier from 'https://unpkg.com/prettier@2.7.1/esm/standalone.mjs';
import htmlParser from 'https://unpkg.com/prettier@2.7.1/esm/parser-html.mjs';

const htmlContent = document.querySelector('.html-editor .editor-content'),
  cssContent = document.querySelector('.css-editor .editor-content'),
  jsContent = document.querySelector('.js-editor .editor-content'),
  formatButton = document.querySelector('.btn-format');

let result = document.querySelector('.result');

htmlContent.addEventListener('keyup', handleResult);
cssContent.addEventListener('keyup', handleResult);
jsContent.addEventListener('keyup', handleResult);
formatButton.addEventListener('click', handleFormat);

document.addEventListener('DOMContentLoaded', initCode);

function handleResult() {
  let content = '';
  content += `<style>${cssContent.innerText}</style>`;
  content += `<script>${jsContent.innerText}</script>`;
  content += `<body>${htmlContent.innerText}</body>`;
  result.src = `data:text/html; charset=UTF-8, <html>${content}</html>`;
}

function handleFormat() {
  let formatted = prettier.format(htmlContent.innerText, {
    parser: 'html',
    plugins: [htmlParser],
  });
  htmlContent.innerText = formatted;
}

function initCode() {}
