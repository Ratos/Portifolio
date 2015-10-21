<%-- 
    Document   : buscar
    Created on : 26/08/2015, 21:09:01
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
        <c:forEach items="${busca}" var="item">
            ${item.nome}<br>
        </c:forEach>
    </body>
</html>
