const Button = ({ children, outline, ...props }: any) => {

    const styles = `${outline ? 'bg-transparent text-white border-solid border-2 border-white font-normal' : 'bg-white text-zinc-900 border-none'} text-md font-bold px-6 py-2 rounded-full flex justify-center items-center hover:scale-90 hover:opacity-80 transition duration-500 ease-in-out`

    return (
        <button {...props} className={styles}>
            {children}
        </button>
    )
}

export default Button;