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
import javax.persistence.NoResultException;
import javax.persistence.NonUniqueResultException;
import javax.persistence.Query;




public class ArtesaoDAOJPA {
    
 public void salvar(Artesao artesao) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        em.persist(artesao);
        em.getTransaction().commit();
        em.close();
    }
 
    public void alterar(Artesao artesao){
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Artesao merge = em.merge(artesao);
        em.getTransaction().commit();
        em.close();

    }
    
    public Artesao getArtesao(Integer idartesao){
       try {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Query query = em.createNamedQuery("Artesao.findGetId").setParameter("idartesao", idartesao);
       
        return (Artesao) query.getSingleResult();
          
      } catch (NoResultException | NonUniqueResultException exception) {
          return null;
      }
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
  
  public Artesao login(String email, String senha){
     
      try{
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query = em.createNamedQuery("Artesao.findByUsuario").setParameter("email", email );
       return (Artesao) query.getSingleResult();
      }catch (NoResultException | NonUniqueResultException exception) {
          return null;
      }
       
    
   }

  public String validarEmail(String string){
       
      try {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Query query = em.createNamedQuery("Artesao.validarEmail").setParameter("email",string);
       
        return  (String) query.getSingleResult();
          
      } catch (NoResultException | NonUniqueResultException exception) {
          return null;
      }
        
  }
  

}
