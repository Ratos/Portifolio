/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Id;

/**
 *
 * @author Darlan
 */
public class FotoPerfil {
  
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer idFoto;
    
    @Column
    private String idArtesao;
    @Column
    private String nomeFoto;

    public Integer getIdFoto() {
        return idFoto;
    }

    public void setIdFoto(Integer idFoto) {
        this.idFoto = idFoto;
    }

    public String getIdArtesao() {
        return idArtesao;
    }

    public void setIdArtesao(String idArtesao) {
        this.idArtesao = idArtesao;
    }

    public String getNomeFoto() {
        return nomeFoto;
    }

    public void setNomeFoto(String nomeFoto) {
        this.nomeFoto = nomeFoto;
    }
    
    
}
