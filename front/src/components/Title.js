import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Tittle=(titulo)=>{
    return(
    <HelmetProvider >
      <Helmet>
        <title>{titulo.data}</title>
      </Helmet>
  </HelmetProvider>
    )
}