import { InvoicesTable } from "../components/forms/InvoiceTable";


export const Faturas = () => {
    return (
        <div className="bg-white shadow rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Faturas</h2>
            <InvoicesTable />
        </div>
    );
    }