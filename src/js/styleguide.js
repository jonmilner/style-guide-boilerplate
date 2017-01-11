import $ from 'jquery';
import 'prismjs';
import slideoutMenu from './components/slideoutMenu';
import smoothScroll from './components/smoothScroll';

$(() => {
  slideoutMenu();
  smoothScroll();
});
