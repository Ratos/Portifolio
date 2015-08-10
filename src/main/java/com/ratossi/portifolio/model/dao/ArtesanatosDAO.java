/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.dao;

import com.ratossi.portifolio.model.Artesanatos;

/**
 *
 * @author Darlan
 */
public interface ArtesanatosDAO {
    
    void salvar(Artesanatos artesanatos);
    void remover(Artesanatos artesanatos);
}
