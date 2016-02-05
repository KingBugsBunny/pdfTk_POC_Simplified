var express = require('express');
var pdfTk = require('pdftk-helper');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var pdf = 'A=' + '/PDPmergeDocs/New-app-rpt-cover-with-fields.pdf' +
      ' B=' + '/PDPmergeDocs/3.0ReportLayout.pdf' +
       ' C=/' + 'PDPmergeDocs/New-app-rpt-covers-ProJobTeamSpecs.pdf';

  pdfTk.pages(pdf,'A1-end B1-end', 'Reports1', function(err) {
    var message = '';
    if(err){
      message = err;
    } else {
      message = 'PDF 1 merge successful with no errors';
    }
    return console.log(message);
  });

  pdfTk.pages(pdf,'C2 B1-2', 'Reports2', function(err) {
    var message = '';
    if(err){
      message = err;
    } else {
      message = 'PDF 2 merge successful with no errors';
    }
    return console.log(message);
  });



  res.render('index', { title: 'Express' });
});

module.exports = router;
