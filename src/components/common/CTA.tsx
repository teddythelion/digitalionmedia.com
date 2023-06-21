import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { CallToAction } from '~/shared/types';

const CTA = (props: { data: CallToAction; class?: string }) => {
  const { text, href, icon: Icon, targetBlank, btnText, btnType } = props.data;
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);

       elem?.scrollIntoView({ 
        behavior:"smooth",
      });

  };

  return (
    <>
      {props.data && text && href && (
        <div className="flex w-full sm:w-auto">
          {targetBlank ? (
            <Link
              className={`btn ${btnType === 'primary' ? 'btn-primary' : ''} w-full sm:mb-0 ${
                props.class ? props.class : ''
              } ${btnText === 'uppercase' ? 'uppercase' : ''}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && <Icon className="mr-1 -ml-1.5 h-5 w-5" />} {text}
            </Link>
          ) : (
            <Link
              className={`btn ${btnType === 'primary' ? 'btn-primary' : ''} w-full sm:mb-0 ${
                props.class ? props.class : ''
              } ${btnText === 'uppercase' ? 'uppercase' : ''}`}
              scroll={false}
              href={href}              
            >
              {Icon && <Icon className="mr-1 -ml-1.5 h-5 w-5" />} {text}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
