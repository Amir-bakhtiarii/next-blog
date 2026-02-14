import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`, {
    next: { revalidate: 3600 }
  });
  
  const {
    data: { categories },
  } = await res.json();

  return (
    <div className="flex lg:flex-col gap-2 flex-wrap">
      <Link 
        href="/blogs/" 
        className="px-3 py-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors text-sm md:text-base text-center lg:text-right whitespace-nowrap lg:whitespace-normal"
      >
        همه
      </Link>
      
      {categories.map((category) => (
        <Link 
          key={category._id} 
          href={`/blogs/category/${category.slug}`}
          className="px-3 py-2 rounded-lg hover:bg-secondary-100 transition-colors text-secondary-600 hover:text-primary-600 text-sm md:text-base text-center lg:text-right whitespace-nowrap lg:whitespace-normal"
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;