import type { ReactNode } from "react";


export const Table = ({children}: {children: ReactNode}) => {
    return(
        <div className="overflow-hidden relative">
            <table className="w-full border-collapse text-sm">
                {children}
            </table>
        </div>
    )
}