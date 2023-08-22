import React, { useState } from 'react';

import '../Pricing/Pricing.css'
const Pricing = () => {
    return (
        
        <div>
         <div className='grid grid-cols-2 ml-96 m-20 plan'>
            <div>
                <h1 className='text-5xl '>Plans & Pricing</h1>
            </div>
            <div className=' flex mt-5'>
<h1>MONTHLY</h1>
<input type="checkbox" class="toggle toggle-success ml-5" checked />
<h1 className='ml-3'>YEARLY</h1>

            </div>
         </div>
         <div className='grid grid-cols-3 pricingcard'>
            <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Starter</h2>
    <p>Ideal for freelancers and contractors just starting out.</p>
    <div class="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">49</span>
            <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div class="divider"></div>
        <div>
        <li>All Templates</li>
    <li>

Unlimited Clients & Projects</li>
    <li>Invoicing & Payments</li>
    <li>Proposals & Contracts</li>
    <li>Tasks & Time Tracking</li>
    <li>Client CRM</li>
    <li>Expense Tracking</li>
    <li>Up to 5 Project Collaborators</li>
        </div>
    <div class="card-actions justify-center">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  mb-16 btn-success mt-52">Start Free</button>
    </div>
  </div>
</div>

            </div>
            <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Professional</h2>
    <p>Everything a growing independent business needs to thrive.</p>
    <div class="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">39</span>
            <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div class="divider"></div>
        <div>
        <li>Everything in Starter plus...</li>
    <li>Custom Branding</li>
    <li>Forms & Questionnaires</li>
    <li>Workflow Automations</li>
    <li>Client Portal
</li>
    <li>QuickBooks Integration
</li>
    <li>Calendly Integration</li>
    <li>Zapier Integration</li>
    <li>Up to 15 Project Collaborato</li>
        </div>
    <div class="card-actions justify-center">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  mb-16 btn-success mt-48">Start Free</button>
    </div>
  </div>
</div>

            </div>
            <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Business</h2>
    <p>The perfect package for small businesses and agencies</p>
    <div class="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">79</span>
            <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div class="divider"></div>
        <div>
        <li>Everything in Starter and Professional plus...</li>
    <li>Subcontractor Management</li>
    <li>Hiring Agreement Templates (1099 contracts)</li>
    <li>Subcontractor Onboarding</li>
    <li>Talent Pool</li>
    <li>3 Team Seats (additional seats $9/month)</li>
    <li>Accountant Access</li>
    <li>Connect Multiple Bank Accounts</li>
    <li>Unlimited Project Collaborators</li>
        </div>
    <div class="card-actions justify-center">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-12 btn-success mt-32">Start Free</button>
    </div>
  </div>
</div>

            </div>
         {/* <div class="columns">
  <ul class="price">
    <div className='ml-20'>
    <h1 className='text-2xl  font-bold mt-12'>Starter</h1>
    <p>Ideal for freelancers and contractors just starting out.</p>
    </div>
    <li class="grey">$ 24 / Month</li>
    <div class="divider"></div>
    <li>All Templates</li>
    <li>

Unlimited Clients & Projects</li>
    <li>Invoicing & Payments</li>
    <li>Proposals & Contracts</li>
    <li>Tasks & Time Tracking</li>
    <li>Client CRM</li>
    <li>Expense Tracking</li>
    <li>Up to 5 Project Collaborators</li>
 
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-32 mb-16 btn-success mt-20">Start Free</button>
  </ul>
</div>
         <div class="columns">
  <ul class="price">
  <div className='ml-20'>
    <h1 className='text-2xl  font-bold mt-12 '>Professional</h1>
    <p>Everything a growing independent business needs to thrive.</p>
    </div>
    <li class="grey">$ 39 / Month</li>
    <div class="divider "></div>
    <li>Everything in Starter plus...</li>
    <li>Custom Branding</li>
    <li>Forms & Questionnaires</li>
    <li>Workflow Automations</li>
    <li>Client Portal
</li>
    <li>QuickBooks Integration
</li>
    <li>Calendly Integration</li>
    <li>Zapier Integration</li>
    <li>Up to 15 Project Collaborato</li>
   
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-36 mb-16 btn-success mt-5">Start Free</button>
  </ul>
</div>
         <div class="columns">
  <ul class="price">
  <div className='ml-20'>
    <h1 className='text-2xl  font-bold mt-12'>Business</h1>
    <p>The perfect package for small businesses and agencies.</p>
    </div>
    <li class="grey">$ 79 / Month</li>
    <div class="divider"></div>
    <li>Everything in Starter and Professional plus...</li>
    <li>Subcontractor Management</li>
    <li>Hiring Agreement Templates (1099 contracts)</li>
    <li>Subcontractor Onboarding</li>
    <li>Talent Pool</li>
    <li>3 Team Seats (additional seats $9/month)</li>
    <li>Accountant Access</li>
    <li>Connect Multiple Bank Accounts</li>
    <li>Unlimited Project Collaborators</li>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-36 mb-16 btn-success mt-5">Start Free</button>
  </ul>
</div> */}
         </div>
      <div>
        <h1 className='text-3xl m-20 text-center'>Super charge your work with add-ons</h1>
      </div>
      <div className='grid grid-cols-2 m-20 bg-stone-100 p-12 Collaborators' >
        <div>
<h1 className='text-2xl'>Collaborators</h1>
<p>Invite other users to specific projects for limited access and functionality.</p>
        </div>
        <div className='text-end free'>
            <h1 className='font-bold text-2xl text-end sm:text-start '>Free</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 m-20 bg-stone-100 p-6 Partners' >
        <div className='p-5'>
<h1 className='text-2xl'>Partners</h1>
<p>
Invite other users for full account access and company management..</p>
        </div>
        <div className='text-end partnermonth'>
            <h1 className='font-bold text-2xl text-end  '>$9</h1>
            <h1>Month</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 m-20 bg-stone-100 p-12 bonsaiTax' >
        <div>
<h1 className='text-2xl'>Bonsai Tax</h1>
<p>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
        </div>
        <div className='text-end bonsaiTaxmonth'>
            <h1 className='font-bold text-2xl text-end '>$10</h1>
            <h1>Month</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 m-28 bg-teal-50 p-20 buissness' >
        <div className=''>
<h1 className='text-4xl font-semi-bold yourbuissness'>It’s your business.</h1>
<h1 className='text-4xl font-semi-bold helpit'>We’re here to help it grow.</h1>

        </div>
        <div class="card-actions justify-end">
      <button class="btn btn-success startbtn">Start Free</button>
    </div>
      </div>
      <div className='m-28'>
        <h1 className='text-3xl font-bold text-center'>Frequently Asked Questions</h1>
        <div className='justify-center m-20 question'>
        <div class="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="collapse-title text-xl font-bold">
  How does the free trial work?
  </div>
  <div class="collapse-content"> 
    <p>
When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.</p>
  </div>
</div>
<div class="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-bold">
  Can I change plans anytime?
  </div>
  <div class="collapse-content"> 
    <p>Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".</p>
  </div>
</div>
<div class="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-bold">
  How do I pause my Bonsai subscription?
  </div>
  <div class="collapse-content"> 
    <p>We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.</p>
  </div>
</div>
<div class="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-bold">
  What is your refund policy?
  </div>
  <div class="collapse-content"> 
    <p>If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.</p>
  </div>
</div>
        </div>
      </div>
        </div>
    );
};

export default Pricing;