let parseAnnotations = require('./index.js');

let string = `
  /* @start firstKey */  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  /* @end firstKey */

  
  /* @start secondKey */
  Sed at est pellentesque ante ultricies aliquet aliquam a tellus. Donec eget urna velit. Mauris ac scelerisque lacus. 
  /* @end secondKey */
  
  This is outside a comment @start and @end block, so won't get included in the returned object. 
  `

let outputObject = parseAnnotations(string);

console.log(outputObject);
