import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { AiMagicIcon, Blockchain04Icon, Cancel01Icon, CommandIcon, Copy01Icon, EthereumRectangleIcon, LaptopProgrammingIcon } from 'hugeicons-react';
import { useState } from 'react';
import '../css/custom.css';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const style0 = {
    maxWidth: '100%',
    minWidth: '200px',
    fontSize: '14px',
    borderRadius: '0.375rem', // equivalent to rounded-md
    display: 'flex',
    height: '45px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '0.75rem', // equivalent to px-3
    paddingRight: '0.75rem', // equivalent to px-3
    paddingTop: '0.5rem', // equivalent to lg:py-2 (applies for larger screens, can be adjusted based on breakpoints)
    paddingBottom: '0.5rem', // equivalent to lg:py-2
    backgroundColor: 'white', // equivalent to bg-slate-100 (light gray color)
    marginBottom: '0',
    color: '#475569', // equivalent to text-slate-600 (dark gray color)
    cursor: 'pointer',
    border: '1px solid rgb(203 213 225)',
      '@media (min-width: 1024px)': { // For larger screens (e.g., lg)
        height: 'auto',
        backgroundColor: '#e2e8f0', // equivalent to lg:bg-slate-200 (lighter gray)
        paddingTop: '0.5rem', // equivalent to lg:py-2
        paddingBottom: '0.5rem', // equivalent to lg:py-2
        minWidth: 'auto', // min-width is removed on larger screens
      },
  }

  const style = {
    borderLeft: '1px solid gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
    filter: isHovered ? `brightness('96%')` : `brightness('100%')`,
    transform: isActive ? `scale(0.97)` : `scale(1)`
  };
  
  const style2 = {
    position: 'relative',       
    fontSize: '14px',          
    borderRadius: '0.375rem',     
    display: 'flex',             
    height: 'max-content',       
    alignItems: 'center',        
    justifyContent: 'center',    
    paddingLeft: '0.75rem',      
    border: '1px solid rgb(203 213 225)',
    paddingRight: '0.75rem',     
    paddingTop: '0.6rem',        
    paddingBottom: '0.6rem',      
    backgroundColor: 'white',    
    color: 'rgb(37, 99, 235)',  
    cursor: 'pointer',
    filter: isHovered2 ? `brightness('96%')` : `brightness('100%')`,
    transform: isActive2 ? `scale(0.97)` : `scale(1)`
  };

  return (
    <Layout
      description="Description will go into a meta tag in <head />"
      noFooter
    >
      <main className='ooverflow-x-hidden'>


        <div id='asteroid1b' className='lg:inline hidden'></div>
        <div id='asteroid2b' className='lg:inline hidden'></div>
        <div id='asteroid1b2' className='lg:inline hidden'></div>
        <div id='asteroid3b' className='lg:inline hidden'></div>
        <div id='asteroid4b' className='lg:inline hidden'></div>
        <div id='asteroid5b' className='lg:inline hidden'></div>

        <div className='relative overflow-x-hidden w-full h-full flex justify-center'>
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
          <img src='/img/gr.svg' alt='gradient' className='gr3' />

          <img src='/img/gr4.svg' alt='gradient1' className='gr1' />
          <img src='/img/gr2.svg' alt='gradient2' className='gr2' />

          <div className='relative w-full mt-0 h-max lg:h-[80vh] lg:text-center mx-auto flex flex-col justify-center lg:items-center'>
            <div className='lg:rounded-full flex bg-blue-100 lg:text-[16px] text-[13px] text-blue-400 h-max w-full lg:w-max lg:px-3 px-5 py-3 lg:py-1 mb-6 lg:mb-2 items-center lg:justify-center'>
              <AiMagicIcon className='mr-1' />
              Version 1.0.0 - new released 
              <AiMagicIcon className='ml-1' />
            </div>
            <h1 className='text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] lg:w-[80vw] lg:text-center'>
              Build modern website easily <br /> no CSS required.
            </h1>
            <p className='text-slate-500 lg:ml-0 ml-5 lg:text-[16px] text-[14px] w-[90%] lg:w-[50%]'>A utility-first CSS framework packed with classes like v-pt-4, <span className='bg-transparent lg:bg-blue-400 lg:text-white rounded-full h-max pb-[2px] text-[14px] lg:px-2'>v-d-flex</span>, text-center and rotate-90 that can be composed to build any design, directly in your code.</p>
            <Link to={'/docs/getStarted'}>
              <div className='relative text-center lg:w-max w-[60vw] no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-14 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-blue-500 text-white rounded-md lg:rounded-full cursor-pointer'>
                Get started <LaptopProgrammingIcon className='ml-1 w-4 h-4 relative top-[1.5px]' />
              </div>
            </Link>

            <div className='text-[14px] mt-6 px-5 lg:px-0 w-[100vw] lg:w-max flex items-center mx-auto'>
              <div className='w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-red-500 bg-red-100'>
                <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                Utilities
              </div>
              <div className='w-full lg:w-[30%] lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-purple-500 bg-purple-100'>
                <Blockchain04Icon className='w-4 h-4 relative mr-2' />
                Components
              </div>
              <div className='w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-green-500 bg-green-100'>
                <CommandIcon className='w-4 h-4 relative mr-2' />
                Features
              </div>
            </div>
          </div>
        </div>

        <div className='w-[90vw] mt-0 mx-auto h-[0.6px] lg:flex hidden bg-slate-300 mb-4'></div>
        
        <div className='lg:flex mx-auto overflow-x-hidden w-full lg:w-[90vw] lg:mt-0 mt-4'>
          <div className='w-full lg:w-1/2 h-max p-5 lg:p-3'>
            <h3 className='font-bold mx-auto lg:text-center w-full text-[1.6rem] text-black'>Customizable</h3>
            <p className='lg:text-center leading-loose text-slate-500 text-[14px] lg:text-[13px] mt-2'>
              The ValClass is a highly customizable CSS framework that allows you to easily adjust colors, 
              typography, and components to fit your needs. With simple configuration, you can tweak 
              styles and add custom utilities without altering the core structure. Whether you’re 
              building a small website or a complex web application
            </p>
          </div>
          <div className='w-full lg:w-[0.8px] bg-slate-200 h-[1px] lg:h-[200px] lg:mb-0 mb-4 lg:mx-3'></div>
          <div className='w-full lg:w-1/2 h-max lg:p-3 p-5'>
            <h3 className='font-bold mx-auto lg:text-center w-full text-[1.6rem] text-black'>flexiblezel</h3>
            <p className='lg:text-center leading-loose text-slate-500 text-[14px] lg:text-[13px] mt-2'>
              The Framework ValClass is a flexible CSS framework that adapts to various design needs, 
              offering an array of utilities and components that can be easily adjusted. 
              Whether you're building a simple layout or a complex web app, ValClass ensures 
              seamless responsiveness and design consistency across different screen sizes
            </p>
          </div>
        </div>

        <div className='w-[90vw] mx-auto h-[0.6px] bg-slate-300 lg:mt-4'></div>

        <div className='relative overflow-x-hidden w-full px-5 flex items-center lg:justify-center my-10 lg:my-14'>
          <div className='w-[45%] hidden lg:flex lg:justify-end'>
            <img src='/img/logo.png' alt='logo' className='w-[33%] lg:w-[18.5%]' />
          </div>
          <Cancel01Icon className='relative mx-4 lg:flex hidden lg:mx-16 text-slate-400' />
          <div className='w-[45%] hidden lg:flex lg:justify-start'>
            <img src='/img/cont3.png' alt='logo' className='w-[33%] lg:w-[22%]' />
          </div>

          <div className='w-max flex lg:hidden items-center'>
            <img src='/img/logo.png' alt='logo' className='w-[13%]' />
            <Cancel01Icon className='relative flex lg:hidden mx-4 lg:mx-16 text-slate-400' />
            <img src='/img/cont3.png' alt='logo' className='w-[15%]' />
          </div>
        </div>

        <div className='w-full overflow-x-hidden lg:w-max mx-auto flex items-center lg:px-0 px-5 mt-10 '>
          <div 
              style={style0}>
              npm install valclass-ui
              <div 
                style={style}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
              >
                <Copy01Icon className='w-5 h-5' />
              </div>
          </div>
          <div className='mx-1 lg:mx-3'></div>
          <div 
              style={style2} 
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onMouseDown={() => setIsActive2(true)}
              onMouseUp={() => setIsActive2(false)}
              className='relative w-max lg:w-[200px] lg:ml-0 ml-3 text-[14px] rounded-md flex h-[45px] lg:h-max items-center justify-center px-3 lg:py-2 bg-white text-blue-500 cursor-pointer'>
              Learn Now
          </div>
        </div>

        <p className='lg:text-center mt-6 leading-loose text-slate-500 lg:w-full w-[80%] lg:ml-0 ml-5 lg:mx-auto text-[14px] lg:text-[13px]'>
          Framework V can be integrated with your ReactJS project. Try it now to simplify and enhance your web styling!
        </p>

        <div className='w-[90vw] mx-auto h-[0.6px] bg-slate-300 lg:mt-14'></div>

        <div className='relative overflow-x-hidden w-full lg:px-0 px-5 lg:w-[80vw] h-max mt-8 lg:mt-16 mb-4 lg:mb-11 mx-auto flex flex-col items-center justify-center'>
          <div className='w-full flex flex-col lg:text-center lg:items-center justify-center'>
              <h2 className='text-[1.6rem]'>Contributors</h2>
              <div className='w-full lg:flex items-center justify-center'>
                <a href='https://github.com/daberpro' target='__blank'>
                  <div className='w-full lg:w-max flex lg:mb-0 mb-5 items-center'>
                    <div className='w-[45px] lg:w-[54px] h-[45px] lg:h-[54px] p-1.5 bg-slate-100 rounded-md lg:rounded-full overflow-hidden' title='myFRA'>
                      <img src='/img/cont1.png' alt='contributor' className='rounded-full w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 lg:flex-0 w-max flex lg:h-max h-[45px] ml-3 items-center text-[12px] px-3 py-2 lg:py-1.5 rounded-md lg:rounded-full text-slate-500 bg-slate-100'>
                      <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                      Github
                    </div>
                  </div>
                </a>
                <a href='https://github.com/MYFRA' target='__blank'>
                  <div div className='w-full lg:w-max flex lg:mb-0 mb-5 items-center lg:mx-6'>
                    <div className='w-[45px] lg:w-[54px] h-[45px] lg:h-[54px] p-1.5 bg-blue-100 rounded-md lg:rounded-full overflow-hidden' title='myFRA'>
                      <img src='/img/cont3.png' alt='contributor' className='rounded-full w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 lg:flex-0 w-max flex lg:h-max h-[45px] ml-3 items-center text-[12px] px-3 py-2 lg:py-1.5 rounded-md lg:rounded-full text-white bg-blue-500'>
                      <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                      Github
                    </div>
                  </div>
                </a>
                <a href='https://github.com/MYFRA' target='__blank'>
                  <div div className='w-full lg:w-max flex lg:mb-0 mb-5 items-center'>
                    <div className='w-[45px] lg:w-[54px] h-[45px] lg:h-[54px] p-1.5 bg-slate-100 rounded-md lg:rounded-full overflow-hidden' title='myFRA'>
                      <img src='/img/cont2.jpg' alt='contributor' className='rounded-full w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 lg:flex-0 w-max flex lg:h-max h-[45px] ml-3 items-center text-[12px] px-3 py-2 lg:py-1.5 rounded-md lg:rounded-full text-slate-500 bg-slate-100'>
                      <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                      Github
                    </div>
                  </div>
                </a>
              </div>
              <p className='text-slate-500 leading-loose w-full lg:w-[50%] mt-6 text-[14px] lg:text-[13px]'>
                Developers who have contributed to the development of the ValClass framework. We appreciate the help and effort that has been put in
              </p>
            </div>
        </div>

        <div className='w-[90vw] mx-auto h-[0.6px] bg-slate-300'></div>

        <footer className='w-full overflow-x-hidden h-[48px] text-slate-500 lg:text-[15px] text-[16px] flex items-center px-5 lg:justify-center'>
          <small>#Framework css from Indonesia 2024</small>
        </footer>
      </main>
    </Layout>
  );
}
