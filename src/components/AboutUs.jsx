import { ArrowUpRight } from "lucide-react";
import about_us from "../assets/about_us.png";

const AboutUs = () => {
    return (
       <div className="w-custom_full h-[758px] mx-auto bg-light_gray ">
          <div className="w-[1340px] h-[658px] flex flex-col my-[50px] mx-auto">
            <div className="h-[63px] flex justify-between items-center mb-[20px]">
                <h2 className="font-poppins text-blue text-[42px] font-medium leading-[63px]">
                    ABOUT US
                </h2>
                <div className="flex gap-[10px] w-[173px] h-[40px] items-center">
                   <button className="rounded-[100px] w-[40px] h-[40px] flex bg-blue items-center justify-center">
                      <ArrowUpRight className="w-[24px] h-[24px] text-white"/>
                   </button>
                   <span className="font-roboto text-dark_gray text-[20px] 
                                    leading-[30px] font-normal">LEARN MORE
                   </span>
                </div>
            </div>

            <div className="h-[575px] flex gap-[30px]">
               <img src={about_us} alt="" />
               <div className="flex flex-col gap-[30px]"> 
                    <div className="h-[333px] w-[655px] bg-blue rounded-[14px]">
                        <div className="flex w-[610px] h-[280px] my-[25px] mx-[25px] flex-col gap-[30px]">
                            <h3 className="font-poppins font-medium text-[36px] leading-[54px]
                                            text-light_gray">
                                HI, WE’RE DICKENS EXECUTIVE COACHING ACADEMY
                            </h3>
                            <p className="w-[594px] h-[145px] font-roboto font-normal text-[18px] 
                                            text-light_gray leading-[27px]">
                                Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id proin rhoncus elit. 
                                Orci lacus pellentesque ultrices ut aliquet non fusce faucibus dictumst. Massa sit aliquam 
                                quam urna nam. Maecenas massa varius scelerisque pellentesque. Vestibulum ut rhoncus iaculis 
                                eleifend. Euismod cras et tortor at pellentesque duis cursus donec.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[20px]">
                       <div className="rounded-[14px] bg-blue w-[317px] h-[211px] flex items-center justify-center">
                          <div className="w-[166px] h-[144px] flex flex-col justify-center items-center">
                             <h2 className="font-poppins font-medium text-[42px] leading-[63px]
                                            text-light_gray ">
                                5+
                             </h2>
                             <p className="text-center text-light_gray font-roboto font-normal
                                           text-[18px] leading-[27px]">
                                years on the <br/> educational market
                             </p>
                          </div>
                       </div>

                       <div className="rounded-[14px] bg-blue w-[317px] h-[211px] flex items-center justify-center">
                          <div className="w-[166px] h-[144px] flex flex-col justify-center items-center">
                             <h2 className="font-poppins font-medium text-[42px] leading-[63px]
                                            text-light_gray">
                                1000+
                             </h2>
                             <p className="text-center text-light_gray font-roboto font-normal
                                           text-[18px] leading-[27px]">
                                successful <br/> graduates
                             </p>
                          </div>
                       </div>                 
                    </div>
               </div>               
            </div>
          </div>
       </div>
    )
}

export default AboutUs;