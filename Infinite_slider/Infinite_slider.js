import React from "react";
import Image from "next/image";
import styles from "./Infinite_slider.module.css";

const liquid_metal = "/images/liquid-metal.jpg"; // Ensure this path is correct
const kasimir = "/images/kasimir.png"; // Ensure this path is correct

const logo_list = [
  "/images/logos/apple.png",
  "/images/logos/adidas.png",
  "/images/logos/benz.png",
  "/images/logos/cnn.png",
  "/images/logos/coca_cola.png",
  "/images/logos/facebook.png",
  "/images/logos/google.png",
  "/images/logos/hbo.png",
  "/images/logos/mcdonald.png",
  "/images/logos/motor.png",
  "/images/logos/nasa.png",
  "/images/logos/p_and_g.png",
  "/images/logos/shell.png",
  "/images/logos/star_buck.png",
  "/images/logos/yahoo.png",
];

const robo_list = [
  "/images/robos/robo1.jpg",
  "/images/robos/robo2.jpg",
  "/images/robos/robo3.jpg",
  "/images/robos/robo4.jpg",
  "/images/robos/robo5.jpg",
  "/images/robos/robo6.jpg",
  "/images/robos/robo7.jpg",
];

function Infinite_slider() {
  return (
    <>
      <div className="p-6 min-h-screen text-white">
        {/* <h1 className="text-5xl font-extrabold text-center mb-6">
          Experience the Infinite Slider
        </h1> */}
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="flex mobile:block w-full gap-4 justify-between items-center mb-8">
            <div
              className={`text-8xl mobile:text-5xl text-left mobile:text-center relative font-bold z-50 ${styles.text_glow}`}
            >
              Experience the Rhythm
            </div>
            <div className="w-4/12 mobile:w-full flex flex-col">
              <div
                className={`text-2xl mobile:hidden font-bold text-center  ${styles.text_glow}`}
              >
                DD DEV
              </div>
              <div className="mobile:hidden">
                <WriteUpText />
              </div>
            </div>
          </div>
          {/* Background Section */}
          <div
            className="bg-red-700 mobile:min-h-fit h-60 relative flex justify-center mobile:justify-end items-center rounded-2xl"
            style={{
              backgroundImage: `url('${liquid_metal}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-fit self-center z-40 mobile:w-[60%] mobile:block hidden">
              <WriteUpText />
            </div>
            <div className="h-full flex-1 justify-center relative flex">
              {" "}
              <Image
                src={kasimir}
                alt="Liquid Metal"
                width={500}
                height={300}
                quality={100}
                className="absolute mobile:relative mobile:-bottom-0 -bottom-28 mobile:self-center mobile:justify-center object-cover mobile:max-full mobile:h-full"
                style={{ objectPosition: "-110px 10px" }}
              />
            </div>
          </div>
          <div
            className={`w-full overflow-hidden relative ${styles.slider_mask}`}
          >
            {/* Logo Section */}
            <h2
              className={`text-2xl font-bold text-center my-4 ${styles.text_glow}`}
            >
              Explore Our Esteemed Partners
            </h2>
            <div
              className={`flex gap-6 flex-shrink-0 overflow-hidden my-4 p-2 relative h-16 justify-center items-center min-w-full`}
              style={{
                width: `${logo_list.length * 70}px`,
              }}
              data-type="slider"
            >
              {logo_list.map((logo, index) => (
                <div
                  key={index}
                  className={`h-14 w-14 transition-transform transform hover:scale-105 absolute -left-16 ${styles.animate_logos}`}
                  style={{
                    animationDelay: `${index * 1}s`,
                    animationDuration: `${logo_list.length * 1}s`,
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    fill
                    className="object-contain rounded-lg shadow-md hover:shadow-lg object-center"
                  />
                </div>
              ))}
            </div>
            {/* Robo Section */}
            <h2
              className={`text-2xl font-bold text-center mb-4  ${styles.text_glow}`}
            >
              Meet The Innovative Robotics
            </h2>
            <div
              className={`flex gap-6 flex-shrink-0 overflow-hidden my-4 p-2 relative h-56 justify-center items-center min-w-full`}
              data-type="slider"
              style={{
                width: `${robo_list.length * 200}px`,
              }}
            >
              {robo_list.map((logo, index) => (
                <div
                  key={index}
                  className={`h-52 w-52 transition-transform transform rounded-2xl border hover:scale-105 absolute overflow-hidden -right-52 ${styles.animate_logos_right}`}
                  style={{
                    animationDelay: `${index * 3}s`,
                    animationDuration: `${robo_list.length * 3}s`,
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Robo ${index + 1}`}
                    fill
                    className="shadow-md hover:shadow-lg object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <StarsBg />
    </>
  );
}

function WriteUpText() {
  return (
    <div className="text-sm text-gray-300 mobile:text-black font-bold text-center mobile:max-w-[90%] mx-auto mobile:p-4 h-fit mobile:backdrop-blur-md leading-loose mobile:rounded-3xl m-2 mobile:mr-0">
      Welcome to the Infinite Slider experience! Here, creativity meets
      technology as we showcase a stunning array of logos and robotic designs.
      Dive into a world where innovation takes center stage, and let your
      imagination soar. Join us on this journey of endless possibilities!
    </div>
  );
}

function StarsBg() {
  return (
    <section
      className={`${styles.bg_stars_section} bg-gradient-to-b from-gray-900 to-gray-800`}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          style={{
            top: `${Math.random() * 100}vh`, // Random vertical position
            left: `${Math.random() * 100}vw`, // Random horizontal position
            animationDelay: `${i * 0.2}s`, // Delay based on index
          }}
        ></span>
      ))}
    </section>
  );
}
export default Infinite_slider;
