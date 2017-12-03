/**
 * Takes a string that is annotated with @start and @end and split into a keyed object of strings.
 *
 * @param string {String}
 * @returns {Object}
 */
module.exports = function parseAnnotations (string) {

  // Run the regex to split string
  const regex = /([/][*][\s\S]*?@start)(\s\S*?)([\s\S]*?)([*][/])([\s\S]*?)([/][*][\s\S]*?@end.*?[\s\S]*?[*][/])/gm

  // Process the results into a js object.
  let returnObj = {}

  try {
    let m

    while ((m = regex.exec(string)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      // The result can be accessed through the `m`-variable.
      let g3
      let g5

      // Loop through the groups in a result.
      m.forEach((match, groupIndex) => {

        // Save the key
        if (groupIndex === 3) {
          g3 = match
        }

        // Save the value
        if (groupIndex === 5) {
          g5 = match
        }
      })

      // if there was a valid key and value, store it in the return object.
      if (typeof g3 !== 'undefined' && typeof g5 !== 'undefined') {
        returnObj[g3.trim()] = g5.trim()
      }
    }

  } catch (e) {
    // Regex failed to work.
    return false
  }

  // returnObj should now contain a keyed js Object where the key = "@start something" in the string comment block.
  return returnObj

}