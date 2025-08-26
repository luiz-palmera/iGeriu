import { ArrowUpOnSquareIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { IconButton } from "../components/ui/IconButton";
import { InvoicesTable } from "../components/forms/Table/InvoiceTable";


export const Faturas = () => {
    return (
        <div className="bg-white shadow rounded-2xl p-8">
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