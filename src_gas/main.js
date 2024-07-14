function doGet(e) {
    const htmlTemplate = HtmlService.createTemplateFromFile("index");
    htmlTemplate.params = e.queryString; 
  
    return htmlTemplate
      .evaluate()
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
      .setTitle('React GAS Template')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setFaviconUrl('https://www.gsa.gov/sites/gsa.gov/themes/custom/gsa/logo.png');
  }