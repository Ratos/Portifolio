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
   @NamedQuery(name = "Artesao.findByUsuario", query = "SELECT s FROM Artesao s WHERE s.email = :email"),
   @NamedQuery(name = "Artesao.findByName", query = "SELECT s FROM Artesao s WHERE s.nome = :nome"),
   @NamedQuery(name = "Artesao.findAll", query = "SELECT s FROM Artesao s"),
   @NamedQuery(name = "Artesao.validarEmail", query = "SELECT s.email FROM Artesao s WHERE s.email = :email "),
   @NamedQuery(name = "Artesao.findGetId", query = "SELECT s FROM Artesao s WHERE s.idArtesao = :idartesao ")
        
})
public class Artesao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer idArtesao;
    @Column
    private String nome;
    @Column
    private String email;
    @Column
    private String endereco;
    @Column
    private String tel;
    @Column
    private String senha;
    @Column
    private String confsenha;
        
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getConfsenha() {
        return confsenha;
    }

    public void setConfsenha(String confsenha) {
        this.confsenha = confsenha;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + Objects.hashCode(this.idArtesao);
        hash = 71 * hash + Objects.hashCode(this.nome);
        hash = 71 * hash + Objects.hashCode(this.email);
        hash = 71 * hash + Objects.hashCode(this.endereco);
        hash = 71 * hash + Objects.hashCode(this.tel);
        hash = 71 * hash + Objects.hashCode(this.senha);
        hash = 71 * hash + Objects.hashCode(this.confsenha);
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
        if (!Objects.equals(this.email, other.email)) {
            return false;
        }
        if (!Objects.equals(this.endereco, other.endereco)) {
            return false;
        }
        if (!Objects.equals(this.tel, other.tel)) {
            return false;
        }
        if (!Objects.equals(this.senha, other.senha)) {
            return false;
        }
        if (!Objects.equals(this.confsenha, other.confsenha)) {
            return false;
        }
        return true;
    }


    
    
}
