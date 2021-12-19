import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { about as content } from '../data/about';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <Main
      meta={
        <Meta
          title={`${content.meta_title} - ${new Date().getFullYear()}`}
          description={content.meta_description}
          canonical={content.canonical}
        />
      }
    >
      <link
        rel="preload"
        as="image"
        href={`${router.basePath}/assets/images/${content.image.src}`}
      />

      <div className="px-4 md:px-8 pt-10 md:pt-18 mb-12 md:mb-16">
        <div className="max-w-screen-lg mx-auto mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center">
            <div className="col-span-1 md:col-span-8 pr-0 md:pr-5 mb-8 md:mb-0">
              <img
                src={`${router.basePath}/assets/images/${content.image.src}`}
                alt="Herb Torres"
                className="block"
                width={content.image.width}
                height={content.image.height}
                loading="eager"
              />
            </div>

            <div className="col-span-1 md:col-span-4">
              <div className="mb-5 w-full">
                <svg
                  width="96.158px"
                  height="9.865px"
                  viewBox="0 0 96.158 9.865"
                  enableBackground="new 0 0 96.158 9.865"
                  xmlSpace="preserve"
                  className="about-header w-full max-w-xs h-auto"
                >
                  <path
                    fill="#CD4829"
                    d="M0,0.176h3.954v1.93H2.038v1.875h1.685v1.901H2.038v3.806H0V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M4.537,0.176h2.038c0.952,0,1.78,0.245,2.338,0.801c0.503,0.517,0.802,1.25,0.802,2.283v0.136
              c0,1.304-0.503,2.051-1.114,2.527l1.264,3.765H7.69L6.726,6.59H6.562v3.099H4.537V0.176z M6.63,4.878
              c0.585,0,1.006-0.367,1.006-1.345V3.329c0-1.019-0.435-1.332-1.02-1.332H6.562v2.881H6.63z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M10.148,5.231V4.634C10.148,1.535,11.235,0,12.961,0c1.713,0,2.8,1.535,2.8,4.634v0.597
              c0,3.085-1.087,4.634-2.8,4.634C11.235,9.865,10.148,8.316,10.148,5.231z M13.682,5.245V4.606c0-2.228-0.271-2.731-0.721-2.731
              c-0.448,0-0.733,0.503-0.733,2.731v0.639c0,2.242,0.285,2.732,0.733,2.732C13.41,7.977,13.682,7.486,13.682,5.245z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M16.385,0.176h1.957l1.48,4.294V0.176h1.956v9.512h-1.86l-1.576-4.525v4.525h-1.957V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M23.558,2.12h-1.249V0.176h4.537V2.12h-1.25v7.569h-2.038V2.12z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M26.749,4.457h3.683v1.97h-3.683V4.457z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M31.178,0.176h4.117v1.93h-2.079v1.848h1.849v1.902h-1.849v1.89h2.12v1.943h-4.158V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M35.96,0.176h1.957l1.48,4.294V0.176h1.957v9.512h-1.861l-1.576-4.525v4.525H35.96V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#CD4829"
                    d="M42.115,0.176h1.901c2.311,0,3.547,1.577,3.547,4.525v0.462c0,2.948-1.236,4.525-3.547,4.525h-1.901V0.176z
               M44.153,2.051v5.761c0.747,0,1.331-0.57,1.331-2.636V4.688C45.484,2.581,44.9,2.051,44.153,2.051z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M49.096,0.176h1.902c2.311,0,3.547,1.577,3.547,4.525v0.462c0,2.948-1.236,4.525-3.547,4.525h-1.902V0.176z
               M51.135,2.051v5.761c0.747,0,1.331-0.57,1.331-2.636V4.688C52.466,2.581,51.882,2.051,51.135,2.051z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M55.17,0.176h4.117v1.93h-2.078v1.848h1.848v1.902h-1.848v1.89h2.118v1.943H55.17V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M59.518,0.176h2.092l0.803,5.693l0.815-5.693h2.023l-1.78,9.539h-2.16L59.518,0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M65.577,0.176h4.117v1.93h-2.08v1.848h1.849v1.902h-1.849v1.89h2.12v1.943h-4.157V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M70.359,0.176h2.038v7.569h1.808v1.943h-3.846V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M74.256,5.231V4.634C74.256,1.535,75.344,0,77.069,0c1.712,0,2.799,1.535,2.799,4.634v0.597
              c0,3.085-1.087,4.634-2.799,4.634C75.344,9.865,74.256,8.316,74.256,5.231z M77.789,5.245V4.606c0-2.228-0.271-2.731-0.72-2.731
              s-0.734,0.503-0.734,2.731v0.639c0,2.242,0.286,2.732,0.734,2.732S77.789,7.486,77.789,5.245z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M80.492,0.176h1.876c1.889,0,3.191,0.992,3.191,3.248v0.109c0,2.31-1.493,3.234-2.989,3.288h-0.053v2.868
              h-2.025V0.176z M82.544,5.014c0.571-0.027,0.992-0.436,0.992-1.427V3.424c0-1.019-0.394-1.44-0.979-1.44h-0.04v3.031H82.544z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M86.049,0.176h4.118v1.93h-2.079v1.848h1.848v1.902h-1.848v1.89h2.119v1.943h-4.158V0.176z"
                    className="about-header"
                  ></path>
                  <path
                    fill="#393A39"
                    d="M90.831,0.176h2.039c0.951,0,1.78,0.245,2.337,0.801c0.503,0.517,0.802,1.25,0.802,2.283v0.136
              c0,1.304-0.503,2.051-1.114,2.527l1.264,3.765h-2.174L93.02,6.59h-0.163v3.099h-2.025V0.176z M92.924,4.878
              c0.585,0,1.006-0.367,1.006-1.345V3.329c0-1.019-0.435-1.332-1.02-1.332h-0.054v2.881H92.924z"
                    className="about-header"
                  ></path>
                </svg>
              </div>

              {content.text.map((block: any) => (
                <p key={block} className="text-base mb-4 last:mb-0">
                  {block}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-screen-md mx-auto">
          <p className="text-base font-semibold mb-2">{content.lang_label}</p>
          <p className="text-base font-medium mb-4">{content.lang_text}</p>
          <p className="text-base font-semibold mb-2">{content.tools_label}</p>
          <p className="text-base font-medium">{content.tools_text}</p>
        </div>

        <div className="max-w-screen-md mt-3 mx-auto">
          <div
            onClick={() => setExpanded(!expanded)}
            className="flex flex-col py-3 border-b border-gray-150 text-inherit cursor-pointer text-primary-500 hover:text-red-500 mb-5"
            id="accordion_button"
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls="accordion_body"
          >
            <div
              className="flex pb-3 flex-row justify-between items-center"
              id="accordion_body"
              aria-labelledby="accordion_button"
            >
              <p
                className={`flex-auto transition ${
                  expanded ? 'font-semibold' : 'font-semibold'
                }`}
              >
                <span
                  className={`font-semibold ${expanded ? 'hidden' : 'block'}`}
                >
                  View more
                </span>
                <span
                  className={`font-semibold ${expanded ? 'block' : 'hidden'}`}
                >
                  View less
                </span>
              </p>
              <svg
                id="chevron"
                className={`text-inherit ${
                  expanded ? 'rotate-0' : 'rotate-180'
                }`}
                width="12"
                height="8"
                viewBox="0 0 12 8"
              >
                <path
                  fill="currentColor"
                  d="M10.6,8L6,3.4L1.4,8L0,6.6l6-6l6,6L10.6,8z"
                ></path>
              </svg>
            </div>
            <div
              className={`transition-height duration-300 ease-out overflow-hidden ${
                expanded ? 'h-96' : 'h-0'
              }`}
            >
              <iframe
                className="w-full h-full p-0 m-0"
                src={`${content.iframe_src}`}
              ></iframe>
            </div>
          </div>

          <Link href={`${content.pdf_src}`}>
            <a
              className="my-6 transition font-semibold text-primary-500 hover:text-red-500 hover:border-0"
              target="_blank"
              rel="noreferrer nofollow"
            >
              View resume
              <svg
                id="drive-pdf"
                className="inline-block ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 11.5h1v-1H7v1zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm10-1H17v1h1.5V13H17v2h-1.5V9h4v1.5zm-5 3c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm-2.5 0h1v-3h-1v3z"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default About;
