import React from "react";
import img from "../../../assets/img/hero.jpg";


const Hero = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-5 mt-10">
          <h1 className=" text-4xl lg:text-6xl font-bold leading-tight">
            Win Your 
          </h1>
          <p className=" text-4xl lg:text-6xl font-medium">
            Perfect Car Aution
          </p>
          

          <div className="flex gap-8">
          
  

          </div>
        </div>

        {/* img section  */}
        <div className="car w-full md:w-2/4 mt-4">
          <img  src="https://s3-alpha-sig.figma.com/img/5916/f6b0/4cc4b11dcd37f2fc60af8b403c620bb0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AM1Dn6KbYuWMiIBrv~4rvbPnHGWsbpiueoaxFV2XRJ4P48MbAAe64KaIqRUA1HPOCYLV7~wc6kUTEt8cvbUKryCchxmr3PUfh1glrh6wQGe3YbVSLOESP~0RT1vJ3yd~g9I7MXljQldMMnO7QoUZi4VgcB-~4FHg8cIus1Gg-ptEqkqhxR4ScOAmIxuShZtKQlrYMXke3sWEJqYOlPX4bT7rJByyBNyvkN2c7k5pxeFHprQezbF5nfqiGDFK6CJYkRx5wJzSR7M9jIKbnCFh0cKnv5WyOD51DpXMl-HvC45zrYfZqcY5FsAM4HJR~lHVygatKN3bauSySmivkAFlaw__" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
