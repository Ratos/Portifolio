<%-- 
    Document   : artesoes
    Created on : 06/10/2015, 13:36:56
    Author     : Darlan
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <p>Artesões:</p>
        <c:forEach items="${todos}" var="item">
            ${item.nome}<br>
        </c:forEach>
    </body>
</html>
