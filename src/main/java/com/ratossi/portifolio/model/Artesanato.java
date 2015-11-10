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
    @NamedQuery(name = "Artesanato.findAll",query = "SELECT s FROM Artesanato s"),
    @NamedQuery(name = "Artesanato.findByName",query = "SELECT s FROM Artesanato s WHERE s.nome = :nome"),
    @NamedQuery(name = "Artesanato.findRemover",query = "DELETE FROM Artesanato s WHERE s.idartesanato = :idartesanato" ),
    @NamedQuery(name = "Artesanato.findIdArtesao",query = "SELECT s FROM Artesanato s WHERE s.idArtesao = :idArtesao")
    
})

public class Artesanato implements Serializable {
   
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column
   private Integer idartesanato;
   
   @Column
   private String idArtesao;
   
   @Column
   private String nome;
   
   @Column
   private String categoria;
   
   @Column
   private String loja;
   
   @Column
   private String preco;
  
   @Column
   private String descricao;

    public Integer getIdartesanato() {
        return idartesanato;
    }

    public void setIdartesanato(Integer idartesanato) {
        this.idartesanato = idartesanato;
    }

    public String getIdartesao() {
        return idArtesao;
    }

    public void setIdartesao(String idartesao) {
        this.idArtesao = idartesao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getLoja() {
        return loja;
    }

    public void setLoja(String loja) {
        this.loja = loja;
    }

    public String getPreco() {
        return preco;
    }

    public void setPreco(String preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + Objects.hashCode(this.idartesanato);
        hash = 97 * hash + Objects.hashCode(this.idArtesao);
        hash = 97 * hash + Objects.hashCode(this.nome);
        hash = 97 * hash + Objects.hashCode(this.categoria);
        hash = 97 * hash + Objects.hashCode(this.loja);
        hash = 97 * hash + Objects.hashCode(this.preco);
        hash = 97 * hash + Objects.hashCode(this.descricao);
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
        final Artesanato other = (Artesanato) obj;
        if (!Objects.equals(this.idartesanato, other.idartesanato)) {
            return false;
        }
        if (!Objects.equals(this.idArtesao, other.idArtesao)) {
            return false;
        }
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        if (!Objects.equals(this.categoria, other.categoria)) {
            return false;
        }
        if (!Objects.equals(this.loja, other.loja)) {
            return false;
        }
        if (!Objects.equals(this.preco, other.preco)) {
            return false;
        }
        if (!Objects.equals(this.descricao, other.descricao)) {
            return false;
        }
        return true;
    }

    

     
}
