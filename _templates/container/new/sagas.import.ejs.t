---
inject: true
to: "<%= logic ? 'store/rootSaga.ts' : null %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Saga from 'containers/<%= h.inflection.camelize(name.toLowerCase())%>/logic/sagas'