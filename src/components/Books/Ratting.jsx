import React from 'react';

const Ratting = ({ratting}) => {
    const starCount = new Array(ratting).fill(undefined);
    return (
        <div className="ratting">
            {
                 starCount.map((item, index)=>(
                    
                 <i key={index} className="bi bi-star-fill" />
                
                

                ))
            }
            
        </div>
    );
}

export default Ratting;
