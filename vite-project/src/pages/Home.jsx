/* eslint-disable no-unused-vars */
import React from 'react';
import heroImg from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/doctor-img03.png'

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoicon from '../assets/images/video-icon.png'
import avatar from '../assets/images/avatar-icon.png'
import faqImg from '.././assets/images/faq-img.png'

import FaqList from '../components/faq/faqList';

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About';
import ServiceLister from '../components/Service/ServiceLister';
import DoctorList from '../components/Doctors/DoctorList';
import Testimonial from '../components/Testimonial/Testimonial';
const Home = () => {
  return (
    <>
      {/* ===========hero section=========== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ===========hero content=========== */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[36px] md:leading-[46px]'>
                  Ajudamos os pacientes a ter uma vida saudável e mais longa                </h1>
                <p className='para__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius, optio obcaecati voluptatem nemo debitis accusantium praesentium provident voluptatibus, quasi quas accusamus aspernatur recusandae? Nam fuga sequi asperiores aliquid autem.
                </p>
                <button className='btn text-blue-500'>Request an appoiment</button>
              </div>
              {/* ===========hero counter=========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Anos de experiência</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Nota em pesquisas mundial</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Pacientes satisfeitos</p>
                </div>

              </div>
            </div>
            {/* ===========hero content=========== */}


            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className="w-full" src={heroImg} alt="" />
              </div>

              <div className="mt-[0px]">
                <img className="w-full mb-[20px]" src={heroImg02} />
                <img className="w-full" src={heroImg03} alt="" />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===========hero section end=========== */}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Oferecendo os melhores serviços médicos
            </h2>
            <p className='text__para text-center'>
              Cuidado de classe mundial para todos. Nosso sistema de saúde oferece cuidados de saúde especializados incomparáveis            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Encontre um médico
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Cuidado de classe mundial para todos. nosso sistema de saúde oferece cuidados de saúde especializados e incomparáveis. do laboratório para a clínica              </p>

                <Link to="/doctors" className="w-[44px] rounded-full border border-solid border-[#181E1E] 
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-non" >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>

            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Encontre um local
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Encontre facilmente o caminho para nossas clínicas. Estamos sempre próximos a você, prontos para oferecer cuidados de saúde de qualidade. Use nosso aplicativo ou visite nosso site para localizar a clínica mais próxima              </p>

                <Link to="/doctors" className="w-[44px] rounded-full border border-solid border-[#181E1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-non" >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>

            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Agendamento de consultas
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Agende sua consulta com praticidade e segurança! Nossa equipe está pronta para cuidar da sua saúde. Entre em contato e marque seu horário hoje mesmo.              </p>

                <Link to="/doctors" className="w-[44px] rounded-full border border-solid border-[#181E1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-non" >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>



      <About />
      {/* ===========services section=========== */}

      <section>
        <div className='container'>
          <div className='xl:w-[470] mx-auto'>
            <h2 className='heading text-center'>Our Medical Service</h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health system offers unmatched
            </p>
          </div>
          <ServiceLister />


        </div>
      </section>
      {/* ===========services section end=========== */}


      {/* ===========feature section end=========== */}
      <section>
        <div className='container'>
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ===========feature content=========== */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Get virtual treatment <br /> Anytime
              </h2>

              <ul className='pl-4'>
                <li className="text__para"
                >1. schedule the appointment directly
                </li>
                <li className='text__para'>
                  2. Sarch for your physician here, and contact their office
                </li>
                <li className="text__para">
                  3. view our physcins who are accepting new patientes, use the online schduling tool to select and appointment time
                </li>
              </ul>
              <Link to="/">
                <button className='btn text-blue-500'>
                  Learn more
                </button>
              </Link>
            </div>
            {/* ===========feature img=========== */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4' alt="" />

              <div className='w-[150] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue,24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      10:00 AM
                    </p>
                    <div>
                      <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                        <img src={videoicon} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 
                text-irisBlueColor font-[500] mt-2 lg:mt-4
                rounded-full'>
                  Consultation
                </div>
                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatar} />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Wayne Collins</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========feature section end=========== */}


      {/* ===========our great doctors=========== */}
      <section>
        <div className='container'>
          <div className='xl:w-[470] mx-auto'>
            <h2 className='heading text-center'>Our Great doctors</h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health system offers unmatched
            </p>
          </div>

          <DoctorList />

        </div>
      </section>

      {/* =========== faq section =========== */}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* =========== testimonial =========== */}
      <section>
        <div className="container">
        <div className='xl:w-[470] mx-auto'>
          <h2 className='heading text-center'>What our patient</h2>
          <p className='text__para text-center'>
            World-class care for everyone. Our health system offers unmatched
          </p>
          </div>
          <Testimonial/>
        </div>
      </section>

    </>
  );
};

export default Home;
