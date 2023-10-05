import { ButtonProps } from '@/utils/types';

const Button = ({ children, outline, icon: Icon, iconPosition, ...props }: ButtonProps) => {
    const isIconRight = iconPosition === "right";
    const iconStyles = "w-[1.2rem] h-[1.2rem] font-bold";
    const buttonStyles = `
    text-md font-bold px-6 py-2 rounded-full flex justify-center items-center 
    ${outline ? 'bg-transparent text-white border-solid border-2 border-white font-normal' : 'bg-white text-zinc-900 border-none'} 
    hover:opacity-80 transition duration-500 ease-in-out
  `;

    return (
        <button {...props} className={buttonStyles}>
            {!isIconRight && Icon && <Icon className={`mr-2 ${iconStyles}`} />}
            {children}
            {isIconRight && Icon && <Icon className={`ml-2 ${iconStyles}`} />}
        </button>
    );
};

export default Button;
