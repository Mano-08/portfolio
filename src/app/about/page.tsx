import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main className="py-10 ">
      <p className="font-sm md:font-base text-black/50">
        Hello there! I am a 21 year old Computer Science &amp; Engineering
        student in my final year of B.Tech at NIT Andhra. But hey, this page
        isn&apos;t about my life inside the terminal, but everything beyond the
        CLI! I have a soft spot for painting, sketching, and crafting. I tend to
        pause and admire beautifully designed architectures, rich in fine
        details. I absolutely love when products aren&apos;t just functional but
        also well designed ✨ — clean, satisfying aesthetics always win me over!
      </p>

      <div className="grid grid-cols-1 my-6 justify-items-center items-center gap-3 md:grid-cols-2">
        {["/cat.jpg", "/wolf.jpg"].map((img, index) => (
          <div
            key={index}
            className="rounded overflow-hidden object-contain p-1.5 hover:p-2 transition-all duration-500 hover:border border-solid hover:border-neutral-700"
          >
            <Image
              src={img}
              alt="gallery"
              height={500}
              width={500}
              className="h-[280px] w-auto rounded"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
