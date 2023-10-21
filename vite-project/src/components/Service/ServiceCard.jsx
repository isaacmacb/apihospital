
const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor} = item

    return <div className="py-[30] px-3 lg:px-5">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                {name}
            </h2>
            <h2 className="text-[16px] leading-7 font-[400] text-headingColor mt-4">
                {desc}
            </h2>


    </div>
}

export default ServiceCard