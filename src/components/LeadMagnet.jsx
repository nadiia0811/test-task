

const LeadMagnet = () => {
    return (
        <div className="w-custom_full h-[350px] bg-blue mx-auto flex items-center">
            <div className="flex w-[1340px] h-[250px] mx-auto">
                <div className="flex flex-1 flex-col mt-[33px] h-[184px] 
                                gap-1 text-light_gray items-start">
                    <h2 className="font-poppins font-medium text-[42px] 
                                   leading-[63px]">
                       COMPANIES, UNIVERSITIES, <br /> DIRECTORS AND PRESIDENTS
                    </h2>
                    <p className="font-roboto font-normal text-[18px] leading-[27px]">
                       If you'd like to learn more information about our work with large <br/>
                       organizations, let's schedule a call. 
                    </p>
                </div>

                <div className="flex flex-1 flex-col">
                  <form className="flex flex-col ml-[10px]">
                        <input type="text" name="name"
                               className="input"
                               placeholder="Name" />

                        <input type="text" name="email"
                               className="input"
                               placeholder="Email" />        
                  </form>
                  <button className="custom_button">
                      Schedule a call
                  </button>  
                </div>
            </div>
        </div>
    )
};

export default LeadMagnet;