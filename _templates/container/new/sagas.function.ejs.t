---
inject: true
to: "<%= logic ? 'store/rootSaga.ts' : null %>"
after: yield all\(\[
---
    <%=name.toLowerCase()%>Saga(),