---
inject: true
to: "<%= logic ? 'src/store/rootSlices.js' : null %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Slice from 'containers/<%= h.inflection.camelize(name.toLowerCase())%>/logic/slice'