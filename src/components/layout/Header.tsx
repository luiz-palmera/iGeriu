
const Header = () => {
    return (
<header className="bg-primary border-b-2 border-headertext">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-8">
        <h1 className="text-2xl font-bold text-background">iGeriu</h1>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                    Início
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Clientes
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Pedidos
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Faturas
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Financeiro
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Assinaturas
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Tickets
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Relatórios
                </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            *icons*
          </div>
        </div>
      </div>
    </header>
    );
    }

    export default Header;