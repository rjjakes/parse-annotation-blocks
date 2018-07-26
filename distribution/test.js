'use strict';

var parseAnnotations = require('./index.js');

var string = '\n  /* @start myAwesomeKey */\n/* my awesome comment */\n.awesome-selector {}\n/* more awesome comments\n.awesome-selector-2 {}\n/* another awesome comment */\n/* @end */\n\n  /* @start firstKey */  \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n  /* @end firstKey */\n\n  \n  /* @start secondKey */\n  Some text.\n  /* some internal comment */\n  Sed at est pellentesque ante ultricies aliquet aliquam a tellus. Donec eget urna velit. Mauris ac scelerisque lacus. \n  /* @end secondKey */\n  \n  This is outside a comment @start and @end block, so won\'t get included in the returned object. \n  ';

var outputObject = parseAnnotations(string);

console.log(outputObject);