/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.model;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 *
 * @author Darlan
 */
public class Artesanatos {
   
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column
   private Integer idAtesanato;
   
   @Column
   private String nome;
   
   @Column
   private String tipo;
   
   @Column
   @OneToOne
   @JoinColumn( name = "idArtesao")
   private Artesao artesao;
   
   @Column
   private String comentario;

    public Integer getIdAtesanato() {
        return idAtesanato;
    }

    public void setIdAtesanato(Integer idAtesanato) {
        this.idAtesanato = idAtesanato;
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

    public Artesao getArtesao() {
        return artesao;
    }

    public void setArtesao(Artesao artesao) {
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
        int hash = 3;
        hash = 23 * hash + Objects.hashCode(this.idAtesanato);
        hash = 23 * hash + Objects.hashCode(this.nome);
        hash = 23 * hash + Objects.hashCode(this.tipo);
        hash = 23 * hash + Objects.hashCode(this.artesao);
        hash = 23 * hash + Objects.hashCode(this.comentario);
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
        if (!Objects.equals(this.idAtesanato, other.idAtesanato)) {
            return false;
        }
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        if (!Objects.equals(this.tipo, other.tipo)) {
            return false;
        }
        if (!Objects.equals(this.artesao, other.artesao)) {
            return false;
        }
        if (!Objects.equals(this.comentario, other.comentario)) {
            return false;
        }
        return true;
    }
   
    
}
