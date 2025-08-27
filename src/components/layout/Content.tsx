import React from 'react';

type ContentProps = {
    children: React.ReactNode;
}

export const Content = ({children}: ContentProps) => {
    return(
        <div className='bg-surface rounded-lg w-[76rem] max-h-[42rem] shadow-xl'>
            {children}
        </div>
    )
}

