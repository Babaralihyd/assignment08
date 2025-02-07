import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function homepage() {
  const data = await client.fetch(
    `*[_type == "homepage"]{ 
      heading,
      paragraph,
      image,
      buttonText
    }[0]`
  );

  console.log(data);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-80 p-6 mx-auto my-12">
      {/* Heading - Centered */}
      <h1 className="text-4xl font-bold text-center mb-6">{data.heading}</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-5xl space-y-8 sm:space-x-8 sm:space-y-0">
        {/* Image - Adjust size and positioning for mobile/tablet/desktop */}
        <div className="flex-shrink-0 w-72 sm:w-96 h-72 sm:h-96 mb-4 sm:mb-0">
          <img 
            src={urlFor(data.image).url()} 
            alt="design pic" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Paragraph and Button - Right Side */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-lg mb-4">{data.paragraph}</p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            {data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
