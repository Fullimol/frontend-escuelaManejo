import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return (
        <div className='novedades'>
            <h1 style={{
          fontWeight: 600
        }}>
            {title}
        </h1>


            <h4 style={{
          fontWeight: 500
        }}>
            {subtitle}
        </h4>


            <img style={{

                
        }}
        src={imagen}/>


            <div style={{
          fontWeight: 200
        }} 
            dangerouslySetInnerHTML={{__html:body}} />
            <hr />
        </div>
    )
}

export default NovedadItem;