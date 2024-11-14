import icon from "../assets/Icon_Container.png";
import clock from "../assets/clock.png";
import laptop from "../assets/laptop.png";
import language from "../assets/language.png";
import click from "../assets/click.png";
import modules from "../assets/modules.png";
import { ArrowUpRight } from "lucide-react";

const OurCourses = () => {
    return (
      <div className="w-custom_full h-[2043px] bg-light_gray mx-auto">
         <div className="w-[1340px] h-[1871px] mt-[50px] mx-auto flex flex-col gap-5">

            <div className="h-[63px]">
                <h2 className="font-poppins text-[42px] font-medium 
                               text-blue ">
                    OUR COURSES
                </h2>
            </div>

            <div className="h-[884px] border-2 border-blue rounded-[20px] p-[40px]
                            flex flex-col gap-10"> 
                <div className="flex h-[60px] items-center">
                    <div className="flex w-[1132px] gap-[14px]">
                        <img src={icon} alt="" />
                        <h4 className="flex items-center text-blue font-poppins
                                       text-[24px] leading-[36px] font-medium">
                            LEVEL 1 (ACC TRACK) EXPERIENTIAL EXECUTIVE COACHING PROGRAM
                        </h4>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <button className="rounded-[100px] w-[40px] h-[40px] flex bg-blue items-center justify-center">
                            <ArrowUpRight className="w-[24px] h-[24px] text-white"/>
                        </button>
                        <p className="font-roboto text-dark_gray font-medium text-[20px] leading-[30px]">
                            DETAILS
                        </p>
                    </div>
                </div>
                <div className="flex gap-[14px] h-[47px]">
                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={clock} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          60 hours
                       </p>
                    </div>

                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={laptop} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          Online
                       </p>
                    </div>

                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={language} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          English
                       </p>
                    </div>
                    
                </div>
                <div className="flex flex-col h-[519px] gap-[24px]">
                    <div className="h-[30px] flex items-center">
                        <p className="font-roboto text-blue text-[20px] font-normal">
                           THE THREE PRIMARY COACHING PROGRAM MODELS:
                        </p>
                    </div>

                    <div className="flex flex-col h-[124px] gap-2">
                        <p className="font-roboto text-dark_gray text-[18px] font-medium flex 
                                      leading-[27px] items-center">
                            Level 1 (ACC Track) Experiential Executive Coaching Program
                        </p>
                        <div className="flex flex-col h-[89px] gap-2">
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                   In-depth exploration of coaching foundations
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                  Mastery in effective communication strategies
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                   Proficiency in navigating ICF Core Competencies
                                </p>
                            </div>                          
                        </div>
                    </div>


                    <div className="flex flex-col h-[124px] gap-2">
                        <p className="font-roboto text-dark_gray text-[18px] font-medium flex 
                                      leading-[27px] items-center">
                            Level 1 (ACC Track) Experiential Executive Coaching Program
                        </p>
                        <div className="flex flex-col h-[89px] gap-2">
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                   Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                   Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                    Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities
                                </p>
                            </div>                          
                        </div>
                    </div>


                    <div className="flex flex-col h-[124px] gap-2">
                        <p className="font-roboto text-dark_gray text-[18px] font-medium flex 
                                      leading-[27px] items-center">
                            3.The Coaching Engagement Model
                        </p>
                        <div className="flex flex-col h-[89px] gap-2">
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                     Provides a structured framework for coaching sessions
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                      Guides coaches and clients through phases of awareness, discovery, goal setting, 
                                      approach determination, progress tracking, and success evaluation
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                    Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach 
                                    and client
                                </p>
                            </div>                          
                        </div>
                    </div>
                    

                    <div className="flex w-[209px] h-[45px] justify-between">
                        <p className="font-roboto text-blue font-medium 
                                      flex items-center text-[30px]">
                            PRICE
                        </p>
                        <div className="w-[2px] h-[45px] bg-blue"></div>
                        <p className="font-roboto text-blue font-medium 
                                      flex items-center text-[30px]">
                            $6 499
                        </p>
                    </div>
                </div>

                <button className="w-[216px] h-[58px] flex items-center font-roboto font-normal 
                                   justify-center bg-blue rounded-[14px] text-light_gray text-[20px]">
                    JOIN
                </button>

            </div>

            <div className="h-[884px] border-2 border-blue rounded-[20px] p-[40px]
                            flex flex-col gap-10"> 
                <div className="flex h-[60px] items-center">
                    <div className="flex w-[1132px] gap-[14px]">
                        <img src={icon} alt="" />
                        <h4 className="flex items-center text-blue font-poppins
                                       text-[24px] leading-[36px] font-medium">
                            LEVEL 2 (PCC TRACK) EXPERIENTAL EXECUTIVE COACHING PROGRAM
                        </h4>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <button className="rounded-[100px] w-[40px] h-[40px] flex bg-blue items-center justify-center">
                            <ArrowUpRight className="w-[24px] h-[24px] text-white"/>
                        </button>
                        <p className="font-roboto text-dark_gray font-medium text-[20px] leading-[30px]">
                            DETAILS
                        </p>
                    </div>
                </div>
                <div className="flex gap-[14px] h-[47px]">
                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={clock} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          125 hours
                       </p>
                    </div>

                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={modules} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          9 modules
                       </p>
                    </div>

                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={laptop} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          Online
                       </p>
                    </div>

                    <div className="flex w-[128px] rounded-[45px] bg-whisper gap-2 items-center justify-center">
                       <img src={language} alt="icon" />
                       <p className="font-roboto text-dark_gray font-medium text-[18px] leading-[27px]">
                          English
                       </p>
                    </div>                   
                </div>
                <div className="flex flex-col h-[519px] gap-[24px]">
                    <div className="h-[30px] flex items-center">
                        <p className="font-roboto text-blue text-[20px] font-normal">
                           THE THREE PRIMARY COACHING PROGRAM MODELS:
                        </p>
                    </div>

                    <div className="flex flex-col h-[124px] gap-2">
                        <p className="font-roboto text-dark_gray text-[18px] font-medium flex 
                                      leading-[27px] items-center">
                            1.The Coaching Certification Model
                        </p>
                        <div className="flex flex-col h-[89px] gap-2">
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                     The program offers three pathways to proficiency: coaching, receiving coaching, 
                                     or observing coaching sessions
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                    Emphasizes three core areas: ICF Ethics, ICF Regulations, and ICF Core Competencies
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                    Candidates focus on enhancing skills in performance coaching, 
                                    behavioral coaching, and perceptual coaching
                                </p>
                            </div>                          
                        </div>
                    </div>

                    <div className="flex flex-col h-[124px] gap-2">
                        <p className="font-roboto text-dark_gray text-[18px] font-medium flex 
                                      leading-[27px] items-center">
                            2.The Coach’s Learning Model
                        </p>
                        <div className="flex flex-col h-[89px] gap-2">
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                   Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                   Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                    Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities
                                </p>
                            </div>                          
                        </div>
                    </div>

                    <div className="flex flex-col h-[124px] gap-2">
                        <p className="font-roboto text-dark_gray text-[18px] font-medium flex 
                                      leading-[27px] items-center">
                            3.The Coaching Engagement Model
                        </p>
                        <div className="flex flex-col h-[89px] gap-2">
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                     Provides a structured framework for coaching sessions
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                      Guides coaches and clients through phases of awareness, discovery, goal setting, 
                                      approach determination, progress tracking, and success evaluation
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <img src={click} alt="" />
                                <p className="font-roboto text-dark_gray text-[18px] font-normal leading-[27px]">
                                    Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach 
                                    and client
                                </p>
                            </div>                          
                        </div>
                    </div>                   

                    <div className="flex w-[209px] h-[45px] justify-between">
                        <p className="font-roboto text-blue font-medium 
                                      flex items-center text-[30px]">
                            PRICE
                        </p>
                        <div className="w-[2px] h-[45px] bg-blue"></div>
                        <p className="font-roboto text-blue font-medium 
                                      flex items-center text-[30px]">
                            $8 499
                        </p>
                    </div>
                </div>

                <button className="w-[216px] h-[58px] flex items-center font-roboto font-normal 
                                   justify-center bg-blue rounded-[14px] text-light_gray text-[20px]">
                    JOIN
                </button>
            </div>
         </div>
      </div>
    )
};

export default OurCourses;