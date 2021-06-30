---
to: "<%= shared ? 'src/shared/components/'+h.inflection.camelize(name.toLowerCase())+'/index.test.tsx' :  'src/scenes/'+ folder + '/components/' + h.inflection.camelize(name.toLowerCase())+'/index.test.tsx' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> component tests
 *
 * @author <%= author%> <<%= email%>>
 *
 *
 */
