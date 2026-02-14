import { Suspense } from "react";
import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import SpinnerMini from "@/ui/SpinnerMini";

async function BlogContent({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      
      <PostList posts={posts} />
    </>
  );
}

function BlogPage({ searchParams }) {
  return (
    <Suspense 
      key={JSON.stringify(searchParams)} 
      fallback={
        <div className="flex justify-center items-center py-20">
          <SpinnerMini />
          <span className="mr-3 text-secondary-500">در حال بارگذاری...</span>
        </div>
      }
    >
      <BlogContent searchParams={searchParams} />
    </Suspense>
  );
}

export default BlogPage;