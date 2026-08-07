export default function WhoWeAre() {
  return (
    <section className="w-full bg-white max-sm:pt-10">
      <div className="mx-auto grid  grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:py-10">
        {/* Left: Image with badge */}
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <img
              src="/images/about/IMG30.jpg"
              alt="Assorted Indian spices in bowls — turmeric, chili powder, coriander, salt and fresh coriander leaves"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute left-0 top-0 flex w-40 flex-col items-start bg-[#E70514] px-5 py-4 text-white">
            <span className="text-3xl font-extrabold leading-none tracking-tight">
              30+
            </span>
            <span className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/90">
              Years of Legacy
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-sm font-semibold text-neutral-900">Who We Are</p>

          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#E70514] sm:text-4xl">
            From a Local Enterprise to a Global Force
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-[#E70514] Paragraph_Medium">
            Founded on the principles of purity and authenticity, Empire
            Spices &amp; Foods Ltd. has grown from a single shop into one of
            India&apos;s most respected names in spice making and food
            processing ensuring every product carries the hallmark of
            quality.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#E70514] Paragraph_Medium">
            Our commitment extends beyond just products. We foster a
            community of farmers, partners and consumers who believe in
            sustainable, flavourful living — and with state-of-the-art
            facilities and a passion for tradition, we continue to redefine
            the boundaries of Indian cuisine.
          </p>

          {/* Stat pills */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Farmer-First Sourcing Network",
              "32 Manufacturing Units",
              "Exports to 14+ Countries",
              "Three Flagship Brand Families",
            ].map((stat) => (
              <div
                key={stat}
                className="flex items-center justify-center rounded-sm Paragraph_Small font-bold! bg-[#F5C451] px-4 py-3 text-center text-[11px]  uppercase tracking-wide text-[#7A3A12]"
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