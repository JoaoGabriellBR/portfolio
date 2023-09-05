import SocialMedias from "@/components/SocialMedias";

const AboutMe = () => {
    return (
        <section className="py-7 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-center md:justify-between items-center">

                <div className="w-full md:w-6/12 bg-blue-700">
                    <h1>image</h1>
                </div>

                <div className="w-full md:w-6/12">
                    <h1 className="text-[10rem] opacity-10 font-black -ml-[5rem]">SOBRE</h1>
                  
                        <h1 className="-mt-[8rem] mb-[5rem] text-[1.5rem] font-bold">Olá, Eu sou o João Gabriel</h1>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo vitae
                            praesentium explicabo deleniti itaque aspernatur vero unde ex sequi!
                        </p>
                    
                    <div className="w-4/12">
                        <SocialMedias />
                    </div>

                    <h1 className="font-bold text-[1rem]">Me contacte</h1>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;