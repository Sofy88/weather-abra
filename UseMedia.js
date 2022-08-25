import { useState, useEffect } from "react";


export const useMedia = (breakPoints) => {
    const getCurrentBreakPoint = () => {
        const currentwidth = window.innerWidth;
           
        for (const breakpoint of breakPoints) {
             if ( currentwidth >= breakpoint.min &&  currentwidth <= breakpoint.max) {
              return breakpoint;  
              }
            }
        return undefined;   
     };
    

    const [currentBreakPoint, setCurrentBreakPoint]  = useState(() => 
    getCurrentBreakPoint());

    const onResize = () => {
        const breakPoint = getCurrentBreakPoint();

        setCurrentBreakPoint(breakPoint)
    };
    
    useEffect(() => {
     window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
        
    }, []);


return currentBreakPoint;

};

export default useMedia;