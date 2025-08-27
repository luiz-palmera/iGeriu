
type ButtonProps = {
    onClick: () => void;
    text: string;
    variant?: "primary" | "secondary";
}

export const Button = ({onClick, text, variant="primary" }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className={`px-4 py-2 ${
                variant === "secondary" ? 
                'bg-primary text-surface hover:bg-surface border border-surface hover:border-primary hover:text-primary' :
                'bg-surface text-primary hover:bg-primary hover:text-surface hover:border hover:border-surface'
            } border border-primary rounded-md font-semibold transition-transform-colors duration-700 ease-in-out`}>
            {text}
        </button>
    );
}