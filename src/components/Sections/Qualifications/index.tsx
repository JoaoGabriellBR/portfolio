"use client"

import { useState } from "react";
import Timeline from "@/components/Timeline";
import Button from "@/components/Button";
import { qualifications } from "@/utils/qualifications";

const Qualifications = () => {

  const [isSelected, setIsSelected] = useState<string>('Experiência');

  return (
    <section id="qualificações" className="w-full">
      <div className="max-w-6xl mx-auto space-y-10 px-4 sm:px-6">

        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">Qualificações</h1>
          <p className="text-sm text-neutral-400">Minha jornada pessoal</p>
        </div>

        <div className="w-full flex justify-center items-center space-x-10 cursor-pointer">
          {qualifications?.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => setIsSelected(item.name)}
              className={`flex flex-row justify-center items-center space-x-1`}
            >
              <Button outline={isSelected !== item.name}>
                {item.icon} {item.name}
              </Button>
            </div>
          ))}
        </div>

        {qualifications?.map((item, index) => item.name === isSelected && (
          <Timeline key={index} events={item.event} Icon={item.onlyIcon} />
        ))}

      </div>
    </section>
  );
};

export default Qualifications;
