import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full border-b border-black/50 container   py-12 md:py-24  ">
      <div className="  grid  grid-cols-1 md:grid-cols-2 ">
        {/* Left: Image with badge */}
        <div className="relative h-full">
          <div className="relative max-sm:aspect-square w-full h-full overflow-hidden">
            <video className="cover" src="/videos/local_enterprise_video.mp4" loop autoPlay muted playsInline></video>
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:pl-12">
          {/* <h6 className="text-red max-sm:mt-5 uppercase mb-2">Who We Are</h6> */}

          <h2 data-para-effect className=" uppercase max-sm:mt-5">
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

          <div className="mt-10 md:mt-32 flex flex-wrap gap-1">
            {[
              "Farmer-First Sourcing Network",
              "32 Manufacturing Units",
              "Exports to 14+ Countries",
              "Three Flagship Brand Families",
              "Millions of Happy Consumers",
              "100% Authentic Ingredients",
            ].map((stat) => (
              <div
                key={stat}
                className="inline-flex items-center justify-center rounded-full bg-red text-white px-4 py-2.5 text-center uppercase text-xs"
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