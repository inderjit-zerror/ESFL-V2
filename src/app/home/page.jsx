import Building from "@/components/home/Building";
import Factory from "@/components/home/Factory";
import Hero from "@/components/home/Hero";
import HomeCTA from "@/components/home/HomeCTA";
import LatestCampaignsAndNews from "@/components/home/Latestcampaignsandnews";
import PresentAcrossCountry from "@/components/home/Presentacrosscountry";
import RamBandhuCategory from "@/components/home/Rambandhucategory";
import SevenSection from "@/components/home/SevenSection";
import Sticker from "@/components/home/Sticker";
import PageLoadAnimation from "@/components/common/PageLoadAnimation";
import { createPageMetadata } from "@/lib/seo";
import ScrollPackets from "@/components/home/ScrollPackets";
import OldCountryData from "@/components/home/demo/OldCountryData";
import BrandSection from "@/components/home/demo/BrandSection";

const page = () => {

    const data = [
        {
            id: 1,
            title: "Ram Bandhu - Aapka Taste Partner",
            desc: [
                "Ram Bandhu has been a trusted name in Indian kitchens for over 32 years, offering a wide range of spices, pickles, papads, hing, spice mixes, and snacks.",
                "Built on quality, trust, and continuous innovation, the brand creates products that suit the evolving tastes and lifestyles of Indian consumers, with the aim of bringing convenience to the art of cooking."
            ],
            logo: "/images/home/demo/rambandhu_logo.svg",
            className:"bg-red text-white",
            btnVariant:"B2",
            images: [
                { name: "Nimbu Pani Mix", zIndex: 1, src: "/images/home/demo/rambandhu/Nimbu.png" },
                { name: "Compounded Hing", zIndex: 2, src: "/images/home/demo/rambandhu/Hing.png" },
                { name: "Pav Bhaji", zIndex: 3, src: "/images/home/demo/rambandhu/PavBhaji.png" },
                { name: "Ram Bandhu Chilli Powder", zIndex: 4, src: "/images/home/demo/rambandhu/Chilli.png",isCenterLeftImg: true },
                { name: "Mango Pickle", zIndex: 10, src: "/images/home/demo/rambandhu/Mango.png", isCenterImg: true }, // center (index 4)
                { name: "Shahi Paneer Spice Mix", zIndex: 4, src: "/images/home/demo/rambandhu/Shahi.png",isCenterRightImg: true },
                { name: "Udad Papad", zIndex: 3, src: "/images/home/demo/rambandhu/Udad.png" },
                { name: "Kabuli Compounded Hing", zIndex: 2, src: "/images/home/demo/rambandhu/Kabuli.png" },
                { name: "Green Chilli Garlic Chutney", zIndex: 1, src: "/images/home/demo/rambandhu/Green.png" }
            ],
        },
        {
            id: 2,
            title: "Temptin' - Taste Mein Twist...",
            desc: [
                "The youthful brand of Temptin’ symbolises the temptation that is associated with lip smacking culinary delights. The very sight of delicious food is an enticement that fills us with the desire to relish it. ",
                "Brand Temptin' stands for the same feeling and makes your food tempting and irresistible. The range consists of Ketchup, Sauces, Dips, Chutneys, Chinese Spices etc."
            ],
            logo: "/images/home/demo/temtin_ll.png",
            images: [
                { name: "Paneer Chilli Masala", zIndex: 1, src: "/images/home/demo/temptin/Paneer_chilli_masala.png" },
                { name: "No Onion No Garlic Tomato Sauce", zIndex: 2, src: "/images/home/demo/temptin/sauce.png" },
                { name: "Pizza Pasta Sauce", zIndex: 3, src: "/images/home/demo/temptin/pizza_pasta.png",isCenterLeftImg:true },
                { name: "Tomato Ketchup", zIndex: 10, src: "/images/home/demo/temptin/tomato_ketchup.png", isCenterImg: true },
                { name: "Schezwan Dip", zIndex: 3, src: "/images/home/demo/temptin/Schezwan.png",isCenterRightImg:true },
                { name: "Green Chilli Sauce", zIndex: 2, src: "/images/home/demo/temptin/green_chili.png" },
                { name: "Masala Jadoo", zIndex: 1, src: "/images/home/demo/temptin/masala_jadoo.png" }
            ],
        },
        {
            id: 3,
            title: "Sarvottam Masale, RBM Masale",
            desc: [
                "Priced strategically the products under this brand targets the price conscious consumer without compromising on quality or taste.  ",
                "Meat Masala, Chicken Masala, Mutton Biryani Mix, Chicken Gravy are some of the products in the RBM line-up"
            ],
            logo: "/images/home/demo/rbm_logo.svg",
            className:"bg-red text-white",
            btnVariant:"B2",
            images: [
                { name: "Chicken Gravy Spice Mix", zIndex: 1, src: "/images/home/demo/rbm/chicken_gravy.png" },
                { name: "Egg curry Masala Box pack", zIndex: 2, src: "/images/home/demo/rbm/egg_cury.png",isCenterLeftImg:true },
                { name: "Meat Masala Box pack", zIndex: 10, src: "/images/home/demo/rbm/meat_masala.png", isCenterImg: true },
                { name: "Chicken Biryani", zIndex: 2, src: "/images/home/demo/rbm/chicken_biryani.png",isCenterRightImg:true },
                { name: "Mutton Gravy Spice Mix", zIndex: 1, src: "/images/home/demo/rbm/mutton_gravy.png" }
            ],
        },
    ]
    return (
        <>
            <PageLoadAnimation />
            <Hero />
            <Building />
            {data.map((brand) => (
                <BrandSection key={brand.id} {...brand} />
            ))}
            <Factory />
            <OldCountryData />
            <LatestCampaignsAndNews />
            <SevenSection />
        </>
    )
}

export default page