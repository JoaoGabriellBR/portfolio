import { FiMenu } from "react-icons/fi";

const Header = () => {
    return (
        <header className="pt-7 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
                <h1 className="font-extrabold text-[1.2rem]">{"</>"}</h1>
                <FiMenu className="cursor-pointer text-[1.8rem]" />
            </div>
        </header>
    )
}

export default Header;