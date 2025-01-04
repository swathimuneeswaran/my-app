"use client";
import { useState } from "react";
import { data, filtersData } from "./data/data";
import Image from "next/image";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="header flex flex-wrap justify-between items-center p-4 md:p-6">
        <div className="relative w-[120px] h-[60px] md:w-[200px] md:h-[90px] mb-2 md:mb-0 md:ml-40">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="rounded-full"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <input
          type="search"
          placeholder="Search for Anything"
          className="px-3 py-2 border border-black w-[70%] sm:w-[50%] md:w-[200px] outline-none mt-2 md:mt-0 md:mr-20"
        />
      </div>

      <div className="mt-10 flex justify-between mx-10 text-xl text-primary font-semibold items-center">
        <h1>Ceiling Fans</h1>
        <h5 className="text-sm">Showing 2391 Results</h5>
      </div>

      <div className="flex flex-wrap mx-auto mt-5 bg-gray-50 p-5 w-[95%]">
        <div className="w-full sm:w-auto md:w-[100%] flex justify-between items-center gap-4">
          <div className="w-[50%] sm:w-[20%] relative ">
            <button
              className="w-full text-primary font-semibold text-center py-2 border border-gray-300 bg-white flex items-center justify-between"
              onClick={() => setSortOpen(!sortOpen)}
            >
              Sort By <span>▼</span>
            </button>
            {sortOpen && (
              <ul className="absolute w-full mt-1 bg-white border border-gray-300 z-10">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Relevance
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Best Sellers
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Price (Low)
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Price (High)
                </li>
              </ul>
            )}
          </div>

          <div className="w-[50%] sm:w-[20%] relative md:hidden">
            <button
              className="w-full text-primary font-semibold text-center py-2 border border-gray-300 bg-white flex items-center justify-between"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              Filters <span>▼</span>
            </button>
            {filtersOpen && (
              <div className="absolute w-full mt-1 bg-white border border-gray-300 z-10 p-3 max-h-[300px] overflow-auto">
                {filtersData.map((filter) => (
                  <div key={filter.id} className="mb-2">
                    <h1 className="font-bold text-sm">{filter.title}</h1>
                    {filter.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-1 text-xs"
                      >
                        <input type="checkbox" />
                        <label>{item}</label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-[95%] mx-auto mt-5">
        <div className="hidden sm:block w-[20%] h-auto p-5 ">
          <h1 className="bg-[#2c404c] p-4 text-white text-center text-xl font-bold">
            Filter Your Results
          </h1>
          {filtersData.map((filter, index) => (
            <div key={filter.id} className="flex flex-col m-0">
              <div>
                <h1 className="font-bold text-[13px] border border-x-2 border-gray-300 p-4 w-[100%]">
                  {filter.title}
                  <span
                    className="float-right text-[17px] cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    {expandedIndex === index ? "−" : "+"}
                  </span>
                </h1>
                {expandedIndex === index && (
                  <div className="border border-x-2 border-gray-300 p-4 w-[100%]">
                    {filter.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-row gap-2 items-center p-2 text-[12.1px]"
                      >
                        <input type="checkbox" />
                        <label>{item}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-[80%] flex flex-wrap gap-5 p-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[250px] h-auto flex flex-col items-center esm:mx-auto"
            >
              <div className="w-[200px] h-[200px] relative ">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                />
              </div>

              <div className="w-full bg-white p-2">
                <h1 className="text-[#707070] text-[15px] underline cursor-pointer">
                  {item.title}
                </h1>
                <h5 className="text-[#707070] text-[13px] underline cursor-pointer">
                  {item.made}
                </h5>
                <h6 className="text-black mt-1 text-[16px]">{item.price}</h6>

                <button className="text-[#7f9593] bg-[#f7f7f7] mt-2 w-[100%] font-bold p-2 text-[11px] flex items-center justify-center gap-2">
                  <input type="checkbox" className="w-3 h-3" />
                  SAVE/COMPARE
                </button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-5 mb-4">
        <p className="text-[12px] text-[#2c404c]">
          Ceiling fans cool you in the summer and warm you in the winter, all
          for just pennies a day. They are extremely efficient: even at high
          speeds they use less energy than a 75-watt light bulb. Actually, fans
          save energy, with cooling costs alone lowered as much as 40 percent,
          according to a study by Florida Power and Light. In the summer, fans
          create a wind chill effect that makes a temperature of 78°– 80°F feel
          like 72°F. So by using them you can set your thermostat higher. On
          most fans, the summer setting is a counter-clockwise rotation, viewed
          from below. In the winter, fans run in reverse (clockwise), reclaiming
          lost heat from the ceiling. They provide an even, comfortable
          temperature by moving hot air back down to the living areas below.
          Even though ceiling fans have been around for more than a century,
          they are more popular today than ever. If you are planning a purchase,
          use these helpful tips to make a better buy. <br />
          <br />
          When shopping for a ceiling fan, you may find it difficult to
          determine why one costs $50 and another $500. At first glance there
          may appear to be no difference. Only when you begin to examine them
          closely, armed with the information that follows, will you be able to
          recognize the qualities that will assure years and years of beauty and
          comfort. Inexpensive fans may look good when new, and they may even
          run well at first. After continued use, however, they will become
          noisy; or they will warp, wobble or quickly wear out. Selecting a
          proper ceiling fan should be done as carefully as picking a piece of
          fine furniture.
          <br />
          <br />
          The reason poorly made fans wobble is because of cheap blade
          materials, rotors and/or improper sealing processes are used. Blade
          brackets should have exact degrees of pitch or angles, while blades
          should be matched in carefully weighed and balanced sets.
          <br />
          <br />
          Those that do wear out have undergone poor manufacturing techniques or
          inadequate testing and inspection. Other problems that promote wear
          and tear are incorrectly matched motor size and blade pitch. Defective
          motor windings can cause electrical shorts. And poorly installed
          on/off pull chains can be pulled out of the housing.
          <br />
          <br />
          When searching for a ceiling please look for these features which are
          all found in one of our top fan manufacturers, Craftmade.
        </p>

        <ul className="pl-5 text-[12px] text-[#2c404c] list-inside">
          <li> A heavy duty motor for smooth, quiet performance </li>
          <li>
            A 16 pole motor with 2,000+ feet of copper windings for greater
            efficiency and smoother performance
          </li>
          <li> Multiple capacitors to control starting and running</li>
          <li> Die-cast aluminum rotors for cool running</li>
          <li>
            Stamped steel or die-cast zinc housing Heavy duty bearings that
            never need oiling because they are permanently lubricated
          </li>
          <li> 3-speed reversible switching for summer and winter</li>
          <li>12°, 14° or 16° blade pitch which greatly increases air flow</li>
          <li> Factory-installed gaskets to reduce noise and vibration.</li>
        </ul>
      </div>
    </>
  );
}
