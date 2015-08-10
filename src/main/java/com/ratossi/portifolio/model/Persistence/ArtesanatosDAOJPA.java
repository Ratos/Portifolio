/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.Persistence;

import com.ratossi.portifolio.model.Artesanatos;
import com.ratossi.portifolio.model.dao.ArtesanatosDAO;
import com.ratossi.portifolio.model.dao.Facabrica;
import javax.persistence.EntityManager;



/**
 *
 * @author Darlan
 */
public class ArtesanatosDAOJPA implements ArtesanatosDAO{

    @Override
    public void salvar(Artesanatos artesanatos) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        em.persist(artesanatos);
        em.getTransaction().commit();
        em.close();
    }

    @Override
    public void remover(Artesanatos artesanatos) {
       
    }
    
}
