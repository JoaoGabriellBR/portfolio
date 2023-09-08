const Timeline = ({ events, Icon }: any) => {
  return (
    <>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {events.map((item: any, index: number) => (
          <>
            {/* <!-- Item #1 --> */}
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* <!-- Icon --> */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Icon className="fill-current text-black w-5 h-5" />
              </div>

              {/* <!-- Card --> */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 flex flex-col justify-start">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <time className="font-caveat font-medium mb-2">{item.date}</time>
                <div className="text-neutral-400">{item.description}</div>
              </div>

            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Timeline;
