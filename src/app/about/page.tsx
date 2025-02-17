import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main className="py-10 ">
      <p className="font-sm md:font-base text-black/50">
        hello there! i am a 21 year old computer science and engineering student
        from nit andhra pradesh. outside the CLI, i like to paint, sketch, and
        do craft. i often pause and admire beautiful architectures of buildings.
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
