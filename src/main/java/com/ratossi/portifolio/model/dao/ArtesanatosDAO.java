/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.dao;

import com.ratossi.portifolio.model.Artesanato;
import java.util.List;

/**
 *
 * @author Darlan
 */
public interface ArtesanatosDAO {
    
    void salvar(Artesanato artesanato);
    void remover(Artesanato artesanato);
    void alterar(Object object);
    List<Artesanato> buscarTodos();
    List<Artesanato> buscar(String nome);
}
