import Image from "next/image";
import Link from "next/link";
import SocialMedias from "@/components/SocialMedias";
import picture from "@/assets/foto.png";

const AboutMe = () => {

    const email = "mailto:joaoname9@gmail.com";
    const phone = "34998819318";
    const titleStyles = "font-bold text-[1.5rem]";
    const contacts = {
        p: "text-neutral-400",
        span: "text-blue-400 ml-1"
    }

    return (
        <section id="sobremim" className="pt-32 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row justify-center md:justify-between items-start">

                <div className="w-full md:w-[50%] hidden md:flex flex-row justify-center">
                    <Image
                        src={picture}
                        alt="Foto João Gabriel Silva"
                        width={400}
                        height={400}
                    />
                </div>

                <div className="flex flex-col items-center md:items-start w-full md:w-[50%] space-y-5 text-center md:text-start">
                    <h1 className={titleStyles}>Sobre mim</h1>
                    <p className="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo vitae
                        praesentium explicabo deleniti itaque aspernatur vero unde ex sequi!
                    </p>

                    <div className="w-4/12">
                        <SocialMedias />
                    </div>

                    <div className="pt-5 space-y-3">
                        <h1 className={titleStyles}>Me contacte!</h1>
                        <p className={contacts.p}>Email:
                            <Link href={email} target="blank">
                                <span className={contacts.span}>joaoname9@gmail.com</span>
                            </Link>
                        </p>
                        <p className={contacts.p}>Telefone:
                            <Link href={phone} target="blank">
                                <span className={contacts.span}>(+55) 34 99881-9318</span>
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;