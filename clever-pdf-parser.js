const pdf = require('pdf-parse');
const request = require("request-promise-native");


const pdfURL = 'http://bcrfc.env.gov.bc.ca/freshet/clever/CLM_FOR_KETT_OKAN_10DAYS.PDF'

async function downloadPDF(pdfURL) {
  //async operation to read pdf into buffer
  let pdfBuffer = await request.get({uri: pdfURL, encoding: null});
  
  //use pdf-parse module to extract text from the pdf
  return pdf(pdfBuffer)
    .then((data) => {
      //do some parsing
      return data.text.split("\n");
    })
    .catch((err) => {
      console.log(err.message, "pdf parse unsuccessful")
    });
}

downloadPDF(pdfURL)
  .then((output) => {
    console.log(output);
  })

