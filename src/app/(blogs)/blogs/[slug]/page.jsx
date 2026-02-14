import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/services/postServices";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import { toPersianDigits } from "@/utils/numberFormatter";

export async function generateStaticParams() {
  const {posts} = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "پست یافت نشد" };
  return { title: post.title };
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fa-IR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
};

async function SinglePost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-screen-md mx-auto px-4 sm:px-6 py-6 md:py-8">
      <nav className="flex items-center gap-2 text-sm text-secondary-500 mb-6">
        <a href="/" className="hover:text-primary-600">خانه</a>
        <span>/</span>
        <a href="/blogs" className="hover:text-primary-600">بلاگ‌ها</a>
        <span>/</span>
        <span className="text-secondary-700 truncate">{post.title}</span>
      </nav>

      <header className="mb-8">
        {post.category && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs sm:text-sm">
              {post.category.title}
            </span>
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-secondary-500 border-b pb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-200 overflow-hidden">
              {post.author.avatarUrl ? (
                <Image src={post.author.avatarUrl} alt={post.author.name} width={40} height={40} className="object-cover" />
              ) : (
                <UserIcon className="w-full h-full p-2 text-secondary-400" />
              )}
            </div>
            <span className="font-medium text-secondary-700">{post.author.name}</span>
          </div>

          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
            <span>{formatDate(post.createdAt)}</span>
          </div>

          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
            <span>{toPersianDigits(post.readingTime)} دقیقه</span>
          </div>
        </div>
      </header>

      <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
        <Image
          className="object-cover hover:scale-105 transition-transform duration-700"
          fill
          src={post.coverImageUrl}
          alt={post.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
          priority
        />
      </div>

      <div className="prose prose-sm sm:prose-base max-w-none text-secondary-600 mb-10">
        {post.briefText && (
          <div className="bg-primary-50/30 border-r-4 border-primary-500 p-4 sm:p-6 rounded-xl mb-8 text-base sm:text-lg">
            {post.briefText}
          </div>
        )}
        <div className="whitespace-pre-line text-justify">
          {post.text}
        </div>
      </div>

      {post.related?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-800 mb-6 border-r-4 border-primary-500 pr-4">
            پست‌های مرتبط
          </h2>
          <RelatedPost posts={post.related} />
        </section>
      )}

      <section className="border-t border-secondary-200 pt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-secondary-800 mb-6 border-r-4 border-primary-500 pr-4">
          نظرات
        </h2>
        <PostComment post={post} />
      </section>
    </article>
  );
}

export default SinglePost;