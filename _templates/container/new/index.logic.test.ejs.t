---
to: "<%= logic ? shared ? 'src/shared/containers/'+h.inflection.camelize(name.toLowerCase())+'/logic/logic.test.ts' :  'src/scenes/' + folder + '/containers/'+h.inflection.camelize(name.toLowerCase())+'/logic/logic.test.ts'  : null %>"
---
/**
 * <%= h.inflection.camelize(name.toLowerCase())%> container logic tests
 *
 * @author <%= author%> <<%= email%>>
 *
 *
 *

