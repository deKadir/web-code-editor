import { parsers, prettier } from './packages/parser.js';

const htmlContent = document.querySelector('.html-editor .editor-content'),
  cssContent = document.querySelector('.css-editor .editor-content'),
  jsContent = document.querySelector('.js-editor .editor-content'),
  formatButton = document.querySelector('.btn-format'),
  result = document.querySelector('.result'),
  editors = document.querySelectorAll('.editor-content');

editors.forEach((editor) => {
  editor.addEventListener('keyup', handleResult);
});

formatButton.addEventListener('click', handleFormat);

document.addEventListener('DOMContentLoaded', initCode);

function handleResult() {
  Code.setCode();
  Code.display();
}

function handleFormat() {
  editors.forEach((editor) => {
    const parser = editor.getAttribute('parser');
    const { plugin } = parsers[parser];
    const parsed = prettier.format(editor.innerText, {
      parser,
      plugins: [plugin],
    });
    editor.innerText = parsed;
  });
}

function initCode() {
  Code.setCode({
    html: '<h1>hello I am frontend developer abdulkadir develioğlu!</h1>',
    css: `body {
      display: flex;
      align-items: center;
      background-color: antiquewhite;
    }
    
    h1 {
      font-family: tahoma;
      color: slategrey;
      text-align: center;
    }`,
  });
  Code.setEditor();
  Code.display();
}

const Code = {
  code: {
    html: htmlContent.innerText,
    css: cssContent.innerText,
    js: jsContent.innerText,
  },

  //set code to display
  setCode: function ({
    html = htmlContent.innerText,
    css = cssContent.innerText,
    js = jsContent.innerText,
  } = {}) {
    this.code.html = html;
    this.code.css = css;
    this.code.js = js;
  },

  //set frame value to editor value
  setEditor: function () {
    const { html, css, js } = this.code;
    htmlContent.textContent = html;
    cssContent.textContent = css;
    jsContent.textContent = js;
  },
  //print result to frame
  display: function () {
    result.src = `data:text/html; charset=UTF-8, <html>
    <body>${this.code.html}</body>
    <style>${this.code.css}</style>
    <script>${this.code.js}</script>
    </html>`;
  },
};
