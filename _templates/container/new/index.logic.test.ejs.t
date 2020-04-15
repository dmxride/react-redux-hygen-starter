---
to: "<%= logic ? 'src/containers/'+h.inflection.camelize(name.toLowerCase())+'/logic/logic.test.js' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container logic tests
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 * @flow
 */
