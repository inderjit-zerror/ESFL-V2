import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full border-b border-black/50 container py-24 ">
      <div className="  grid  grid-cols-1 md:grid-cols-2 gap-x-20">
        {/* Left: Image with badge */}
        <div className="relative h-full">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image fill
              src="/images/about/IMG30.jpg"
              alt="Assorted Indian spices in bowls — turmeric, chili powder, coriander, salt and fresh coriander leaves"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute left-0 top-0 flex  flex-col items-start bg-[#E30713] p-3 text-white">
            <h5 className="text-3xl   leading-none ">
              30+
            </h5>
            <span className="mt-1 text-xs uppercase text-white">
              Years of Legacy
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h6 className="text-red uppercase mb-2">Who We Are</h6>

          <h2 data-para-effect className=" uppercase">
            From a Local <br />Enterprise to a <br /> Global Force
          </h2>

          <p className="mt-6  ">
            Founded on the principles of purity and authenticity, Empire
            Spices &amp; Foods Ltd. has grown from a single shop into one of
            India&apos;s most respected names in spice making and food
            processing ensuring every product carries the hallmark of
            quality.
          </p>

          <p className="mt-4  ">
            Our commitment extends beyond just products. We foster a
            community of farmers, partners and consumers who believe in
            sustainable, flavourful living — and with state-of-the-art
            facilities and a passion for tradition, we continue to redefine
            the boundaries of Indian cuisine.
          </p>

          {/* Stat pills */}
          <div className="mt-32 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "Farmer-First Sourcing Network",
              "32 Manufacturing Units",
              "Exports to 14+ Countries",
              "Three Flagship Brand Families",
            ].map((stat) => (
              <div
                key={stat}
                className="flex items-center justify-center rounded-sm  bg-[#F5C451] px-4 py-3 text-center uppercase  text-sm "
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}