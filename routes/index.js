var express = require('express');
var pdfTk = require('pdftk-helper');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var A = '/home/robertbrush/repo/pdfTK_POC_Simplified/PDPmergeDocs/3.0ReportLayout.pdf',
      B = '/home/robertbrush/repo/pdfTK_POC_Simplified/PDPmergeDocs/New-app-rpt-cover-with-fields.pdf',
      C = '/home/robertbrush/repo/pdfTK_POC_Simplified/PDPmergeDocs/New-app-rpt-covers-ProJobTeamSpecs.pdf';

  pdfTk.pages('' + A + ' ' + B + ' ' + C + ' ', 1, 'end', 'mergedFile', function(err) {
    return console.log('pdf merge attempted, Error:' + err);
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
