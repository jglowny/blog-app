import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  date: string;
  category?: string;
}

const changeColorCategoryText = (category: string) => {
  switch (category) {
    case "wiedza":
      return "text-knowledge";
    case "inspiracje":
      return "text-inspirations";
    case "interpretacje":
      return "text-interpretations";
    case "dostępne":
      return "text-accessible";
  }
};

const PostCard = ({ title, body, date, category }: PostCardProps) => {
  const queryString = encodeURIComponent(title);
  const myDate = new Date(date);
  return (
    <div className="w-[366px] h-[579px] rounded-tl-super-rounded rounded-br-super-rounded bg-gray-100 flex flex-col  justify-between items-stretch p-0 m-0 overflow-hidden pt-10 pb-10 pl-5 pr-5">
      {category && (
        <p className={`p-0 -mb-6 badge ${changeColorCategoryText(category)}`}>
          {category.toUpperCase()}
        </p>
      )}
      <h2 className="playfair-display title">{title}</h2>
      <p>{myDate.toLocaleDateString()}</p>
      <p className="text-gray-700 text-sm sm:text-base">
        {body.substring(0, 300)}...
      </p>
      <Link href={`/post/${queryString}`}>
        <button className="mt-2  text-black font-bold px-4 py-2 rounded transition-transform duration-300 hover:brightness-110 hover:scale-105">
          zobacz więcej{" "}
          <Image
            src={"/arrow.png"}
            alt="Arrow icon"
            className="inline"
            width={20}
            height={20}
          />
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
