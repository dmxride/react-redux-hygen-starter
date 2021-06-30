---
inject: true
to: "<%= logic ? 'store/rootSlices.ts' : null %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Slice from 'scenes/<%= h.inflection.camelize(name.toLowerCase())%>/logic/slice'