
function print() {
  const filename  = 'ThisIsYourPDFFilename.pdf';

  html2canvas(document.querySelector('#cv')).then(canvas => {
    let pdf = new jsPDF('p', 'px', [1200,1350]);
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 1200, 1350);
    pdf.save(filename);
  });
}

// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
function print(quality = 1) {
  const filename  = 'ThisIsYourPDFFilename.pdf';

  html2canvas(document.querySelector('#cv'), 
              {scale: quality}
           ).then(canvas => {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    pdf.save(filename);
  });
}