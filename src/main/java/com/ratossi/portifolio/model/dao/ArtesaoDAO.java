/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.dao;

import com.ratossi.portifolio.model.Artesao;
import java.util.List;


/**
 *
 * @author Darlan
 */
public interface ArtesaoDAO {
 
    void salvar(Artesao artesao);
    void remover(Artesao artesao);
    void Alterar(Artesao artesao);
    Artesao getArtesao(String idartesao);
    List <Artesao> buscarTodos();
    List <Artesao> buscar();
    String validarEmail(String string);
    Artesao login();
}
