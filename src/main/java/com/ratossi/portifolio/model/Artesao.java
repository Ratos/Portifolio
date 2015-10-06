/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model;

import java.io.Serializable;
import java.util.Objects;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;


/**
 *
 * @author Darlan
 */
@Entity
@NamedQueries({
   @NamedQuery(name = "Artesao.findByUsuario", query = "SELECT s FROM Artesao s WHERE s.usuario = :usuario"),
   @NamedQuery(name = "Artesao.findByName", query = "SELECT s FROM Artesao s WHERE s.nome = :nome"),
   @NamedQuery(name = "Artesao.findAll", query = "SELECT s FROM Artesao s")
        
})
public class Artesao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer idArtesao;
    @Column
    private String nome;
    @Column
    private String usuario;
    @Column
    private String senha;

    public Integer getIdArtesao() {
        return idArtesao;
    }

    public void setIdArtesao(Integer idArtesao) {
        this.idArtesao = idArtesao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + Objects.hashCode(this.idArtesao);
        hash = 67 * hash + Objects.hashCode(this.nome);
        hash = 67 * hash + Objects.hashCode(this.usuario);
        hash = 67 * hash + Objects.hashCode(this.senha);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Artesao other = (Artesao) obj;
        if (!Objects.equals(this.idArtesao, other.idArtesao)) {
            return false;
        }
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        if (!Objects.equals(this.usuario, other.usuario)) {
            return false;
        }
        if (!Objects.equals(this.senha, other.senha)) {
            return false;
        }
        return true;
    }
    
    
}
