const Button = ({ children, type, ...props }: any) => {

    // const bgColor = type === "outline" ? 'border border-1 border-white bg-transparent text-white' : 'border-none text-black bg-white';

    return (
        <button {...props} className={`bg-white text-zinc-900 text-sm rounded-full px-6 py-2 font-bold rounded-full flex justify-center items-center`}>
            {children}
        </button>
    )
}

export default Button;