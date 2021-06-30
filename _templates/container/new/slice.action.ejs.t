---
inject: true
to: "<%= logic ? 'src/store/rootSlices.ts' : null %>"
after: "export const actions = {"
---
  <%=h.inflection.camelize(name.toLowerCase())%>: <%= name.toLowerCase()%>Slice.actions,