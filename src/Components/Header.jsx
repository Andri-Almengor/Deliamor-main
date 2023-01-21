import React from 'react'

const Header = ({title, images}) => {
    return (
        <>
      {/* FONDO DEL HEADER  */}
          <div className="container-img">
            <img src={images} alt="" />
            <div className="Title-Historia" title={title}>{title}</div>
    
          </div>
    
        </>  
      );
}

export default Header
