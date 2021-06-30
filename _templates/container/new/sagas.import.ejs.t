---
inject: true
to: "<%= logic ? 'src/store/rootSaga.ts' : null %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Saga from 'containers/<%= h.inflection.camelize(name.toLowerCase())%>/logic/sagas'