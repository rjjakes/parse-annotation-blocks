# parse-annotation-blocks

ES6 string splitting by annotated comments. Parse blocks of text wrapped in
annotated comments to a JS object.

For example, if your string contains: 

```
/* @start someKey */ 
Some content 
/* @end someKey */ 
```

The module will extract the text between the `@start` and `@end` comments and return an 
object like:

```javascript
{
    someKey: "Some content" 
}
```

## Installation 

```
npm install parse-annotation-blocks 
```

or 

```
yarn add parse-annotation-blocks
```

## Usage

An example:

```javascript
let parseAnnotations = require('parse-annotation-blocks');

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
```

## Credits

https://github.com/rjjakes

## License 

MIT

