/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.Persistence;

import com.ratossi.portifolio.model.Artesao;
import com.ratossi.portifolio.model.dao.Facabrica;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;



public class ArtesaoDAOJPA {
    
 public void salvar(Artesao artesao) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        em.persist(artesao);
        em.getTransaction().commit();
        em.close();
    }
   
  public List<Artesao> buscar(String nome){
       
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query;
       query = em.createNamedQuery("Artesao.findByName").setParameter("nome", nome);
       return  query.getResultList();
     
  } 
  
    public List<Artesao> buscarTodos(){
       
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query;
       query = em.createNamedQuery("Artesao.findAll");
       return  query.getResultList();
     
  } 
  
  public Artesao login(String usuario, String senha){
    
      EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query = em.createNamedQuery("Artesao.findByUsuario").setParameter("usuario", usuario );
       return (Artesao) query.getSingleResult();
       
  }
  
  
  
}
