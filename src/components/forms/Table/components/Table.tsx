import type { ReactNode } from "react";


export const Table = ({children}: {children: ReactNode}) => {
    return(
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
                {children}
            </table>
        </div>
    )
}