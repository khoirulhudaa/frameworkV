import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import '../css/custom.css'
import {AiMagicIcon, LaptopProgrammingIcon, Blockchain04Icon, CommandIcon, EthereumRectangleIcon} from 'hugeicons-react';
import Link from '@docusaurus/Link';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />"
      noFooter
    >
      <main className='ooverflow-x-hidden w-screen'>


        <div id='asteroid1b' className='lg:inline hidden'></div>
        <div id='asteroid2b' className='lg:inline hidden'></div>
        <div id='asteroid1b2' className='lg:inline hidden'></div>
        <div id='asteroid3b' className='lg:inline hidden'></div>
        <div id='asteroid4b' className='lg:inline hidden'></div>
        <div id='asteroid5b' className='lg:inline hidden'></div>

        <div className='relative w-full h-full flex justify-center'>
          <div className="absolute w-full h-full overflow-hidden">
            <div className="w-screen h-[1px] absolute left-0 top-[10%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[20%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[30%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[40%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[50%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[60%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[70%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[80%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[90%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[100%] bg-slate-100"></div>
          
            <div className="w-[1px] h-screen absolute top-0 left-[10%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[20%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[30%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[40%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[50%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[60%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[70%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[80%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[90%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[100%] bg-slate-100"></div>
          </div>
          <img src='/img/gr.svg' alt='gradient' id='gr1' className='fixed left-[-7%] top-[32%] w-[65%] opacity-60' />

          <img src='/img/gr4.svg' alt='gradient1' className='gr1' />
          <img src='/img/gr2.svg' alt='gradient2' className='gr2' />

          <div className='relative w-full lg:mt-0 mt-9 h-max lg:h-[80vh] text-center mx-auto flex flex-col justify-center items-center'>
            <div className='rounded-full flex bg-blue-100 lg:text-[16px] text-[13px] text-blue-400 h-max w-max px-3 py-1 mb-2 items-center justify-center'>
              <AiMagicIcon className='mr-1' />
              Version 1.0.0 - new released 
              <AiMagicIcon className='ml-1' />
            </div>
            <h1 className='text-[2.5rem] lg:text-[3.7rem] font-bold w-[90vw] lg:w-[80vw] text-center'>
              Build modern website easily <br /> no CSS required.
            </h1>
            <p className='text-slate-500 lg:text-[16px] text-[13px] w-[90%] lg:w-[50%]'>A utility-first CSS framework packed with classes like v-pt-4, <span className='bg-blue-400 text-white rounded-full h-max pb-[2px] text-[14px] px-2'>v-d-flex</span>, text-center and rotate-90 that can be composed to build any design, directly in your code.</p>
            <Link to={'/docs/getStarted'}>
              <div className='relaative no-underline mt-4 px-4 lg:px-14 py-2 lg:py-2.5 font-medium text-[16px] lg:text-[18px] lg:text-[15px] bg-blue-500 text-white rounded-full cursor-pointer'>
                Get started <LaptopProgrammingIcon className='ml-1 w-4 h-4 relative top-[1.5px]' />
              </div>
            </Link>

            <div className='text-[14px] mt-6 w-[90vw] lg:w-max flex items-center mx-auto'>
              <div className='w-[30%] justify-center lg:w-max flex items-center px-3 py-1.5 rounded-full text-red-500 bg-red-100'>
                <EthereumRectangleIcon className='w-4 h-4 relative mr-2 lg:inline hidden' />
                Utilities
              </div>
              <div className='w-[30%] justify-center lg:w-max mx-4 flex items-center px-3 py-1.5 rounded-full text-purple-500 bg-purple-100'>
                <Blockchain04Icon className='w-4 h-4 relative mr-2 lg:inline hidden' />
                Components
              </div>
              <div className='w-[30%] justify-center lg:w-max flex items-center px-3 py-1.5 rounded-full text-green-500 bg-green-100'>
                <CommandIcon className='w-4 h-4 relative mr-2 lg:inline hidden' />
                Features
              </div>
            </div>
          </div>
        </div>

        <div className='w-[90vw] lg:mt-0 mt-10 mx-auto h-[0.6px] bg-slate-300 mb-4'></div>
        
        <div className='lg:flex mx-auto w-[90vw] text-justify'>
          <div className='w-full lg:w-1/2 h-max p-3'>
            <h3 className='font-bold mx-auto text-center w-full text-[1.6rem] text-black'>Customizable</h3>
            <p className='text-center leading-loose text-slate-500 text-[13px] lg:text-[12px] mt-2'>
              The ValClass is a highly customizable CSS framework that allows you to easily adjust colors, 
              typography, and components to fit your needs. With simple configuration, you can tweak 
              styles and add custom utilities without altering the core structure. Whether you’re 
              building a small website or a complex web application
            </p>
          </div>
          <div className='w-full lg:w-[1px] bg-slate-300 h-[1px] lg:h-[200px] lg:mb-0 mb-3 lg:mx-3'></div>
          <div className='w-full lg:w-1/2 h-max p-3'>
            <h3 className='font-bold mx-auto text-center w-full text-[1.6rem] text-black'>flexiblezel</h3>
            <p className='text-center leading-loose text-slate-500 text-[13px] lg:text-[12px] mt-2'>
              The Framework ValClass is a flexible CSS framework that adapts to various design needs, 
              offering an array of utilities and components that can be easily adjusted. 
              Whether you're building a simple layout or a complex web app, ValClass ensures 
              seamless responsiveness and design consistency across different screen sizes
            </p>
          </div>
        </div>

        <div className='w-[90vw] mx-auto h-[0.6px] bg-slate-300 mt-4'></div>

        <div className='relative w-[80vw] h-max mt-8 lg:mt-16 mb-4 lg:mb-11 mx-auto flex flex-col items-center justify-center'>
          <div className='w-full flex flex-col text-center items-center justify-center'>
              <h2 className='text-[1.6rem]'>Contributors</h2>
              <div className='w-full lg:flex items-center justify-center'>
                <a href='https://github.com/daberpro' target='__blank'>
                  <div className='w-full lg:w-max flex ite lg:mb-0 mb-5 items-center'>
                    <div className='w-[40px] lg:w-[54px] h-[40px] lg:h-[54px] p-1.5 bg-slate-100 rounded-full overflow-hidden' title='myFRA'>
                      <img src='/img/cont1.png' alt='contributor' className='rounded-full w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 lg:flex-0 w-max flex ml-3 items-center text-[12px] px-3 py-2 lg:py-1.5 rounded-full text-slate-500 bg-slate-100'>
                      <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                      Github
                    </div>
                  </div>
                </a>
                <a href='https://github.com/MYFRA' target='__blank'>
                  <div div className='w-full lg:w-max flex lg:mb-0 mb-5 items-center lg:mx-6'>
                    <div className='w-[40px] lg:w-[54px] h-[40px] lg:h-[54px] p-1.5 bg-blue-100 rounded-full overflow-hidden' title='myFRA'>
                      <img src='/img/cont3.png' alt='contributor' className='rounded-full w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 lg:flex-0 w-max flex ml-3 items-center text-[12px] px-3 py-2 lg:py-1.5 rounded-full text-white bg-blue-500'>
                      <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                      Github
                    </div>
                  </div>
                </a>
                <a href='https://github.com/MYFRA' target='__blank'>
                  <div div className='w-full lg:w-max flex lg:mb-0 mb-5 items-center'>
                    <div className='w-[40px] lg:w-[54px] h-[40px] lg:h-[54px] p-1.5 bg-slate-100 rounded-full overflow-hidden' title='myFRA'>
                      <img src='/img/cont2.jpg' alt='contributor' className='rounded-full w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 lg:flex-0 w-max flex ml-3 items-center text-[12px] px-3 py-2 lg:py-1.5 rounded-full text-slate-500 bg-slate-100'>
                      <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                      Github
                    </div>
                  </div>
                </a>
              </div>
              <p className='text-slate-500 w-full lg:w-[50%] mt-5 text-[13px] lg:text-[12px]'>
                Developers who have contributed to the development of the ValClass framework. We appreciate the help and effort that has been put in
              </p>
            </div>
        </div>

        <div className='w-[90vw] mx-auto h-[0.6px] bg-slate-300'></div>

        <footer className='w-full h-[48px] lg:text-[14px] text-[14px] flex items-center justify-center'>
          <small>#Framework css from Indonesia 2024</small>
        </footer>
      </main>
    </Layout>
  );
}
