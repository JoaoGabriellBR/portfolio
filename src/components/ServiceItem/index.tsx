type ServiceItemProps = {
    icon: React.ReactNode;
    services: string[];
};

const ServiceItem = ({ icon, services }: ServiceItemProps) => (
    <div className="flex flex-col justify-center items-center text-center">
        <button>{icon}</button>
        {services?.map((service, index) => (
            <p className="text-neutral-400" key={index}>{service}</p>
        ))}
    </div>
);

export default ServiceItem;