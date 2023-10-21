import {Link} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor} = item

    return <div className="py-[30] px-3 lg:px-5">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                {name}
            </h2>
            <h2 className="text-[16px] leading-7 font-[400] text-headingColor mt-4">
                {desc}
            </h2>

            <div className="flex items-center justify-between mt-[30px]">
            <Link to="/doctors" className="w-[44px] rounded-full border border-solid border-[#181E1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-non" >
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
            <span className='w-[44px] h-[44px] flex items-center justify-centr text-[18px] leading-[30px] font-[600]' style={{background: `${bgColor}`, color: `${textColor}`, borderRadius: "6px 0 0 6px"}}>
            
            </span>
            </div>
    </div>
}

export default ServiceCard