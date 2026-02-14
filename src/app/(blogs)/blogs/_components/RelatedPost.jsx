import Link from "next/link";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";

function RelatedPost({ posts }) {
  if (!posts?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {posts.map((post) => (
        <Link key={post._id} href={`/blogs/${post.slug}`} className="group">
          <article className="bg-white rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all h-full flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <h3 className="font-bold text-secondary-700 group-hover:text-primary-600 line-clamp-2 text-sm sm:text-base mb-2">
                {post.title}
              </h3>
              <div className="flex items-center justify-between mt-auto text-xs text-secondary-500">
                <span>{post.author?.name}</span>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-3 h-3" />
                  <span>{post.readingTime} دقیقه</span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default RelatedPost;