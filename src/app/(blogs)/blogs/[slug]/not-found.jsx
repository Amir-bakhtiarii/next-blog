import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4">
          404
        </h1>
        <p className="text-lg sm:text-xl text-secondary-600 mb-6">
          هیچ پستی با این مشخصات یافت نشد
        </p>
        <Link 
          href="/blogs" 
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          مشاهده همه پست‌ها
        </Link>
      </div>
    </div>
  );
}

export default NotFound;