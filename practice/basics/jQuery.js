var $ = function (selector) {
  return document.querySelectorAll(selector);
}

window.jQuery = window.$ = $;