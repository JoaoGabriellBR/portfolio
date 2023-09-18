import SocialMedias from "@/components/SocialMedias";

const Footer = () => {
    return (
        <footer className="pb-7 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center space-y-5">
                <SocialMedias />
                <p className="text-neutral-400">{" < © 2023 João Gabriel Silva /> "}</p>
            </div>
        </footer>
    )
}

export default Footer;