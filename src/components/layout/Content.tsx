import React from 'react';

type ContentProps = {
    children: React.ReactNode;
}

export const Content = ({children}: ContentProps) => {
    return(
        <div className='bg-surface rounded-lg w-[76rem] h-[32rem] shadow-2xl '>
            {children}
        </div>
    )
}

