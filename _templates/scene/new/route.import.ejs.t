---
inject: true
to: src/routes.js
after: "// Define imports here"
---
import <%= h.inflection.camelize(name.toLowerCase())%> from 'src/scenes/<%= h.inflection.camelize(name.toLowerCase())%>'