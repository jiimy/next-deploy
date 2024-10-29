import React from 'react';

const Delete = ({ onClick, fill = "#8C8C8C" }: ImgTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7.92913 3.21177H7.71484C7.8327 3.21177 7.92913 3.11535 7.92913 2.99749V3.21177H16.072V2.99749C16.072 3.11535 16.1684 3.21177 16.2863 3.21177H16.072V5.14035H18.0006V2.99749C18.0006 2.05195 17.2318 1.2832 16.2863 1.2832H7.71484C6.76931 1.2832 6.00056 2.05195 6.00056 2.99749V5.14035H7.92913V3.21177ZM21.4291 5.14035H2.57199C2.09788 5.14035 1.71484 5.52338 1.71484 5.99749V6.85463C1.71484 6.97249 1.81127 7.06892 1.92913 7.06892H3.54699L4.20859 21.0778C4.25145 21.9912 5.00681 22.7118 5.9202 22.7118H18.0809C18.997 22.7118 19.7497 21.9939 19.7925 21.0778L20.4541 7.06892H22.072C22.1898 7.06892 22.2863 6.97249 22.2863 6.85463V5.99749C22.2863 5.52338 21.9032 5.14035 21.4291 5.14035ZM17.8747 20.7832H6.12645L5.47824 7.06892H18.5229L17.8747 20.7832Z" fill={fill} />
    </svg>
  );
};

export default Delete;