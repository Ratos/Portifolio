/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.controllers;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;
import com.ratossi.portifolio.annotations.Public;


import javax.inject.Inject;


/**
 *
 * @author Darlan
 */
@Public
@Controller
@Path("/home")
public class SiteController {
    
    
    @Inject
    private Result result;
    
     /*
      *Lista todos os Artesanatos
    */
    @Get
    public void lista(){
        result.redirectTo(ArtesanatoController.class).lista();
    }; 
     
    /*
      *Lista todos os artesões
    */
    @Get
    public void artesoes(){
        result.redirectTo(ArtesaoController.class).artesoes();
    }
    
}
