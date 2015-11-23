/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.controllers.util;

import com.ratossi.portifolio.model.Persistence.ArtesaoDAOJPA;
import java.io.Serializable;

/**
 *
 * @author Darlan
 */
public class EmailValidation implements Serializable {
   
    ArtesaoDAOJPA adaojpa = new ArtesaoDAOJPA();
    String email; 
    public  Boolean emailValidation(String string){
             
        email = adaojpa.validarEmail(string);
            
        if ( email != null) {
            
            return false;
            
        }else{
        
            return true;
        }
     
    }
}
