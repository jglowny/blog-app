import PostCard from "./PostCard";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
}

interface PostListProps {
  articles: Post[];
  category?: string;
}

const PostList = ({ articles, category }: PostListProps) => {
  const categoryLabel: string =
    category === "dostepne" ? "dostępne" : category ?? "";
  return (
    <div className="my-size">
      <div className="mb-10 flex justify-between">
        <div className="flex space-gap-2">
          <p className="breadcrumb">Wpisy:</p>
          {categoryLabel && (
            <>
              <p>
                <span className="breadcrumb__item">
                  {categoryLabel.toUpperCase()}
                </span>
              </p>
              <Link href={`/`}>
                <span>X</span>
              </Link>
            </>
          )}
        </div>
        <div className="flex gap-4">
          <p className="breadcrumb__item">WSZYSTKIE</p>/
          <Link href={`/favorites`}>
            <p className="breadcrumb">ULUBIONE</p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {articles &&
          articles.length > 0 &&
          articles.map((post, index) => (
            <PostCard
              key={`post.id-${index}`}
              id={post.id}
              title={post.title}
              body={post.description}
              date={post.publishedAt}
              category={post.category ?? categoryLabel ?? undefined}
            />
          ))}
      </div>
    </div>
  );
};

export default PostList;
