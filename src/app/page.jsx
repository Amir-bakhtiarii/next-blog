import Button from "@/ui/Button";
import Link from "next/link";
import { BookOpenIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "خانه - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16 mt-12">
      <h1 className="font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-800 mb-6 md:mb-8">
        اپلیکیشن مدیریت <span className="text-primary-600">بلاگ</span>
      </h1>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-secondary-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          در نکست بلاگ که می‌تونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          <br className="hidden sm:block" />
          بلاگ بساز ، کامنت بذار و همه اتفاقات رو رصد کن!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            className="w-full sm:w-60 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <BookOpenIcon className="w-5 h-5" />
            <Link href="/blogs" className="py-2">
              مطالعه بلاگ‌ها
            </Link>
          </Button>

          <Button
            variant="primary"
            className="w-full sm:w-60 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <Cog6ToothIcon className="w-5 h-5" />
            <Link href="/profile" className="py-2">
              مدیریت بلاگ‌ها
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
