import React from 'react';
import './Bonsaicash.css'
const Bonsaicash = () => {
    // let imageStyle = {
    //     height: "950px",
    //     width: "1400px",
    //     backgroundImage:
    //     'url("https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    //     backgroundSize: "contain",
    //     backgroundRepeat: "no-repeat",
    //     color: "white", 
    //  };
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage:
        'url("https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',}}>
  <div class=" bg-opacity- 80"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md mb-28">
    <h1 className='text-3xl text-center  font-extrabold text-black'>One account</h1>
           <h1 className='text-3xl text-center  font-extrabold text-black'>for everything business</h1>
           <h1 className=' mt-3 text-black text-center'>Manage your finances, save on taxes, and get paid faster.</h1>
           <h1 className=' text-black text-center'>All with no hidden fees and no minimums.</h1>
      <button class="btn btn-accent mt-5">Sign up</button>
    </div>
  </div>
</div>
 {/* <div >
         
        
         <div class = "image" style = {imageStyle}>
            <div className=''>
           <h1 className='text-3xl text-center  font-bold text-black'>One account</h1>
           <h1 className='text-3xl text-center  font-bold text-black'>for everything business</h1>
           <h1 className='text-2xl mt-3 text-black text-center'>Manage your finances, save on taxes, and get paid faster.</h1>
           <h1 className='text-2xl text-black text-center'>All with no hidden fees and no minimums.</h1>
          < div class="card-actions justify-center mt-5">
      <button class="btn btn-accent">Sign up</button>
    </div>
          
           </div>
         </div>
      </div> */}
      <div>
        <h1 className='text-center font-bold text-4xl mt-12'>Pay for your business</h1>
        <h1 className='text-center font-bold text-4xl'>expenses any way, anywhere</h1>
      </div>
      <div className='grid grid-cols-2 mt-16 ml-28 physical'>
        <div className='mt-5'>
            <h1 className='text-4xl font-extrabold'>Physical Card
</h1>
            <p className='mt-5 text-2xl'>Get your new Bonsai card in your pocket in just</p>
            <p className='text-2xl'>just a few days.</p>
       
        
            <h1 className='text-4xl font-extrabold mt-16'>Virtual Card</h1>
            <p className='mt-5 text-2xl'>Generate your virtual card for your online</p>
            <p className='text-2xl'>subscriptions and expenses.</p>
    
       
            <h1 className='text-4xl font-extrabold mt-16'>Apple Pay</h1>
            <p className='mt-5 text-2xl'>Add your new card to your Apple Wallet for</p>
            <p className='text-2xl '>easy in-store and online payments.</p>
        </div>
        <div>
            <img className='ml-16' src='http://web.archive.org/web/20221127212952im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/623c7f4e91dd295d3d660b0d_Illustration%20hand.png'></img>
        </div>

      </div>
      <div className='bg-emerald-800	'>
        <div className='grid grid-cols-2 gap-4 raewyn'>
            <div className='m-20 mr-16'>
                <img src='http://web.archive.org/web/20221127212952im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/623899299f1d952603981dd0_cta-photo.png'></img>
            </div>
            <div className='mt-20'>
                <p className='text-white'>Raewyn Sangari, Virtual Assistant in Los Angeles, California</p>
                <h1 className='font-extrabold text-white text-4xl mt-3'>“With Bonsai Cash, I put my</h1>
                <h1 className='font-extrabold text-white text-4xl'>business finances on one</h1>
                <h1 className='font-extrabold text-white text-4xl'>card, and in one location. My</h1>
                <h1 className='font-extrabold text-white text-4xl'>expenses are now much</h1>
                <h1 className='font-extrabold text-white text-4xl'>easier to track.”</h1>
                <button class="btn btn-ghost bg-white mt-8">Watch Now</button>


            </div>

        </div>
      </div>
      <div className='grid grid-cols-2 mt-20 ml-20 doless'>
<div>
    <img src='http://web.archive.org/web/20221127212952im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6238c1a8fecf4d1b7856e7c7_Group%20218%20(1)%20(1).png'></img>
</div>
<div className='mt-48 ml-20 accounting '>
    <h1 className='text-4xl font-extrabold'>Do less accounting work</h1>
    <h1 className='text-4xl font-extrabold'>thanks to easy expense</h1>
    <h1 className='text-4xl font-extrabold'>management</h1>
    <p className='text-xl mt-5'>Expenses from your Bonsai card are</p>
    <p className='text-xl'>automatically tracked. All you need to do is</p>
    <p className='text-xl'>upload receipts from the app. Plus, tax write-</p>
    <p className='text-xl'>offs are already calculated.</p>
    <button class="btn btn-success mt-5">Sign up</button>

</div>
      </div>
      <div className='grid grid-cols-2 m-28 receive'>
<div className='mt-12'>
    <h1 className='text-3xl font-extrabold'>Receive your</h1>
    <h1 className='text-3xl font-extrabold'>money faster</h1>
    <p className='text-xl mt-5'>Collect your invoice payouts in your Bonsai</p>
    <p className='text-xl '>Cash account in just seconds.</p>
    <button class="btn btn-success mt-5">Sign up</button>
</div>
<div>
    <img className='money' src='http://web.archive.org/web/20221127212953im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6239b993126332415993148e_Group%20219-p-800.png'></img>
</div>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center'>Save ahead of tax season</h1>
        <p className='text-center mt-5'>Automatically set aside a portion of your</p>
        <p className='text-center'>earnings in custom envelopes for taxes,</p>
        <p className='text-center'>holidays or savings.</p>
        < div class="card-actions justify-center mt-5">
      <button class="btn btn-accent">Try Bonsai Cash</button>
    </div>
      </div>
        </div>
    );
};

export default Bonsaicash;