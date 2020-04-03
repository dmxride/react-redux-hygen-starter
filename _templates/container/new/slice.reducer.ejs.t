---
inject: true
to: "<%= logic && 'src/store/rootSlices.js' %>"
after: export const rootReducer = combineReducers\({
---
  <%=h.inflection.camelize(name.toLowerCase())%>: <%= name.toLowerCase()%>Slice.reducer,