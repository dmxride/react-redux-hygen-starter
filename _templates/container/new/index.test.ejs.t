---
to: "<%= shared ? 'src/shared/containers/'+h.inflection.camelize(name.toLowerCase())+'/index.test.tsx' :  'src/scenes/' + folder + '/containers/'+h.inflection.camelize(name.toLowerCase())+'/index.test.tsx' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container tests
 *
 * @author <%= author%> <<%= email%>>
 *
 *
 */
