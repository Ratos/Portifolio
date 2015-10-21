<%-- 
    Document   : home
    Created on : 17/08/2015, 16:42:30
    Author     : Darlan
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Atesanatos</title>
    </head>
    <body>
        <h1>Atesanatos:</h1>
        <c:forEach var="i" begin="i" end="5" >
            <p>Artesanato:</p><c:out value="${lista}"/>
        </c:forEach>
    </body>
</html>
