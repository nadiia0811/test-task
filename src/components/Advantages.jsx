import Card from "./Card";
import rocket from "../assets/Rocket.png";
import light from "../assets/Light.png";
import book from "../assets/Book.png";


const Advantages = () => {
    return (
      <div className="w-[1920px] h-[560px] bg-[#e0e7ef] mx-auto pt-[72px] pb-[72px]">
         <div className="w-[1340px] h-[457px] mx-auto flex flex-col gap-6">
            <div className="h-[123px] bg-light_gray w-full rounded-[16px] flex items-center">
              <h2 className="text-blue font-poppins font-medium text-[42px] leading-[63px] ml-[40px]">
                 ADVANTAGES
              </h2>
            </div>

            <div className="flex gap-6 h-[274px]">
               <Card image={rocket} 
                     title="LAUNCH YOUR COACHING CAREER"
                     description="A comprehensive course track to ICF credentialing" />
               <Card image={light}
                     title="COACHING IN THE WORKPLACE"
                     description="Serve as a thought leader within your organization"/>
               <Card image={book}
                     title="CONTINUING COACHING EDUCATION"
                     description="Beginner or a seasoned pro, you'll find a course right for you"/>
            </div>

         </div>
      </div>
    )
};

export default Advantages;