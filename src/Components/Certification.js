import React from 'react'
import deved from "../assets/AWSCloudLogo.png";

const Certification = () => {
  return (
    <section id="certificate" className="pt-20">
      <h3 className="text-3xl py-10 mb-8 pb-0  dark:text-white">
        Licence and Certifications
      </h3>

      <p className="text-md py-2 text-gray-800 leading-8 dark:text-white w-50%">
      In addition to my passion for software development and coffee, I have cultivated a keen interest in DevOps and cloud technologies. I've earned the AWS Cloud Practitioner certificate and am currently preparing for the AWS Developer Associate certificate. This new interest is not only enhancing my technical skills but also broadening my perspective on how technology can be leveraged for more efficient and scalable solutions.
</p>

<div className="relative self-center rounded-full w-80 h-100 overflow-hidden xl:h-1/3 xl:w-1/3 md:h-1/2 md:w-1/2 items-center m-8">
          <img src={deved} fill style={{ objectFit: "contain" }} alt="" />
        </div>
      </section>
  )
}

export default Certification