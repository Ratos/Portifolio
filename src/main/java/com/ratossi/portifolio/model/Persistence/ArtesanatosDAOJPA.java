/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.Persistence;

import com.ratossi.portifolio.model.Artesanato;
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
    public List<Artesanato> buscarTodos() {
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query = em.createNamedQuery("Artesanato.findAll");
       return query.getResultList();
       
       
    }

    @Override
    public void salvar(Artesanato artesanato) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        em.persist(artesanato);
        em.getTransaction().commit();
        em.close();
    }

    @Override
    public void remover(Artesanato artesanato) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Query query = em.createNamedQuery("Artesanato.findRemover").setParameter("idartesanato", artesanato.getIdartesanato());
        query.executeUpdate();
        
    }

    @Override
    public void alterar(Artesanato artesanato) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
       
        em.merge(artesanato);
        em.getTransaction().commit();
        em.close();
             
      
    }

   
    @Override
    public List<Artesanato> buscar(String nome) {
       EntityManager em = Facabrica.getGerenciador();
       em.getTransaction().begin();
       Query query;
       query = em.createNamedQuery("Artesanato.findByName").setParameter("nome", nome);
       return  query.getResultList();
    }

    @Override
    public List<Artesanato> buscarId(String idArtesao) {
        EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Query query;
        query = em.createNamedQuery("Artesanato.findIdArtesao").setParameter("idArtesao", idArtesao);
        return query.getResultList();
    }

    @Override
    public List<Artesanato> buscarCategoria(String categoria) {
         EntityManager em = Facabrica.getGerenciador();
        em.getTransaction().begin();
        Query query;
        query = em.createNamedQuery("Artesanato.findCategoria").setParameter("categoria", categoria);
        return query.getResultList();
    }

   
    


    
}
