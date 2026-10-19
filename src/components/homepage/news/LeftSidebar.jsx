import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-5">All Categories</h2>
      <ul className="flex flex-col gap-3">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`
                ${activeId == category.category_id && "bg-purple-500 text-white"}
                p-2 rounded-md text-md text-center text-gray-500   font-medium`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block"
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
