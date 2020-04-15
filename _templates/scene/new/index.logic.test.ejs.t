---
to: "<%= logic ? 'src/scenes/'+h.inflection.camelize(name.toLowerCase())+'/logic/logic.test.js' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> scene logic tests
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */
