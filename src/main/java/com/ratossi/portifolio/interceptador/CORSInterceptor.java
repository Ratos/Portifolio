/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ratossi.portifolio.interceptador;

/**
 *
 * @author Darlan
 */
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import br.com.caelum.vraptor.BeforeCall;
import br.com.caelum.vraptor.InterceptionException;
import br.com.caelum.vraptor.Intercepts;
 
@Intercepts
public class CORSInterceptor {
     
    private HttpServletRequest request;
    private HttpServletResponse response;
 
    /**
     * @deprecated
     */
    public CORSInterceptor() {}
 
    @Inject
    public CORSInterceptor(    HttpServletRequest request,
                            HttpServletResponse response ) {
        this.request = request;
        this.response = response;
    }
 
    @BeforeCall
    public void intercept() throws InterceptionException {
         
        String origin = request.getHeader("origin") != null ? request.getHeader("origin") : "*";
         
        response.addHeader("Access-Control-Allow-Origin", origin);
        response.addHeader("Access-Control-Allow-Credentials", "true");
        response.addHeader("Access-Control-Expose-Headers", "Content-Type, Location");
    }
 
}