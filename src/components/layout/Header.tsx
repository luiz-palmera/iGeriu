
const Header = () => {
    return (
        <header className="w-full bg-primary shadow">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center space-x-8">
            <h1 className="text-2xl font-bold text-background">iGeriu</h1>
            <nav>
            <ul className="flex space-x-4">
                <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    Faturas
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
    }

    export default Header;