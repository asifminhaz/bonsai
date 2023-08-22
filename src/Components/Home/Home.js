import React from 'react';
import "./home.css"
const Home = () => {
    return (
        <div>
           <div className='grid grid-cols-2 gap-4 mt-28 everything' >
            <div>
                <h1 className='text-6xl font-semi-bold mt-12 pl-16 '>Everything you need to run your business</h1>
                <p className='text-2xl pl-16 mt-12 mb-12'>Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</p>
                {/* <div class="relative ml-16">
        <input  type="text" placeholder="Enter your email" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-success absolute top-0 right-0 rounded-l-none">Start Free</button>
      </div> */}
      <div class="form-control ml-16">
  <div class="input-group">
    <input type="text" placeholder="Search…" class="input input-bordered" />
    <button class="btn btn-success">Start Free</button>
  </div>
</div>
            </div>
            <div>
                <img src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png'></img>
            </div>
           </div>
           <div>
            <h1 className='text-3xl text-center mt-32'>Make more, manage less</h1>
            <p className='text-2xl text-center mt-6'>Bonsai integrates and automates every step of your business so it</p>
            <p className='text-2xl text-center'>runs seamlessly - from proposal to tax season.e</p>
           </div>
           <div className='grid grid-cols-2 justify-center m-32 withoutbonsai'>
           {/* <div class="card w-96 ">
  <div class="card-body">
    <h2 class="card-title text-center ml-16">Without Bonsai</h2>
  
  </div>
  <figure><img src="http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg" alt="Shoes" /></figure>
</div>
<div class="card w-96 ">
  <div class="card-body">
    <h2 class="card-title ml-16">With Bonsai</h2>
   
  </div>
  <figure><img src="http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg" alt="Shoes" /></figure>
</div> */}
            <div>
                <h1 className='mb-12 text-2xl font-semi-bold ml-36 without'>Without Bonsai</h1>
                <img className='ml-1' src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg'></img>
            </div>
            <div>
            <h1 className='mb-12 text-2xl font-semi-bold ml-48 with'>With Bonsai</h1>
                <img src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg'></img>
            </div>

           </div>
           <div className='grid grid-cols-2 ml-28 winmore'>
            <div>
              <div className='flex'>
                <img src='http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a671191f2adc6411e428_proposals%20icon%20-%20green.svg'></img>
                <h1 className='text-2xl ml-5 '>Proposals</h1>
              </div>
              <div className='flex mt-8'>
                <img src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg'></img>
                <h1 className='text-2xl ml-5'>Contracts</h1>
              </div>
              <div className='flex mt-8'>
                <img className='w-5' src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg'></img>
                <h1 className='text-2xl ml-5'>Client CRM</h1>
              </div>
              <div className='flex mt-8'>
                <img src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg'></img>
                <h1 className='text-2xl ml-5'>Time Tracking</h1>
              </div>
              <div className='flex mt-8'>
                <img src='http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg'></img>
                <h1 className='text-2xl ml-5'>Invoices</h1>
              </div>
              <div className='flex mt-8'>
                <img src='http://web.archive.org/web/20221117021710im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg'></img>
                <h1 className='text-2xl ml-5'>Task Tracking</h1>
              </div>
              <div className='flex mt-8'>
                <img src='http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cee21feb676_icon%207.svg'></img>
                <h1 className='text-2xl ml-5'>Accounting & Taxes</h1>
              </div>
              <div className='flex mt-8'>
                <img src='http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e72bbe6e8264bb7bbfe4820_dark-forms.svg'></img>
                <h1 className='text-2xl ml-5'>Forms</h1>
              </div>
             
            
            </div>
<div>
    <h1 className='text-3xl font-semi-bold work'>Win More Work</h1>
    <h2 className='text-2xl'>With just a few clicks, you can craft </h2>
    <h2 className='text-2xl'>structured proposals with clear </h2>
    <h2 className='text-2xl'>estimates to close your deals faster. </h2>
    <a class="link link-success mt-5">EXPLORE PROPOSALS</a>
    <img src='http://web.archive.org/web/20221117021710im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png'></img>
</div>
           </div>
           <div className='text-center mt-20'>
            <h1 className='text-3xl'>Trusted by 500K+ self-employed workers</h1>
            <h1 className='text-3xl'>and small businesses</h1>
            <p className='text-2xl mt-5'>Whether you’re just getting started or your business is</p>
            <p className='text-2xl'>booming, Bonsai has you covered.</p>
           </div>
           <div className='grid grid-cols-2 gap-4 ml-48 mt-12 allglobal'> 
            <div className='ml-28 built'>
                <img src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg'></img>
                <h1 className='font-bold text-2xl mt-5'>Built for All Work Types</h1>
                <p>We proudly back people with wide-</p>
                <p>ranging businesses—from design and</p>
                <p>marketing to development, writing, and</p>
                <p>photography.</p>
            </div>
            <div>
                <img src='http://web.archive.org/web/20221117021712im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg'></img>
                <h1 className='font-bold text-2xl mt-5'>Built for Global Businesses</h1>
                <p>Bonsai has international coverage</p>
                <p>across the United States, Canada, UK,</p>
                <p>Australia and more, with 180 currencies</p>
                <p>supported.</p>
              
            </div>

           </div>
           <div>
            <h1 className='text-3xl m-28 text-center'>Don't just take it from us.</h1>
           </div>
           <div className='grid grid-cols-2 gap-12 m-28 urbinati'>
          <div className=' text-2xl bg-slate-100'>
          <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=740&t=st=1691169345~exp=1691169945~hmac=f683d12a782169bf5bbe2641fb86f238b90ace0ae7ac77e569be910d48f03fea" />
  </div>
</div>
            {/* <img className='w-48 ' src='https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=740&t=st=1691169345~exp=1691169945~hmac=f683d12a782169bf5bbe2641fb86f238b90ace0ae7ac77e569be910d48f03fea'></img> */}
            <h1 className='mt-5 '> "For all my Freelancer / Small Agency</h1>
            <h1>followers, I wish I’d discovered</h1>
            <h1>@bonsaiinc long ago - great templated</h1>
            <h1>contract"</h1>
            <h2 className='mt-5 font-bold'>David Mihm</h2>
            <h3 className='mb-12'>Founder of TidingsCo</h3>
          </div>
          <div className='text-2xl bg-slate-100'>
          <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.freepik.com/free-photo/young-smiling-man-bearded-businessman-pointing-with-two-finger-upward_171337-9572.jpg?w=740&t=st=1691169409~exp=1691170009~hmac=827c8ba6008f82781ff47ec3c059120fbf830049e52f7fb3dbfb3553ac1089a6" />
  </div>
</div>
            {/* <img className='w-48' src='https://img.freepik.com/free-photo/young-smiling-man-bearded-businessman-pointing-with-two-finger-upward_171337-9572.jpg?w=740&t=st=1691169409~exp=1691170009~hmac=827c8ba6008f82781ff47ec3c059120fbf830049e52f7fb3dbfb3553ac1089a6'></img> */}
            <h1 className='mt-5'>"@bonsaiinc is probably my all time</h1>
            <h1>favorite freelance tool. hands down. the</h1>
            <h1>team is super responsive and accessible</h1>
            <h1>when i have questions."</h1>
            <h2 className='mt-5 font-bold'>David Urbinati</h2>
            <h3 className='mb-12'>Motion design / animation</h3>
          </div>
           </div>
           <div className='flex  bg-teal-50'>
            <div className='ml-72 grow'>
<h1 className='text-5xl pt-20'>It’s your business.</h1>
<h1 className='text-5xl pb-20'>We’re here to help it grow.
</h1>
</div>
<div>
<button class="btn btn-success ml-48 mt-28">Success</button>
</div>
           </div>
        </div>
    );
};

export default Home;