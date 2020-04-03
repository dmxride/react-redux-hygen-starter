---
inject: true
to: "<%= logic && 'src/store/rootSaga.js' %>"
after: yield all\(\[
---
    <%=name.toLowerCase()%>Saga(),