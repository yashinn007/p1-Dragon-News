import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col">
      <h2 className="font-bold text-5xl text-purple-500">
        This page is not found
      </h2>
      <Link href={"/"}>
        <button className="btn btn-primary mt-10">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
