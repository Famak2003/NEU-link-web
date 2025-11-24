import Image from 'next/image'
import React from 'react'

import STEP1 from '@/assets/del-account-step1.jpeg'
import STEP2 from '@/assets/del-account-step2.jpeg'
import STEP3 from '@/assets/del-account-step3.jpeg'
import STEP4 from '@/assets/del-account-step4.jpeg'

export default function page() {
    const steps = [
        {
            title: "Step 1",
            content: (
                <>
                    <p className="mb-4">
                      Open the sidebar, by clicking your profile photo from the top right corner. Click on "settings" button.
                    </p>
                    <Image className=' h-[350px] smobile:h-[450px] mobile:h-[600px] w-fit overflow-hidden object-contain rounded-lg ' src={STEP1} alt='step 1' />
                </>
            ),
        },
        {
            title: "Step 2",
            content: (
                <>
                    <p className="mb-4">
                      Click on the "Delete account" button
                    </p>
                    <Image className=' h-[350px] smobile:h-[450px] mobile:h-[600px] w-fit overflow-hidden object-contain rounded-lg ' src={STEP2} alt='step 2' />
                </>
            ),
        },
        {
            title: "Step 3",
            content: (
                <>
                    <p className="mb-4">
                      Click "proceed" button
                    </p>
                    <Image className=' h-[350px] smobile:h-[450px] mobile:h-[600px] w-fit overflow-hidden object-contain rounded-lg ' src={STEP3} alt='step 3' />
                </>
            ),
        },
        {
            title: "Step 4",
            content: (
                <>
                    <p className="mb-4">
                      Enter your password to confirm delete, then click on the "Submit" button.
                    </p>
                    <Image className=' h-[350px] smobile:h-[450px] mobile:h-[600px] w-fit overflow-hidden object-contain rounded-lg ' src={STEP4} alt='step 4' />
                </>
            ),
        },
    ]
    return (
        <div className=' page '>
            
            

            <header className="mb-10">
              <h1 className="text-4xl font-bold mb-2">How to delete your account</h1>
            </header>
            {
                steps.map((step, idx) => {
                    return(
                        <section key={idx} className="mb-10">
                            <h2 className="text-2xl font-semibold mb-3">{step.title}</h2>
                            <div>{step.content}</div>
                        </section>
                    )
                })
            }


        </div>
    )
}
