<%@ page import="edu.miu.model.Point" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<body>
<h2>Hello World!</h2>
<a href="/hello">The points are <c: out value = "${point.x}"/><%= ((Point)request.getAttribute("point")).getX()%>and <%= ((Point)request.getAttribute("point")).getY()%></a>

</body>
</html>
