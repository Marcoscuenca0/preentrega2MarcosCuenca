import React from 'react';

function ItemDetail({ data }) {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail_image" src={data.images} alt="" />
        <div className="content">
          <h1>{data.nombre}</h1>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
