import React from 'react';

type ContentProps = {
    children: React.ReactNode;
}

const Content = ({children}: ContentProps) => {
    return(
        <div className='bg-surface rounded-lg w-[60rem] h-[32rem] shadow-2xl '>
            {children}
        </div>
    )
}

export default Content