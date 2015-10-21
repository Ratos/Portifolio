<%-- 
    Document   : index
    Created on : 18/06/2015, 23:35:17
    Author     : Darlan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
         <form method="post" action="${linkTo[CadastroController].save}">
            
            <input type="text" name="artesao.nome" placeholder="Nome"><br>
            <input type="text" name="artesao.usuario" placeholder="Usuario"><br>
            <input type="text" name="artesao.senha" placeholder="Senha"><br>
            <input type="submit" name="Cadastrar"/>
        </form>
    </body>
</html>
