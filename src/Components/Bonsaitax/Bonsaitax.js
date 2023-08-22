import React from 'react';
import "./bonsaitax.css"
const Bonsaitax = () => {
    return (
        <div>
           <div className='grid grid-cols-2 gap-4 mt-28 ml-20 software' >
            <div>
                <h1 className='text-5xl font-semi-bold mt-12 pl-16 '>Software for freelancers </h1>
                <h1 className='text-5xl font-semi-bold mt-3 pl-16 '> to track 1099 expenses &</h1>
                <h1 className='text-5xl font-semi-bold mt-3  pl-16 '>keep a peace of mind at</h1>
                <h1 className='text-5xl font-semi-bold mt-3  pl-16 '>tax time </h1>
                <p className='text-2xl pl-16 mt-12 mb-12'>Bonsai Tax is built exclusively for self-employed workers to track expenses, maximize tax write-offs, and estimate quarterly taxes</p>
                {/* <div class="relative ml-16">
        <input  type="text" placeholder="Enter your email" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-success absolute top-0 right-0 rounded-l-none">Start Free</button>
      </div> */}
      <div class="form-control ml-16">
  <div class="input-group">
    <input type="text" placeholder="Enter your email" class="input input-bordered" />
    <button class="btn btn-success">Start Free</button>
  </div>
</div>
            </div>
            <div>
                <img className='ml-12' src='http://web.archive.org/web/20221127205010im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc34a557bf5c29c83120f_graphic_accounting_taxes-min.png'></img>
            </div>
           </div>
           <div>
            <h1 className='text-3xl mt-28 text-center'>Save an average of $5,600 per year</h1>
            <h1 className='text-center text-3xl'>and avoid surprise bills at tax time</h1>
            <div className='grid grid-cols-3 gap-4 mt-8 ml-20 track'>
                <div className='p-12'>
                    
                    <img src='http://web.archive.org/web/20221127212843im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a586525c26505f2_ill_expense%20tracking.svg'></img>
                    <h1 className='text-2xl font-bold mt-5'>Track expenses</h1>
                    <p className='mt-3'>Auto-imports expense from bank</p>
                    <p className=''>and credit cards, then classify and</p>
                    <p className=''>track them on web and mobile</p>
                    <p className=''>apps</p>

                </div>
                <div className='p-12'>
                    <img src='http://web.archive.org/web/20221127212843im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a5865fb306505f4_loss.svg'></img>
                    <h1 className='text-2xl font-bold mt-5'>Identify write-offs</h1>
                    <p className='mt-3'> Bonsai Tax automatically identifies</p>
                    <p className=''>expenses that are deductible to</p>
                    <p className=''>save you extra money at tax time </p>
               

                </div>
                <div className='p-12'>
                    <img src='http://web.archive.org/web/20221127212843im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a58653a836505f3_ill_tax%20estimates.svg'></img>
                    <h1 className='text-2xl font-bold mt-5'>Estimate quarterly taxes</h1>
                    <p className='mt-3'>Never get caught by a surprise tax</p>
                    <p className=''>bill again. Bonsai Tax analyzes</p>
                    <p className=''>your spending to estimate taxes</p>
                    <p>due</p>

                </div>

            </div>
           </div>
           <div className='grid grid-cols-2 gap-4 mt-28 automate' >
            <div className='mt-28 '>
                <h1 className='text-3xl font-bold mt-12 pl-28 '>Automate Expenses</h1>
                
                <h1 className=' pl-28 mt-6  '>Connect your bank and credit / debit card accounts</h1>
                <p className='  pl-28'>to automatically import and organize tax receipts</p>
                {/* <div class="relative ml-16">
        <input  type="text" placeholder="Enter your email" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-success absolute top-0 right-0 rounded-l-none">Start Free</button>
      </div> */}
  
            </div>
            <div>
                <img className='expenses'  src='http://web.archive.org/web/20221127212857im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5f6a80826ae4c5892577860f_Import_and_track_expenses_png-p-800.png'></img>
            </div>
           </div>
           <div className='grid grid-cols-2 gap-4 mt-28 maximize' >
            <div>
                <img className='pl-28' src='http://web.archive.org/web/20221128192653im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5f6a80c061bad84919fa28e0_Automatically_identify_tax_write_offs_png-p-800.png'></img>
            </div>
            <div className='mt-24 '>
                <h1 className='text-3xl font-bold mt-12 pl-28 '>Maximize Write-Offs</h1>
                
              
                <p className='  pl-28 mt-5'>Bonsai Tax is designed to identify and categorize</p>
                <p className='  pl-28'>receipts for taxes. So, our app can help you</p>
                <p className='  pl-28'>maximize your tax savings at the end of the year</p>
             
                {/* <div class="relative ml-16">
        <input  type="text" placeholder="Enter your email" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-success absolute top-0 right-0 rounded-l-none">Start Free</button>
      </div> */}
  
            </div>
           </div>
           <div className='grid grid-cols-2 gap-4 mt-28 estimate' >
            <div className='mt-28 '>
                <h1 className='text-3xl font-bold mt-12 pl-28 '>Estimate Quarterly Tax</h1>
                
               
                <p className='  pl-28 mt-5'>Our tax software for freelancers uses your tracked</p>
                <p className='  pl-28 '>income, expenses, and deductions to give you live</p>
                <p className='  pl-28 '>estimates of the taxes you will owe</p>
                {/* <div class="relative ml-16">
        <input  type="text" placeholder="Enter your email" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-success absolute top-0 right-0 rounded-l-none">Start Free</button>
      </div> */}
  
            </div>
            <div>
                <h1 className='text-3xl font-bold mt-12 pl-28 '>Maximize Write-Offs</h1>
                <img className='write'  src='http://web.archive.org/web/20221128192653im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5f6a80ffd177fe0b36e5b092_Estimate_quarterly_taxes_png-p-800.png'></img>
            </div>
           </div>
           <div>
            <h1 className='text-3xl text-center font-semi-bold'>Trusted by 500K+ self-employed workers </h1>
            <h1 className='text-3xl text-center font-semi-bold'>and small businesses </h1>
            <h1 className='text-2xl text-center mt-3'>Whether you’re just getting started or your business is </h1>
            <h1 className='text-2xl text-center '>booming, Bonsai has you covered. </h1>
           </div>
           <div className='grid grid-cols-2 ml-72 mt-12 allwork '>
            <div className='types'>
                <img className='' src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg'></img>
                <h1 className='text-2xl font-bold mt-3 '>Built for All Work Types</h1>
                <p className='mt-3'>We proudly back people with wide-</p>
                <p>ranging businesses—from design and</p>
                <p>marketing to development, writing, and</p>
                <p>photography.</p>
            </div>
            <div className='forglobal'>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg'></img>
                <h1 className='text-2xl font-bold mt-3'>Built for Global Businesses</h1>
                <p className='MT-3'>Bonsai has international coverage</p>
                <p>across the United States, Canada, UK,</p>
                <p>Australia and more, with 180 currencies</p>
                <p>supported.</p>
            </div>

           </div>
           <div className='grid grid-cols-2 m-28 bg-teal-50 p-20 startsaving' >
        <div className='start'>
<h1 className='text-4xl font-semi-bold'>Start saving on taxes and</h1>
<h1 className='text-4xl font-semi-bold'>get financial peace of mind.</h1>

        </div>
        <div class="card-actions justify-end">
      <button class="btn btn-success mt-5">Start Free</button>
    </div>
      </div>
      <div>
        <h1 className='text-center font-semi-bold text-3xl'>Keep Exploring Bonsai’s Features</h1>
      </div>
      <div className='grid grid-cols-2 ml-28 mt-20 mb-16 invoices'>
        <div className='flex'>
            <img src='http://web.archive.org/web/20221127205158im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a5865afca6505f5_Explore%20invoices.svg'></img>
            <div className='ml-5'>
            <h1 className='text-2xl font-bold '>Invoices</h1>
            <p className='mt-3'>Get paid on time smart invoicing with</p>
            <p>automatic reminders, read-receipts and a variety</p>
            <p>of payment options.</p>
            </div>
        </div>
        <div className='flex'>
            <img src='http://web.archive.org/web/20221127205149im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde8fb41ccd3277837201_ill_explore%20contracts.svg'></img>
            <div className='ml-5'>
            <h1 className='text-2xl font-bold'>Contracts</h1>
            <p className='mt-3'>Protect your buisness with templated work
            </p>
            <p>contracts vetted by contract attorneys and </p>
            <p> thousands of freelancers</p>
            </div>
        </div>

      </div>
        </div>
    );
};

export default Bonsaitax;