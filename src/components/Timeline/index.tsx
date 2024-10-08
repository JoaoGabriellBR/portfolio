import { JobEvent, EducationEvent, PropsTimeline } from "@/utils/types";
import { motion } from 'framer-motion';

const Timeline = ({ events, Icon }: PropsTimeline) => {

  const divMainStyle = "space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent";
  const divItemStyle = "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active";
  const divIconStyle = "flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2";
  const divCardStyle = "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 flex flex-col justify-start";
  const divTitle = "flex flex-row justify-start space-x-2 items-center flex-wrap";
  const iconStyle = "fill-current text-black w-5 h-5";
  const titleStyle = "text-xl font-bold";
  const dateStyle = "font-caveat text-neutral-400 text-[0.7rem]";
  const occupationStyle = "text-neutral-400 text-md mb-2 font-bold";
  const descriptionStyle = "text-neutral-400";

  return (
    <div className={divMainStyle}>
      {events?.map((item: JobEvent | EducationEvent, index: number) => (
        <motion.div 
          key={index} 
          className={divItemStyle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={divIconStyle}>
            <Icon className={iconStyle} />
          </div>
          <div className={divCardStyle}>
            <div className={divTitle}>
              <h1 className={titleStyle}>{item.title}</h1>
              <time className={dateStyle}>{item.date}</time>
            </div>
            <h2 className={occupationStyle}>{item.occupation}</h2>
            <p className={descriptionStyle}>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


export default Timeline;
