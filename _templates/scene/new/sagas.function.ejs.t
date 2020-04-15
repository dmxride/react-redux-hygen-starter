---
inject: true
to: "<%= logic ? 'src/store/rootSaga.js' : null %>"
after: yield all\(\[
---
    <%=name.toLowerCase()%>Saga(),