import React from 'react';
import Typical from 'react-typical'
const Lafalafi = () => {
  return (
    <div>
       <>
       <p className='type-text'>
       I ' m a { ' ' } 
         <Typical
         loop={Infinity}
         wrapper="b"
        steps={[
          ' Front-end Developer',
           1000,
          'React Js Developer',
          1000,
         'MERN Stak Developer',
         1000,
        
        
        ]}
        
      />
       </p>
    </>
    </div>
  );
};

export default Lafalafi;