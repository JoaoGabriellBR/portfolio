import SocialMedias from "@/components/SocialMedias";

const Footer = () => {
    return (
        <footer className="py-16 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center space-y-5">
                <div className="w-[10rem]">
                    <SocialMedias />
                </div>
                <p className="text-neutral-400">{" < © 2023 João Gabriel Silva /> "}</p>
            </div>
        </footer>
    )
}

export default Footer;