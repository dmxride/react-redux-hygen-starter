---
inject: true
to: "<%= logic && 'src/store/rootSaga.js' %>"
after: "// Define imports here"
---
import <%= name.toLowerCase()%>Saga from 'src/scenes/<%= h.inflection.camelize(name.toLowerCase())%>/logic/sagas'