/* eslint-disable no-unused-vars */
import React from 'react';
import heroImg from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/doctor-img03.png'

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'

import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About';
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
                <button className='btn'>Request an appoiment</button>
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

            <Link to="/doctors" className="w-[44px] rounded-full border border-solid border-[#181E1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-non" >
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
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
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
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
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
                                            {/* ===========hero content=========== */}
                                            


                                            {/* ===========hero content end=========== */}

                                            

    <About/>
    </>
  );
};

export default Home;
