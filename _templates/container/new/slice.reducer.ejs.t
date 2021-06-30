---
inject: true
to: "<%= logic ? 'src/store/rootSlices.ts' : null %>"
after: export const rootReducer = combineReducers\({
---
  <%=h.inflection.camelize(name.toLowerCase())%>: <%= name.toLowerCase()%>Slice.reducer,