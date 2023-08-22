import React from 'react';
import "./bonsaiwork.css"
const Bonsaiwork = () => {
    return (
        <div>
                 <div className='grid grid-cols-2 gap-4 mt-28 ml-16 manage' >
            <div className='mt-12'>
                <h1 className='text-5xl font-semi-bold mt-12 pl-16 '>Manage your own digital </h1>
                <h1 className='text-5xl font-semi-bold mt-3 pl-16 '> workspace and client list.</h1>
               
                <p className='text-xl pl-16 mt-8'>From prospect to project and contract to payment,</p>
                <p className='text-xl pl-16  mb-12'>you can now manage everything all in one place.</p>
                {/* <div class="relative ml-16">
        <input  type="text" placeholder="Enter your email"  lass="input input-bordered w-full pr-16" /> 
        <button class="btn btn-success absolute top-0 right-0 rounded-l-none">Start Free</button>
      </div> */}
      <div class="form-control ml-16">
  <div class="input-group">
    <input type="text" placeholder="Enter your email" class="input input-bordered" />
    <button class="btn btn-success">Start Free</button>
  </div>
</div>
            </div>
            <div >
                <img className='ml-20 redesign' src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60df0a746802914bd7b5687d_bonsai-crm-hero-p-800.png'></img>
            </div>
           </div>
           <div>
            <h1 className='text-center text-3xl mt-20'>Save hours running your business by using powerful tools to keep</h1>
            <h1 className='text-center text-3xl'>it all organized.</h1>
           </div>
           <div className='grid grid-cols-3 gap-4  ml-36 mt-12 management'>
            <div>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdf77579a531504c194b7_ill_Client%20Management.svg'></img>
                <h1 className='font-extrabold text-2xl mt-5'>Client Management</h1>
                <p className='mt-3'>Add leads, existing clients and</p>
                <p>internal notes to keep track of all</p>
                <p>your contacts.</p>
            </div>
            <div>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdf77579a53a402c194b9_ill_Project%20Organization.svg'></img>
                <h1 className='font-extrabold text-2xl mt-5'>Project Organization</h1>
                <p className='mt-3'>Fill your projects with all the</p>
                <p>documents, payments, tasks and</p>
                <p>timesheets you need</p>
            </div>
            <div>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdf77579a530e4bc194b8_ill_Free%20Collaboration.svg'></img>
                <h1 className='font-extrabold text-2xl mt-5'>Free Collaboration</h1>
                <p className='mt-3'>Invite other contractors to your</p>
                <p>projects to manage tasks and</p>
                <p>track time together.</p>
            </div>
           </div>
           <div className='grid grid-cols-2 gap-4 m-20 clientlist'>
            <div className='mt-28 ml-12'>
                <h1 className='text-3xl font-extrabold'>Build Your Client List</h1>
                <p className='mt-5'>Quit losing clients in your inbox and have a reliable</p>
                <p>system to track them with your ongoing work</p>
                <p>together. Add them with all your notes, contacts and</p>
                <p>tags.</p>
            </div>
            <div>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc22bc86bcc60bde80f12_graphic_add%20new%20client-min.png'></img>
            </div>

           </div>
           <div className='grid grid-cols-2 gap-4 m-20 keepit'>
            <div className='ml-8'>
                <img className='together' src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc25da8d8f341caf4193d_graphic_project%20details-min.png'></img>
            </div>
            <div className='mt-28 ml-16'> 
            <h1 className='text-3xl font-extrabold'>Keep It Together</h1>
                <p className='mt-5'>Organize all the todos, files and documents for your</p>
                <p>projects. Your clients even get their own project view</p>
                <p>to manage payments and contracts you’ve sent.</p>
               
            </div>

           </div>
           <div className='grid grid-cols-2 gap-4 m-20 workwith'>
            <div className='mt-28 ml-12'>
                <h1 className='text-3xl font-extrabold'>Work With Others</h1>
                <p className='mt-5'>Whether they’re a subcontractor or a co-worker, you</p>
                <p>can freely collaborate on projects with other users to</p>
                <p>assign them tasks and track time together.</p>
                
            </div>
            <div>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdf77579a531d04c194c0_work%20with%20others-min.png'></img>
            </div>

           </div>
           <div>
            <h1 className='text-3xl text-center font-bold'>Trusted by 500K+ self-employed workers </h1>
            <h1 className='text-3xl text-center font-bold'>and small businesses </h1>
            <h1 className='text-2xl text-center mt-3'>Whether you’re just getting started or your business is </h1>
            <h1 className='text-2xl text-center '>booming, Bonsai has you covered. </h1>
           </div>
           <div className='grid grid-cols-2 ml-72 mt-12 allworktypes'>
            <div className='builtfor'>
                <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg'></img>
                <h1 className='text-2xl font-bold mt-3 '>Built for All Work Types</h1>
                <p className='mt-3'>We proudly back people with wide-</p>
                <p>ranging businesses—from design and</p>
                <p>marketing to development, writing, and</p>
                <p>photography.</p>
            </div>
            <div>
                <img className='worktypes' src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg'></img>
                <h1 className='text-2xl font-bold mt-3'>Built for Global Businesses</h1>
                <p className='MT-3'>Bonsai has international coverage</p>
                <p>across the United States, Canada, UK,</p>
                <p>Australia and more, with 180 currencies</p>
                <p>supported.</p>
            </div>

           </div>
           <div className='grid grid-cols-2 m-28 bg-teal-50 p-20 taxes'  >
        <div>
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
      <div className='grid grid-cols-2 ml-28 m-28 mb-16 tracking'>
        <div className='flex time'>
            <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdf77579a535f01c194ba_ill_time%20tracking.svg'></img>
            <div className='ml-5 p-5'>
            <h1 className='text-2xl font-bold '>Time Tracking</h1>
            <p className='mt-3'>Keep track of the hours everyday</p>
            <p>on every protect and on every device.Add </p>
            <p>notes and the task completed with each new entry.</p>
            <p></p>
            </div>
        </div>
        <div className='flex ml-8'>
            <img src='http://web.archive.org/web/20221127205112im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a586587ad6505f6_Explore%20task%20management.svg'></img>
            <div className='ml-5 m-5'>
            <h1 className='text-2xl font-bold'>Task Management</h1>
            <p className='mt-3'>Use simple task lists and create task templates
            </p>
            <p>on your protects to see what needs to be done.Set due dates and email reminders. </p>
           
            </div>
        </div>

      </div>
        </div>
    );
};

export default Bonsaiwork;