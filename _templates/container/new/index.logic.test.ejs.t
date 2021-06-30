---
to: "<%= logic ? 'containers/'+h.inflection.camelize(name.toLowerCase())+'/logic/logic.test.ts' : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container logic tests
 *
 * @author <%= author%> <<%= email%>>
 *
 * @format
 */
