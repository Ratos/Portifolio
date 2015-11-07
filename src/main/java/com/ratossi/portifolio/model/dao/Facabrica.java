/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.eclipse.persistence.sessions.Session;


/**
 *
 * @author Cicim
 */
public class Facabrica {
    
    private static final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("com.ratossi_portifolio_war_1.0-SNAPSHOTPU");
   

    public Facabrica() {
    }
    
    
    public static EntityManager getGerenciador() {
        return entityManagerFactory.createEntityManager();
    }
    
    public static Session getSession(){
        return null;
    }
}
