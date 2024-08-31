"use client"

import { useState } from "react";
import Timeline from "@/components/Timeline";
import Button from "@/components/Button";
import { qualifications } from "@/utils/qualifications";
import { QualificationIcon } from "@/utils/types";
import { motion } from 'framer-motion';

const Qualifications = () => {
  const [isSelected, setIsSelected] = useState<string>('Experiência');

  return (
    <section id="qualificações" className="w-full">
      <div className="max-w-6xl mx-auto space-y-10 px-4 sm:px-6">
        <div className="text-center">
          <motion.h1
            className="text-[1.5rem] font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Qualificações
          </motion.h1>
          <motion.p
            className="text-sm text-neutral-400"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Minha jornada pessoal
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center items-center space-x-10 cursor-pointer"
        >
          {qualifications?.map((item: QualificationIcon, index: number) => (
            <div
              key={index}
              onClick={() => setIsSelected(item.name)}
              className="flex flex-row justify-center items-center"
            >
              <Button outline={isSelected !== item.name} icon={item.icon}>
                {item.name}
              </Button>
            </div>
          ))}
        </motion.div>

        {qualifications?.map(
          (item: QualificationIcon, index: number) =>
            item.name === isSelected && (
              <Timeline key={index} events={item.event} Icon={item.icon} />
            )
        )}
      </div>
    </section>
  );
};


export default Qualifications;
