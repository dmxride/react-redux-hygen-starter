---
inject: true
to: src/routes.ts
after: "// Define imports here"
---
import <%= h.inflection.camelize(name.toLowerCase())%> from 'src/scenes/<%= h.inflection.camelize(name.toLowerCase())%>'