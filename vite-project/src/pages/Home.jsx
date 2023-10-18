/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
  return (
    <>
      {/* ===========hero section=========== */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ===========hero content=========== */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[36px] md:leading-[46px]'>
                  We help patients live a healthy, longer life
                </h1>
                <p className='para__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius, optio obcaecati voluptatem nemo debitis accusantium praesentium provident voluptatibus, quasi quas accusamus aspernatur recusandae? Nam fuga sequi asperiores aliquid autem.
                </p>
                <button className='btn'>Request an appoiment</button>
              </div>
                          {/* ===========hero counter=========== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

                </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
