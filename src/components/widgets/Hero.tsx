import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { CallToAction, HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import { url } from 'inspector';

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image } = props.data;

 
  return (
    <section id="heroOne" className="bg-no-repeat bg-left-top" style={{
      backgroundColor:"black",
      backgroundImage: `url('/bg1.png')`,   
      height: "100%",
      width:"100%",
      }}
    
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                <Link className="btn" href="#features3" >
                  Get Details
                </Link>            
                <CTA data={callToAction2 as CallToAction} />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
