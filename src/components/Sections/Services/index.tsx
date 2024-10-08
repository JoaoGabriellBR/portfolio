import ServiceItem from "@/components/ServiceItem";
import { serviceData } from "@/utils/services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="serviços"
      className="py-7 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">Serviços</h1>
          <p className="text-sm text-neutral-400">O que eu faço?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 space-y-5 md:space-y-0">
          {serviceData.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
