---
to: "<%= shared ? 'src/shared/containers/'+h.inflection.camelize(name.toLowerCase())+'/utils.ts' :  'src/scenes/' + folder + '/containers/'+h.inflection.camelize(name.toLowerCase())+'/utils.ts' %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container utils
 *
 * @author <%= author%> <<%= email%>>
 *
 *
 */