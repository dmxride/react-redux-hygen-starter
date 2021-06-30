---
inject: true
to: "<%= logic ? 'src/store/rootSaga.ts' : null %>"
after: yield all\(\[
---
    <%=name.toLowerCase()%>Saga(),