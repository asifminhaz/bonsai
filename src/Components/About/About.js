import React from 'react';
import "./about.css"
const About = () => {
    return (
        <div>
           <div  className='bg-slate-50'>
            <div className='grid grid-cols-2  p-28 about'>
                <div className='ml-12'>
                    <h1 className='text-3xl font-bold'>Bonsai is building the</h1>
                    <h1 className='text-3xl font-bold'>global operating</h1>
                    <h1 className='text-3xl font-bold'>system for freelance</h1>
                    <h1 className='text-3xl font-bold'>work.</h1>
                   <p className='mt-5'>The way the world works is changing.</p>
                   <p className='mt-5'>Companies want on-demand talent rather than full</p>
                   <p className=''>time employees. Workers want flexible and</p>
                   <p className=''>independent careers. This is one of the largest socio-</p>
                   <p className=''>economic shifts since the Industrial Revolution</p>
                   <p className='mt-5'>While the nature of work is changing rapidly, the</p>
                   <p className=''>tools and processes supporting it are stuck in the</p>
                   <p className=''>twentieth (or even nineteenth!) century.
</p>
                   <p className='mt-5'>Bonsai is dedicated to helping companies and</p>
                   <p className=''>independent talent work better together. We're</p>
                   <p className=''>building solutions to support a future where work is</p>
                   <p className=''>flexible and globally distributed.</p>

                </div>
                <div>
                    <h1 className='text-3xl '>Contact Us</h1>
                    <p className='mt-3'>Want to get in touch?</p>
                    <p className='mt-3 text-emerald-400'>Chat with us

or email us
</p>
                </div>

            </div>
           </div>
           <div>
            <h1 className='text-4xl font-bold text-center mt-12 '>Backed by a few of the world’s top investors</h1>
           </div>
           <div className='grid grid-cols-3 ml-40 mt-12 gap-4 mb-12 backed '>
            <div className='ml-12'>
                <img  className='w-48 combinator' src='http://web.archive.org/web/20221127212934im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/58900cc7262fde01091aa620_yc-d38bf0d27e745439cea5cf2a4df46d4f.png'></img>
            </div>
            <div>
                <img className='w-32 matrix' src='http://web.archive.org/web/20221127212934im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/58900ce338ef3ebe08f460d5_matrix-060a345831c09666fb71f16e296f19fd.png'></img>
            </div>
            <div>
                <img className='w-32 index' src='http://web.archive.org/web/20221127212934im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/58900cec38ef3ebe08f460db_icon-index-ventures-black-1ff539dd0d08ccbbfe9b6c18a5811804.png'></img>
            </div>
           </div>
        </div>
    );
};

export default About;