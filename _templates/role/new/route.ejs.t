---
inject: true
to: src/config/index.ts
after: " ROLES: {"
---
    <%= name.toUpperCase()%> : '<%= name.toLowerCase()%>',