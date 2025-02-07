import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// Define the Post type directly here
interface Post {
  slug: string;
  title: string;
  summary: string;
  image: any; // Adjust this if image is an object or has a different structure
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative max-h-76 flex-1">
      <Image
           src={urlFor(post.image).url()}
           alt="design pic"
           layout="fill"
           objectFit="cover"
          className="rounded-lg shadow-lg"
    />

      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {post.summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`@/`}
          className="block px-4 py-1 text-center bg-accentDark Secondary rounded text-dark bg-blue-600 hover:bg-green-600  font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
