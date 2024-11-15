import line from "../assets/line_1.png";
import plus_btn from "../assets/plus_btn.png";
import form_line from "../assets/form_line.png";

const FAQ = () => {
 return (
   <div className="w-custom_full h-[784px] flex justify-center 
                   bg-light_gray items-center mx-auto">
      <div className="w-[1340px] h-[684px] flex flex-col gap-5">
          <div className="h-[63px] flex items-center">
             <h2 className="custom_h2">FAQ</h2>
          </div>

          <div className="h-[611px] flex gap-6">
                <div className="w-[772px] flex flex-col gap-5">
                 <div className="h-[251px] flex flex-col gap-10 rounded-[16px]
                                 py-10 px-10 border border-blue">
                    <p className="paragraph">
                       Lorem ipsum dolor sit amet consectetur. Bibendum proin
                    </p>
                    <img src={line} alt="" />
                    <p className="text-dark_gray text-[18px] font-roboto leading-[27px]">
                       Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis 
                       mi massa tortor scelerisque sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum cras erat 
                       nisl facilisis. Et.
                    </p>
                 </div>
                 <div className="flex h-[100px] rounded-[16px] border border-blue 
                                 gap-[30px] py-[30px] justify-between px-10">
                     <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur. Bibendum proin
                     </p>
                     <img src={plus_btn} alt="plus button" />
                 </div>
                 <div className="flex h-[100px] rounded-[16px] border border-blue 
                                 gap-[30px] py-[30px] justify-between px-10">
                     <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur. Bibendum proin
                     </p>
                     <img src={plus_btn} alt="plus button" />
                 </div>
                 <div className="flex h-[100px] rounded-[16px] border border-blue 
                                 gap-[30px] py-[30px] justify-between px-10">
                     <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur. Bibendum proin
                     </p>
                     <img src={plus_btn} alt="plus button" />
                 </div>                 
                </div>             
                <form className="w-[544px] p-[60px] gap-10 flex flex-col bg-blue 
                                  items-center rounded-[14px]">
                    <h4 className="custom_h4">ASK YOUR QUESTION</h4>
                    <img src={form_line} alt="" />
                    <input type="text" name="name"
                           className="form_input"
                           placeholder="Name" />
                    <input type="text" name="email"
                           className="form_input"
                           placeholder="Email" />
                    <textarea className="custom_textarea"
                              placeholder="Enter Your Question Here ....."/>
                    <button className="form_btn">
                        <p className="text-blue text-[20px] font-normal font-roboto leading-[30px]">
                          Send your message
                        </p>
                    </button>          
                </form>             
          </div>
      </div>
   </div>
 )
};

export default FAQ;