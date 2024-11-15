import logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <div className="w-custom_full mx-auto flex items-center justify-center h-[112.23px]">
            <div className="w-[1340px] flex justify-center justify-around gap-12">
                <div className="w-[485px]">
                   <img src={logo} alt="" />
                </div>   
                <div className="flex items-center justify-center">
                   <p className="footer_p">© 2024 Dickens Consulting Group, LLC</p>
                </div>             
                
                <ul className="w-[485px] h-[40px] flex gap-4 justify-end">
                    <li className="custom_li">
                       Course
                    </li>
                    <li className="custom_li">
                       About
                    </li>
                    <li className="custom_li">
                       Contact
                    </li>                   
                </ul>
            </div>                          
        </div>
    )
};

export default Footer;