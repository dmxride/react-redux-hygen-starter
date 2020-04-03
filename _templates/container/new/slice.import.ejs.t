---
inject: true
to: "<%= logic && 'src/store/rootSlices.js' %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Slice from 'src/scenes/<%= h.inflection.camelize(name.toLowerCase())%>/logic/slice'