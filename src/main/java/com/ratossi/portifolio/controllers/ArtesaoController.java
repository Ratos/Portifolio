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
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.serialization.gson.WithoutRoot;
import com.ratossi.portifolio.model.Artesao;
import com.ratossi.portifolio.model.Persistence.ArtesaoDAOJPA;
import java.util.List;
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
    
    ArtesaoDAOJPA artesaoDAOJPA = new ArtesaoDAOJPA();
    Artesao artesaoResult;
    
    /*
      *Busca todos artesões com o mesmo nome
    */
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Get()
    public void buscar(String nome){
        List<Artesao> artesoes = artesaoDAOJPA.buscar(nome);
        result.include("busca",artesoes);
    }
    
    /*
      *Lista todos os artesões
    */
    @Get()
    public void artesoes(){
      List<Artesao> artesoes = artesaoDAOJPA.buscarTodos();
      result.include("todos",artesoes);
    } 
    
}
