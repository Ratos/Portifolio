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
import com.ratossi.portifolio.model.Artesanato;
import com.ratossi.portifolio.model.Persistence.ArtesanatosDAOJPA;
import java.util.List;
import javax.inject.Inject;

/**
 *
 * @author Darlan
 */

@Controller
@Path("/artesanato")
public class ArtesanatoController {
 
    @Inject
    private Result result;
    ArtesanatosDAOJPA artesanatosDAOJPA = new ArtesanatosDAOJPA();
    
    /*
      *Cadastra uma paça de Artesanato
    */
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post
    public void salvar(Artesanato artesanato){
        artesanatosDAOJPA.salvar(artesanato);
    }
    
    /*
      *Lista todos os Artesanato
    */
   
    @Get
    public void lista(){
      List<Artesanato> artesanato = artesanatosDAOJPA.buscarTodos();
      result.use(json()).from(artesanato).serialize();
    }
    
    /*
        *remover Artesanato
    */
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post
    public void remover(Artesanato artesanato){
       
      
      artesanatosDAOJPA.remover(artesanato);
      result.redirectTo(ArtesanatoController.class).lista();
    }
    
    /*
      *Busca todos artesanatos com o mesmo nome
    */
    @Get
    public void buscar(String nome){
       List<Artesanato> artesanato = artesanatosDAOJPA.buscar(nome);
       result.use(json()).from(artesanato).serialize();
    }
}
