$(document).ready(function() {
  const $search = $('#search');
  const words   = [
    'apple', 'application', 'app', 'ajax',
    'banana', 'book', 'browser',
    'cat', 'camera', 'cloud',
    'dog', 'docker', 'data',
    'elephant', 'email', 'event',
    'fish', 'file', 'framework',
    'google', 'git', 'graph',
    'html', 'http', 'hover',
    'image', 'input', 'index',
    'javascript', 'java', 'json',
    'kotlin', 'keyboard', 'key',
    'linux', 'link', 'loading',
    'mouse', 'monitor', 'mysql',
    'node', 'network', 'npm',
    'object', 'open', 'overflow',
    'python', 'php', 'post',
    'query', 'queue',
    'react', 'router', 'request',
    'spring', 'server', 'script',
    'typescript', 'tag', 'token',
    'ubuntu', 'upload', 'url',
    'vue', 'variable', 'validation',
    'while', 'web', 'window',
    'xml', 'xpath',
    'yarn', 'yaml',
    'zip', 'zone', 'z-index'
  ];


  const searchData = new Bloodhound({
    datumTokenizer : Bloodhound.tokenizers.whitespace,
    queryTokenizer : Bloodhound.tokenizers.whitespace,
    local : words
  });

  $search.typeahead({
    hint : false,
    highlight : true,
    minLength : 1
  }, {
    name : 'words',
    source : searchData
  })
});