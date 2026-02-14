import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import PostInteraction from "./PostInteraction";
import { ClockIcon } from "@heroicons/react/24/outline";

async function PostList({posts}) {

  return posts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:mb-22 lg:mb-16">
      {posts.map((post) => (
        <article
          key={post.id || post.slug}
          className="border border-secondary-200 hover:border-primary-300 p-3 rounded-xl transition-all duration-300 hover:shadow-lg bg-white"
        >
          <CoverImage {...post} />
          
          <div className="space-y-3">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="font-bold text-secondary-700 hover:text-primary-600 line-clamp-2 text-sm md:text-base">
                {post.title}
              </h2>
            </Link>

            <div className="flex items-center justify-between">
              <Author {...post.author} />
              
              <div className="flex items-center text-xs text-secondary-500">
                <ClockIcon className="w-3 h-3 md:w-4 md:h-4 stroke-secondary-500 ml-1" />
                <span className="hidden xs:inline ml-1">خواندن:</span>
                <span>{post.readingTime}</span>
                <span className="hidden xs:inline mr-1">دقیقه</span>
              </div>
            </div>

            <PostInteraction post={post} />
          </div>
        </article>
      ))}
    </div>
  ) : (
    <div className="text-center py-12">
      <p className="text-secondary-500">پستی برای نمایش وجود ندارد</p>
    </div>
  );
}

export default PostList;