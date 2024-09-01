import { ServiceItemProps } from "@/utils/types";

const ServiceItem = ({ icon, services }: ServiceItemProps) => (
  <div className="flex flex-col justify-center items-center text-center">
    {icon}
    {services?.map((service, index) => (
      <p className="text-neutral-400 text-xl" key={index}>
        {service}
      </p>
    ))}
  </div>
);

export default ServiceItem;