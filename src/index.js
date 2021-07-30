import { FormeoEditor } from './js';
import './sass/formeo.scss';

const options = {
  editorContainer: document.getElementById('editor'),
  // svgSprite: 'https://use.fontawesome.com/3393d5007f.js',
  debug: true,
  iconFont: 'font-awesome',
};

const editor = new FormeoEditor(options);
console.log(editor);
