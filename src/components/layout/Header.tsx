import { 
  ArrowPathIcon,
  BanknotesIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  HomeIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  BellAlertIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { NavLink } from "./NavLink";


const navLinks = [
  { label: "Início", href: "#", icon:<HomeIcon className="h-5 w-5"/> },
  { label: "Clientes", href: "#", icon:<UserIcon className="h-5 w-5"/> },
  { label: "Pedidos", href: "#", icon:<ClipboardDocumentCheckIcon className="h-5 w-5"/> },
  { label: "Faturas", href: "#", icon:<BanknotesIcon className="h-5 w-5"/> },
  { label: "Financeiro", href: "#", icon:<CurrencyDollarIcon className="h-5 w-5"/> },
  { label: "Assinaturas", href: "#", icon:<ArrowPathIcon className="h-5 w-5"/> },
  { label: "Tickets", href: "#", icon:<ChatBubbleLeftRightIcon className="h-5 w-5"/> },
  { label: "Relatórios", href: "#", icon:<ChartPieIcon className="h-5 w-5"/> },
];

const Header = () => {
  return (
    <header className="bg-primary border-b-2 border-headerContent">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-center space-x-4 h-full">      
          <h1 className="text-2xl font-bold text-background">iGeriu</h1>
          <nav className="hidden md:flex h-full">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} icon={link.icon}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <MagnifyingGlassIcon className="text-headerContentHover w-5 h-5"/>
            <BellAlertIcon className="text-headerContentHover w-5 h-5"/>
            <UserCircleIcon className="text-headerContentHover w-5 h-5"/>
          </div>
        </div>
      </div>
    </header>
  );
    }

    export default Header;