import React from 'react'

const CompanyhLogo = () => {

    const logos = [
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c99501c_Discord.svg", alt: "Discord", width: 130, height: 27 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fcd_NCR.svg", alt: "NCR", width: 98, height: 30 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82b52566d454c994910_mondaycom.svg", alt: "Monda.com", width: 134, height: 26 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fdb_Ted.svg", alt: "Ted", width: 56, height: 20 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fba_Dropbox.svg", alt: "Dropbox", width: 117, height: 24 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6708139d2e30eb81beb54cc7_orangetheory-logo.svg", alt: "", width: 132, height: 32 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fb6_Greenhouse.svg", alt: "greenhouse", width: 112, height: 25 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c995018_Vice.svg", alt: "Vice", width: 90, height: 28 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c99502c_ideo-logo.svg", alt: "Ideo", width: 80, height: 22 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fb1_Philips.svg", alt: "Philips", width: 87, height: 16 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fd1_Mural.svg", alt: "Mural", width: 73, height: 22 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c995044_Name%3DABM%20Industries%2C%20Mode%3DLight.svg", alt: "ABM Industries", width: 65, height: 37 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c995028_TheNewYorkTimes.svg", alt: "The New York Times", width: 211, height: 28 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82c52566d454c994f5e_Upwork.svg", alt: "Upwork", width: 90, height: 28 },
        { src: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c995054_Decathlon.svg", alt: "decathlon logo", width: 160, height: 22 },
      ];
    
    
  return (
    <div className='bg-black overflow-hidden md:py-16 py-8 text-white relative'>
        {/* Logo Animation */}
        <div className='flex animate-marquee'>
            {
                [logos,logos].map((logoSet,setIndex)=>(
                <div key={setIndex} className='flex shrink-0 min-w-full items-center justify-around px-4' >
                    {
                        logoSet.map((logo,index)=>(
                            <img key={`${setIndex}-${index}`} src={logo.src} alt={logo.alt} height={logo.height} width={logo.width} className='mx-8 object-contain shrink-0'></img>
                        ))
                    }
                </div>  
                ))
            }
            
        </div>

        {/* Gradient overlay */}
        <div className='absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black to-transparent'></div>
        
        <div className='absolute inset-y-0 right-0 w-[20%] bg-gradient-to-r from-transparent to-black'></div>
      
    </div>
  )
}

export default CompanyhLogo
