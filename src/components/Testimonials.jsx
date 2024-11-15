import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import star from "../assets/star.png";
import btn from "../assets/btn.png";
import btn2 from "../assets/btn2.png";
import indication from "../assets/indication.png";

const Testimonials = () => {
    return (
      <div className="w-custom_full h-[551px] mx-auto flex items-center justify-center bg-light_gray">
         <div className="w-[1340px] h-[454px] flex flex-col gap-5">
             <div className="h-[63px]">
                <h2 className="custom_h2">TESTIMONIALS</h2>
             </div>

             <div className="flex flex-col gap-[50px] h-[371px]">
                 <div className="h-[265px] flex gap-6">
                     <div className="custom_subcontainer">
                        <img src={photo1} alt="photo" />
                        <div className="flex flex-col gap-4">
                            <div className="text_container">
                                <h5 className="custom_h5">Name</h5>
                                <p className="custom_p">Role Here</p>
                                <div className="flex justify-between">
                                   <img src={star} alt="" />
                                   <img src={star} alt="" />
                                   <img src={star} alt="" />
                                   <img src={star} alt="" />
                                   <img src={star} alt="" />                                  
                                </div>
                            </div>
                            <p className="font-normal font-roboto text-dark_gray text-[16px] leading-[24px]">
                               Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis 
                               in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat 
                               laoreet est arcu odio vitae egestas. Porttitor urna.
                            </p>
                        </div>
                     </div>
                     <div className="custom_subcontainer">
                         <img src={photo2} alt="photo" />
                         <div className="flex flex-col gap-4">
                            <div className="text_container">
                                <h5 className="custom_h5">Name</h5>
                                <p className="custom_p">Role Here</p>
                                <div className="flex justify-between">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />                                  
                                </div>
                            </div>
                            <p className="font-normal font-roboto text-dark_gray text-[16px] leading-[24px]">
                               Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis 
                               in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat 
                               laoreet est arcu odio vitae egestas. Porttitor urna.
                            </p>
                        </div>
                     </div>
                 </div>
                 <div className="flex justify-center">
                    <div className="flex w-[221px] h-[56px] rounded-[100px] border border-[#BFCCD8]
                                    py-[12px] px-[14px] justify-between items-center">
                        <img src={btn} alt="button left" />
                        <img src={indication} 
                             alt="indication" 
                             className="w-[69px] h-[4px]"/>
                        <img src={btn2} alt="button right" />                        
                    </div>
                 </div>                
             </div>
         </div>
      </div>
    )
};

export default Testimonials;