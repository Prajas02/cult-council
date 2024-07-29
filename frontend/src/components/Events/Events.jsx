import React, { useEffect, useRef, useState } from "react";
import "./Events.css";
import axios from 'axios'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { easeInOut, motion } from "framer-motion";
import EventCaraousel from "../../utility/Event Caraousel/EventCaraousel";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {

  useEffect(()=>{
    const getEventInfo = async()=>{
      try {
        const res = await axios.get('https://insiit-backend-node.vercel.app/api/events')
        console.log(res.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getEventInfo()
  },[])

  const scrollRef = useRef(null);
  const pageTwoRef = useRef(null);
  const sliderRef = useRef(null);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  useGSAP(() => {
    // upcoming event heading animation   ->  PAGE 1 SCROLLING
    gsap.from('.heading',{
      y: 50,
      ease: "expo",
      duration: 2,
      opacity: 0,
      delay: 0.5
    })

    //cards entering animation
    gsap.fromTo(
      ".cards.swipe-right",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "expo",
        stagger: 1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".cards.swipe-left",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "expo",
        stagger: 1,
        delay: 1,
      }
    );

    // CARDS SCROLLING ANIMATION
    tl.to(".cards", {
      y: -50,
      opacity: 0,
      duration: 3,
      ease: "power1",
    })

    // SCROLLING BACKGROUND CHANGE ANIMATION    ->   PAGE 2 SCROLLING
    gsap.to(".events-container", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "center top",
        end: "bottom top",
        scrub: 2,
      },
    });

    //page 2 heading animation
    gsap.from('.previous-events-title',{
      y: 200,
      ease: "power1",
      opacity: 0,
      duration: 5,
      scrollTrigger:{
        trigger : pageTwoRef.current,
        scroller: 'body',
        start: "top 200px",
        end: "top top",
        scrub: 2
      }
    })

    //page 2 caraousel
    gsap.from(sliderRef.current,{
      opacity: 0,
      x: 500,
      ease: "power1",
      duration: 5,
      scrollTrigger:{
        trigger : pageTwoRef.current,
        scroller: 'body',
        start: "top 200px",
        end: "top top",
        scrub: 2
      }
    })

  }, [scrollRef, pageTwoRef,sliderRef]);

  const imgArray = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvPopo-kG4Xln8pc12-K8LUAri7Za1gPz22Fpk9PQrHNwq40cQrtLgZfUAPACm5RdUUs&usqp=CAU",
    "https://plugins-media.makeupar.com/smb/blog/post/2023-09-20/92e846ce-4bbf-4c71-be11-c014ed8ce266.jpg",
    "https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGLtZgjllhdhJUi8EjTdnq-0cOgB_7htCcg&s",
  ];

  return (
    <div className="events-container">
      <div ref={scrollRef} className="recent-events">
        <div className="heading-container">
          <h1 className="heading">Upcomming Events</h1>
        </div>
        <div className="cards-container">
          {imgArray.map((img, i) => {
            return (
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                  ease: easeInOut
                }}
                key={i}
                className={`cards ${
                  i % 2 == 0 ? "swipe-right" : "swipe-left"
                } `}
              >
                <div className="left">
                  <img src={img} alt="" />
                </div>
                <div className="right">
                  <h1>Sthapna Divas Dance Events</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta ipsa, soluta eius asperiores voluptatum
                    accusamus numquam facilis repellat earum hic doloribus cum
                    aperiam iusto eos harum neque quo velit?
                  </p>
                  <div className="links">goole form registration link</div>
                  <div className="bottom">
                    <p>by Cultural Secretary</p>
                    <div className="links">
                      <a href="">insta</a>
                      <a href="">fb</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div ref={pageTwoRef} className="previous-events">
          <div className="heading-container">
            <h1 id="title" className="previous-events-title">Previous Events</h1>
          </div>
          <div style={{overflow:"hidden"}} ref={sliderRef}>
              <EventCaraousel />
          </div>
      </div>
    </div>
  );
};

export default Events;
