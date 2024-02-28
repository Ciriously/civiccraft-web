import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

const WorkingAreas = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <h2 className="mb-12   text-center text-3xl font-gordita-bold md:mt-0 mt-20 ">
        Working Areas.
      </h2>
      <div
        className={cn(
          "flex  flex-column justify-center font-gordita-medium [perspective:1000px] relative    no-visible-scrollbar max-w-full w-full md:mb-0 mb-8 md:px-0 px-10 ",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(" relative px-4 py-2 rounded-full  ", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0  dark:bg-[#F78D4C] rounded-full  ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block  dark:text-gray-500">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10  ", contentClassName)}
      />
    </>
  );
};

const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-32  ">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-2/3 rounded-2xl md:w-1/2 font-gordita-regular text-white md:h-full md:py-40 md:px-10 px-5 py-5 absolute top-1/2 md:left-1/4  transform -translate-x-1/2 -translate-y-1/2 bg-[#F78D4C] flex items-center justify-center md:overflow-none  md:ml-0 ml-1", className)}



        >
          {tab.content}
        </motion.div>
      ))}

    </div>
  );
};
export default WorkingAreas;