import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

const getCategories = async () => {
  "use cache";
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

const getNewsByCategorieId = async (category_id) => {
  "use cache";
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();
  //console.log("categories", categories.news_category);

  const news = await getNewsByCategorieId("0");
  console.log("news:", news);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 my-15">
      {/* ----col-1------ */}
      <div className="col-span-3 ">
        {/* activeId pore korbo */}
        <LeftSidebar categories={categories} activeId={"0"}></LeftSidebar>
      </div>
      {/* ----col-2------ */}
      <div className=" bg-purple-100 col-span-6">
        <h2 className="font-bold text-lg mb-5">All News</h2>
        <div className="space-y-4">
          {news.map((n) => {
            return (
              <div key={n._id} className="p-6 rounded-md border">
                {n.title}
              </div>
            );
          })}
        </div>
      </div>
      {/* ----col-3------ */}
      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
