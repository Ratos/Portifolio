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
import br.com.caelum.vraptor.observer.upload.UploadSizeLimit;
import br.com.caelum.vraptor.observer.upload.UploadedFile;
import br.com.caelum.vraptor.serialization.gson.WithoutRoot;
import static br.com.caelum.vraptor.view.Results.json;
import com.ratossi.portifolio.model.Artesanato;
import com.ratossi.portifolio.model.Persistence.ArtesanatosDAOJPA;
import java.io.File;
import java.io.IOException;
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
      *Cadastra uma peça de Artesanato
    */
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post
    public void salvar(Artesanato artesanato){
        artesanatosDAOJPA.salvar(artesanato);
        result.use(json()).from(artesanato).serialize();
       
    }
    
    @Post
    @UploadSizeLimit(sizeLimit=50 * 1024 * 1024, fileSizeLimit=10 * 1024 * 1024)
    public void ArtesanatoFoto(UploadedFile foto) throws IOException {
        File fotoSalva = new File("C:\\Users\\Darlan\\Portifolio\\src\\main\\webapp\\WEB-INF\\upload", foto.getFileName());
        foto.writeTo(fotoSalva);
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
    }
    
    /*
      *Busca todos artesanatos com o mesmo nome
    */
    @Get
    public void buscar(String nome){
       List<Artesanato> artesanato = artesanatosDAOJPA.buscar(nome);
       result.use(json()).from(artesanato).serialize();
    }
   
    @Consumes(value = "application/json", options = WithoutRoot.class)
    @Post
    public void alteraArtesanato(Artesanato artesanato){
        artesanatosDAOJPA.alterar(artesanato);
    }
    
    /*
        *Busca Artesanatos de um Unico Artesão
    */    
    @Get
    public void listaArtesanatos(String idArtesao){
        List<Artesanato> artesanatos = artesanatosDAOJPA.buscarId(idArtesao);
        result.use(json()).from(artesanatos).serialize();
    
    }
}
