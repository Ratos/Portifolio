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
    @NamedQuery(name = "Artesanatos.findAll",query = "SELECT s FROM Artesanatos s"),
    @NamedQuery(name = "Artesanatos.findByName",query = "SELECT s FROM Artesanatos s WHERE s.nome = :nome"),
    @NamedQuery(name = "Artesanatos.findRemover",query = "DELETE FROM Artesanatos s WHERE s.idartesanato = :idartesanato" )    
})

public class Artesanatos implements Serializable {
   
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column
   private Integer idartesanato;
   
   @Column
   private String nome;
   
   @Column
   private String tipo;
   
   @Column
   private String artesao;
   
   @Column
   private String comentario;

    public Integer getIdartesanato() {
        return idartesanato;
    }

    public void setIdartesanato(Integer idartesanato) {
        this.idartesanato = idartesanato;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getArtesao() {
        return artesao;
    }

    public void setArtesao(String artesao) {
        this.artesao = artesao;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 37 * hash + Objects.hashCode(this.idartesanato);
        hash = 37 * hash + Objects.hashCode(this.nome);
        hash = 37 * hash + Objects.hashCode(this.tipo);
        hash = 37 * hash + Objects.hashCode(this.artesao);
        hash = 37 * hash + Objects.hashCode(this.comentario);
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
        final Artesanatos other = (Artesanatos) obj;
        if (!Objects.equals(this.idartesanato, other.idartesanato)) {
            return false;
        }
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        if (!Objects.equals(this.tipo, other.tipo)) {
            return false;
        }
        if (!Objects.equals(this.comentario, other.comentario)) {
            return false;
        }
        return true;
    }

     
}
