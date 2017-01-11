import $ from 'jquery';
import fastclick from 'fastclick';
import cqProlyfill from 'cq-prolyfill';
import removeOutline from './components/removeOutline';

$(() => {
  cqProlyfill();
  fastclick.attach(document.body);
  removeOutline();
});
