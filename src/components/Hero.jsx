import React from "react";
import RC_cola from "../assets/RC_cola.png";
import RC_lime from "../assets/RC_lime.png";
import RC_exotic from "../assets/RC_exotic.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: RC_cola,
    title: "RC Bitter Lemon",
    subtitle: "Fresh sparkling lemon drink with a crisp citrus taste and refreshing finish.",
    old_price: "$1.07",
    price: "$0.95",
    modal: "Lemon",
    bgColor: "#20CFE3",
  },
  {
    id: 2,
    image: RC_lime,
    title: "RC Lemon Lime",
    subtitle: "Zesty lemon-lime soda with a cool sparkling citrus sensation.",
    old_price: "$1.07",
    price: "$0.95",
    modal: "Lime",
    bgColor: "#1FAF38",
  },
  {
    id: 3,
    image: RC_exotic,
    title: "RC Exotic",
    subtitle: "Sweet tropical sparkling beverage with a vibrant exotic fruit flavor.",
    old_price: "$1.07",
    price: "$0.95",
    modal: "Exotic",
    bgColor: "#E91E63",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-brandDark text-white min-h-screen"
      >
        {/* navbar components */}
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* ______ Headphone Info ______ */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* ______ Headphone List Separator ______ */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm ">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              {/* Headphone list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                        className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                      >
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className={`w-[80px] img-shadow ${
                              activeData.image === item.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                            }`}
                          />
                        </div>
                        <div className="!mt-6 space-y-1 text-center">
                          <p className="text-base line-through opacity-50">
                            {item.old_price}
                          </p>
                          <p className="text-xl font-bold">{item.price}</p>
                          {/* <p className="text-xs font-normal text-nowrap">
                            {item.modal}
                          </p> */}
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ______ Hero Image ______ */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* ______ WhatsApp Icon ______ */}
<div className="text-3xl text-white fixed bottom-10 right-10 z-[99999]  flex flex-col gap-4">
  <div className="flex gap-4">
      <a
    href="https://wa.me/992926807077"
    className="hover:rotate-[360deg] duration-500"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://t.me/dilshod_friday"
    className="hover:rotate-[360deg] duration-500"
  >
    <FaTelegram />
  </a>

  <a
    href="https://www.instagram.com/dilshod_friday?igsh=a2psM2ZiN3VuM2Jq"
    className="hover:rotate-[360deg] duration-500"
  >
    <FaInstagram />
  </a>
  </div>
</div>
          
        </div>
      </motion.section>
    </>
  );
};

export default Hero;