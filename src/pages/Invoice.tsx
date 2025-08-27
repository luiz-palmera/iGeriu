import { ArrowUpOnSquareIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { IconButton } from "../components/ui/IconButton";
import { InvoicesTable } from "../components/Invoices/InvoicesTable";
import type { ScreenTitleProps } from "../components/layout/AppLayout";
import { useEffect } from "react";


export const Invoice = ({ onTitleChange }: ScreenTitleProps) => {

    useEffect(() => {
    onTitleChange("Faturas", "Listagem de Faturas");
    }, [onTitleChange]);

    return (
        <div className="bg-white shadow rounded-xl p-8">
            <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold">Faturas</h2>
            <div className="flex space-x-2">
                <IconButton onClick={() => {}} icon={<FunnelIcon className="h-4 w-4"/>} text="Filtrar"/>
                <IconButton onClick={() => {}} icon={<ArrowUpOnSquareIcon className="h-4 w-4"/>} text="Exportar"/>
            </div>
            </div>
            <InvoicesTable />
        </div>
    );
    }