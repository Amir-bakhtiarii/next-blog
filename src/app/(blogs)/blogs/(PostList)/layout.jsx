import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import BlogSort from "../_components/BlogSort";

export const metadata = {
  title: "بلاگ ها",
};

function layout({ children }) {
  return (
    <div className="px-3 sm:px-4 md:px-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6 text-secondary-700 mb-6 md:mb-8 lg:mb-12">
        <h1 className="text-xl md:text-2xl font-bold text-center sm:text-right">
          لیست بلاگ ها
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="w-full sm:w-64">
            <Search />
          </div>
          <div className="w-full sm:w-48">
            <BlogSort />
          </div>
        </div>
      </div>

      <div className="block lg:hidden mb-6">
        <div className="bg-secondary-50 rounded-xl p-4">
          <h2 className="text-lg font-bold mb-3 text-secondary-700 border-b pb-2">
            دسته‌بندی‌ها
          </h2>
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-secondary-50 rounded-xl p-4 sticky top-20 max-h-[calc(100vh-80px)] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4 text-secondary-700 border-b pb-2">
              دسته‌بندی‌ها
            </h2>
            <Suspense fallback={<Spinner />}>
              <CategoryList />
            </Suspense>
          </div>
        </aside>

        <main className="lg:col-span-9">
          {children}
        </main>
      </div>
    </div>
  );
}

export default layout;