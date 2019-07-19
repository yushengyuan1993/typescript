var $ = function (param, callback) {
  callback && callback(param);
  return document.querySelectorAll(param);
}

window.jQuery = window.$ = $;