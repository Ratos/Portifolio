/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.controllers;


import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.serialization.gson.WithoutRoot;
import static br.com.caelum.vraptor.view.Results.json;
import com.ratossi.portifolio.controllers.util.EmailValidation;

import com.ratossi.portifolio.model.Artesao;
import com.ratossi.portifolio.model.Persistence.ArtesaoDAOJPA;
import javax.inject.Inject;




/**
 *
 * @author Darlan
 */
@Controller
@Path("/cadastro")
public class CadastroController {
    @Inject
    Result result;
            
    ArtesaoDAOJPA artesaoDAOJPA = new ArtesaoDAOJPA();
    EmailValidation emailValidation = new EmailValidation();
    
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Get
    public void validar(String email){
        if(email != null){
            Boolean emailValidationResult = emailValidation.emailValidation(email);
            if (emailValidationResult == true ) {
                System.out.print("O Email é valido: "+email);
                result.use(json()).from(true).serialize();  
            }else{
                 System.out.print("Este Email já foi cadastrado: "+email);
                result.use(json()).from(false).serialize();
            }
        }
    }
    
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post
    public void save(Artesao artesao) throws Exception{
        if(artesao != null){ 
          artesaoDAOJPA.salvar(artesao);
        }else{
           System.out.print("Erro! O Objeto Artesao: "+artesao+" é nulo.");
       }
    }

}
