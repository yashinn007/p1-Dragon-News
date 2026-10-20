import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategorieId } from "@/lib/data";
import { Suspense } from "react";

const NewsCategoryPage = ({ params }) => {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto my-15 text-center">
          Loading news...
        </div>
      }
    >
      <NewsCategoryContent params={params} />
    </Suspense>
  );
};

const NewsCategoryContent = async ({ params }) => {
  const { id } = await params;
  //console.log(id);
  // --------------------------------------------------------
  const categories = await getCategories();
  //console.log("categories", categories.news_category);

  const news = await getNewsByCategorieId(id);
  //console.log("news:", news);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 my-15">
      {/* ----col-1------ */}
      <div className="col-span-3 ">
        {/* activeId pore korbo */}
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>
      {/* ----col-2------ */}
      <div className="col-span-6 min-h-screen">
        <h2 className="font-bold text-lg mb-5">All News</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return <NewsCard key={n._id} news={n}></NewsCard>;
            })
          ) : (
            <div className="font-bold text-4xl text-center my-7">
              No news found
            </div>
          )}
        </div>
      </div>
      {/* ----col-3------ */}
      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
