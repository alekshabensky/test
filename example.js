var fs = require('fs');
var express = require('express');
var uuid = require('node-uuid');
var app = express();
var decode = require('urldecode');

Ivona = require('../src/main');

var ivona = new Ivona({
    accessKey: 'GDNAIABXID7T3WQFC23Q',
    secretKey: 'kJCM25heqqPH4FgH1MPhSN2GwRTstF7r6g2NB80q'
});

app.get('/ivona/:text', function(req, res) {
  var id = uuid.v4();
  var file = '../../../voices/'+id+'.mp3';
  var param1 = decode(req.params.text);
  console.log(param1);
  ivona.createVoice(param1).pipe(fs.createWriteStream(file));
  var json = {
    'file' : 'voices/'+id+'.mp3'
  }
  res.json(json);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

console.log('Example app listening on port 3000!');