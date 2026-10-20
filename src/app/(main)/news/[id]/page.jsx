import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailsById(id);
  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  //console.log("id", id);

  const news = await getNewsDetailsById(id);
  //console.log(news);
  return (
    <div className="container mx-auto my-8">
      <div className="card bg-base-100 shadow-sm mb-5 pb-5">
        <div className="card-body">
          {/* author info */}
          <div className="flex justify-between items-center bg-slate-100 p-4">
            <div className="flex gap-2 items-center">
              <Image
                src={news.author?.img}
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              ></Image>
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CiBookmark className="text-xl" />
              <CiShare2 className="text-xl" />
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
        </div>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full pb-5"
          />
        </figure>
        <p className="">{news.details}</p>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-4">
            <h2 className="flex gap-1 items-center">
              <CiStar />
              {news.rating.number}
            </h2>
            <h2 className="flex gap-2 items-center">
              <FaEye />
              {news.total_view}
            </h2>
          </div>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn bg-purple-500 text-white">
              See other news for this category <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
