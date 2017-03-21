// conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

   framework: 'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
     specs: ['01_Login.js','02_Add_tokens.js',
   ],
   jasmineNodeOpts: {
       defaultTimeoutInterval: 2500000
   },

   /*=============================================>>>>>
   = Spec files =
   ===============================================>>>>>*/

  /**
  '01_Login.js'  
  '02_Add_tokens.js'
   */

   /*= End of Spec files =*/
   /*=============================================<<<<<*/

   onPrepare: function() {
     browser.manage().window().maximize();

      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
           savePath: './reports/',
           takeScreenshotsOnlyOnFailures: true,
        })
      );
   }

}
