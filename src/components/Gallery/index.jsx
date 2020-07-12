import React, { useState, useEffect } from "react";
import { useRequest } from '@umijs/hooks';
import Masonry from "react-masonry-component";
import { URL, port, apiRoute } from '../../config';
const fullURL = `http://${URL}:${port}/${apiRoute}`;
const masonryOptions = {
    transitionDuration: 1000,
    // itemSelector: ".grid-image",
    columnWidth: 17,
    fitWidth: true
  };
export function Gallery(props) {
    const { data, error, loading } = useRequest(`${fullURL}=285906324`);
    
    if (data && data.imgSrc) {
        const childElements = data.imgSrc.map(function(src) {
            return (
                <div>
                    <img src={src} width="520" />
                </div>
            );
          });
          return (
            <div>
              <Masonry elementType="div" options={masonryOptions}>
                {childElements}
              </Masonry>
            </div>
          );
    } else {
        return <div>Loading...</div>
    }
}

