/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.controllers;


import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.serialization.gson.WithoutRoot;
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
    private  Result result;
    
    
  
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post
    public void save(Artesao artesao) throws Exception{
       if(artesao != null){ 
        ArtesaoDAOJPA artesaoDAOJPA = new ArtesaoDAOJPA();
        artesaoDAOJPA.salvar(artesao);
        System.out.print("OK!");
       }else{
           System.out.print("Erro! O Objeto Artesao: "+artesao+" é nulo.");
       }
    }

}
