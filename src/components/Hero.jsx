import logo from "../assets/Logo.png";
import image from "../assets/Img.png";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="w-[1920px] h-[699px] flex flex-col bg-[#fbfbfb]">         
            <div className="px-[290px] h-[80px] flex items-center">            
                <div className="flex gap-12 items-center font-roboto">
                    <img src={logo} 
                         alt="Logo" 
                         className="w-[48.09px] h-[48.23px]"
                    />
                    <div className="w-[1086px] h-[44px] flex items-center">                       
                        <div className="ml-[732px] flex gap-[16px] h-full ">
                            <div className="flex items-center border-b-[1px] border-b-[#003366]">
                                <div className="flex w-[79px] items-center">                           
                                    <span className="font-medium text-[16px] leading-[16px] 
                                                text-center text-[#003366]">Home
                                    </span>
                                    <ChevronDown className="w-[20px] h-[20px] text-white hover:text-[#003366]"/>                  
                                </div>                        
                            </div>                       
                            <div className="flex w-[79px] items-center text-[#343434]">
                                <span className="font-medium text-[16px] leading-[16px] 
                                                text-center">Courses                                             
                                </span>
                                <ChevronDown className="w-[20px] h-[20px]"/>                  
                            </div>
                            <div className="flex w-[59px] items-center text-[#343434]">
                                <span className="font-medium text-[16px] leading-[16px] 
                                              text-center">About
                                </span>                  
                            </div>
                            <div className="flex w-[73px] items-center text-[#343434]">
                                <span className="font-medium text-[16px] leading-[16px] 
                                              text-center text-nowrap">Contact us
                                </span>                  
                            </div>
                         </div>             
                    </div>
                    <button className="w-[110px] h-[58px] flex items-center rounded-[14px] justify-center
                                text-white bg-[#003366] font-normal text-[20px] leading-[30px]">
                        Login
                    </button>                                                                             
                </div> 
            </div>

            <div className="w-[1346px] h-[519px] mx-auto mt-[50px] flex gap-6">           
              <div className="w-[889px] rounded-[20px] h-full bg-[#003366] text-[#fbfbfb]">
                  <div className="flex flex-col gap-1 my-[108px] mx-[80px]"> 
                     <div className="flex flex-col font-semibold 
                                        font-poppins text-4xl leading-[57.6px]">
                            <p>WELCOME TO</p>
                            <p>DICKENS EXECUTIVE</p>
                            <p>COACHING ACADEMY</p>
                     </div>
                     <div className="h-[125px] flex flex-col font-roboto">
                        <span className="font-normal text-base leading-[27px]">
                          Your resource of choice for coaching education
                        </span>
                        <button className="mt-[40px] w-[185px] h-[58px] flex items-center justify-center
                                          leading-[30px] text-[#003366] font-[20px] bg-[#fbfbfb] rounded-[14px]">
                          Explore Courses
                        </button>
                     </div>
                  </div>
              </div>

              <img src={image} 
                   className="w-[433px]"
                   alt="" />
            </div>
        </div>    
    
)
};


export default Hero;