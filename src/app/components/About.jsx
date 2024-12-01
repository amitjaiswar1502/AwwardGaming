"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React from "react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen relative">
      <div className=" mb-8 mt-36 flex flex-col items-center gap-4">
        <h2 className="font-general text-center text-sm md:text-[10px]  uppercase">
          Welcome to Zentry
        </h2>
        <div className=" mt-5 text-center text-4xl md:text-[6rem] leading-[0.8] uppercase">
          Disc<b>o</b>ver the world's
          <br />
          largest shared <b>a</b>dventure
        </div>

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            src="/img/about.webp"
            alt="background"
            width={800}
            height={600}
            priority
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
