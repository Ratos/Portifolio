/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.Persistence;

import com.ratossi.portifolio.model.Artesao;
import com.ratossi.portifolio.model.dao.Facabrica;
import javax.persistence.EntityManager;



public class ArtesaoDAOJPA {
    
 public void salvar(Artesao artesao) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        em.persist(artesao);
        em.getTransaction().commit();
        em.close();
    }
    
  public Artesao buscar(String id){
      return null;
  }  
}
