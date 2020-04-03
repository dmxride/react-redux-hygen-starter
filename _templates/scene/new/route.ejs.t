---
inject: true
skip_if: <%= h.inflection.camelize(name.toLowerCase())%>
to: src/routes.js
after: const Routes = \[
---
  {
    exact: true,
    key: '<%=name.toLowerCase()%>',
    name: '<%= h.inflection.camelize(name.toLowerCase())%>',
    path: '/<%=route%>',
    roles: [ROLES.GUEST],
    component: <%= h.inflection.camelize(name.toLowerCase())%>
  },