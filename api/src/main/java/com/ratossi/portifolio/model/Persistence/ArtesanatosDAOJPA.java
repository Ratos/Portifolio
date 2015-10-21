/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.Persistence;

import com.ratossi.portifolio.model.Artesanatos;
import com.ratossi.portifolio.model.dao.ArtesanatosDAO;
import com.ratossi.portifolio.model.dao.Facabrica;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;



/**
 *
 * @author Darlan
 */
public class ArtesanatosDAOJPA implements ArtesanatosDAO{

  

    @Override
    public List<Artesanatos> buscarTodos() {
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query = em.createNamedQuery("Artesanatos.findAll");
       return query.getResultList();
       
       
    }

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
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Query query = em.createNamedQuery("Artesanatos.findRemover").setParameter("idartesanato", artesanatos.getIdartesanato());
        query.executeUpdate();
        
    }

    @Override
    public void alterar(Object object) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

   
    @Override
    public List<Artesanatos> buscar(String nome) {
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query;
       query = em.createNamedQuery("Artesanatos.findByName").setParameter("nome", nome);
       return  query.getResultList();
    }

   
    


    
}
