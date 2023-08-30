"use client"
import React from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles"
import {useCallback} from "react"
import {Engine, Container} from "tsparticles-engine"


const Particle = ()=>{
    const  ParticlesInit = useCallback(async (engine:Engine)=>{
        console.log(engine)
       await loadFull(engine)
    }, [])

    const ParticlesLoaded = useCallback(async (container:Container | undefined )=>{
        console.log(container)
    },[])
    return (
      <Particles id="particlesEffect" init={ParticlesInit} loaded={ParticlesLoaded} className="absolute w-full h-[50%] translate-x-0"
      options={{

        fullScreen:{enable:false},
        background : {
          
        },
        fpsLimit:120, 

        interactivity : {
            events:{
                onClick:{
                    enable:false,
                    mode:"push",
                },

                onHover:{
                    enable:true,
                    mode:"repulse"
                },

                resize:true,   
            },

            modes:{
                push:{
                    quantity: 4,
                },
                repulse:{
                    distance:400,
                    duration:0.4
                }
            }

         
        },

        particles:{
            color:{
                value:"#e68e2e"
            },

            links:{
                color:"#f5d393",
                distance:150,
                enable:true,
                opacity:0.5,
                width:1


            },

            collisions:{
                enable:true,

            },

            move:{
                direction:"none",
                enable:true,
                outModes:{
                    default:"bounce"
                },

                random:false,
                speed:1,
                straight:false
            },

          number:{
            density:{
                enable:true,
                area:800,
            },

                    value:80
          },

          opacity:{
            value:0.5,
          },

          shape:{
            type:"circle",
          },

          size:{
            value:{min:1, max:5},
          },



        }, 


        detectRetina:true
      }}
      
      
      />
    )
}

export default Particle;