

const Card = ({image, title, description}) => {

    return (
        <div className="bg-light_gray rounded-[14px] w-[431px]">
            <div className="mx-[30px] my-[30px]">
                <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center justify-center">
                        <img src={image} alt="" />
                    </div>
                    <div className="flex items-center font-poppins justify-center h-[72px]">
                        <h4 className="font-medium text-[24px] leading-[36px] 
                                       text-blue text-center">
                            {title}
                        </h4>
                    </div>
                    <div className="font-roboto text-dark_gray font-normal
                                    text-center leading-[27px] mx-[30px] font-[18px]">
                        {description}
                    </div>              
                </div>
            </div>            
        </div>
    )
};

export default Card;