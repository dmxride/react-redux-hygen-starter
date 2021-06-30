---
inject: true
to: "<%= logic ? 'store/rootSaga.ts' : null %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Saga from 'scenes/<%= h.inflection.camelize(name.toLowerCase())%>/logic/sagas'