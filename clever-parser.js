const pdf = require('pdf-parse');
const request = require("request-promise-native");


const pdfURL = 'http://bcrfc.env.gov.bc.ca/freshet/clever/CLM_FOR_KETT_OKAN_10DAYS.PDF'

async function downloadPDF(pdfURL) {
  
  let pdfBuffer = await request.get({uri: pdfURL, encoding: null});
  pdf(pdfBuffer)
    .then(function(data) {
      console.log(data)
    })
    .catch((err) => {
      console.log(err.message)
    });
}

downloadPDF(pdfURL);

