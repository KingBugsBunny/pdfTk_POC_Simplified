var express = require('express');
var pdfTk = require('pdftk-helper');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //file paths need to follow a 'variable initialisation' in order to be called correctly
  var pdf = 'A=' + '/PDPmergeDocs/New-app-rpt-cover-with-fields.pdf' +
      ' B=' + '/PDPmergeDocs/3.0ReportLayout.pdf' +
       ' C=/' + 'PDPmergeDocs/New-app-rpt-covers-ProJobTeamSpecs.pdf';

  //to call a range call the paths variable name and concat the range on the end such as A1-end
  //which will print the first page to the end of the document
  pdfTk.pages(pdf,'A1-end B1-end', 'Reports1', function(err) {
    var message = '';
    if(err){
      message = err;
    } else {
      message = 'PDF 1 merge successful with no errors';
    }
    return console.log(message);
  });

  //to print a page by itself just add one number without a range such as C2
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
