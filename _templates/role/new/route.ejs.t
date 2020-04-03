---
inject: true
to: src/config/index.js
after: " ROLES: {"
---
    <%= name.toUpperCase()%> : '<%= name.toLowerCase()%>',