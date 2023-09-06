const Button = ({ children, ...props }: any) => {

    const styles = `bg-white text-zinc-900 text-md font-bold rounded-full px-6 py-2 rounded-full flex justify-center items-center hover:opacity-80`

    return (
        <button {...props} className={styles}>
            {children}
        </button>
    )
}

export default Button;