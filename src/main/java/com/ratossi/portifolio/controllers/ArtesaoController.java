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
import com.ratossi.portifolio.model.Artesanatos;
import com.ratossi.portifolio.model.Artesao;
import com.ratossi.portifolio.model.Persistence.ArtesanatosDAOJPA;

import javax.inject.Inject;


/**
 *
 * @author Darlan
 */
@Controller
@Path("/artesao")
public class ArtesaoController {
    
    @Inject
    private Result result;
    
    
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post("salvar")
    public void salvar(Artesanatos artesanatos){
      
        if (artesanatos != null) {
        ArtesanatosDAOJPA artesanatosDAOJPA = new ArtesanatosDAOJPA();
        artesanatosDAOJPA.salvar(artesanatos);
        }
       
        
    }
    
}
