import Head from "next/head";
import { fetchAllCategoriesParallel } from "../../src/utils/api";
import PostList from "../components/PostList";
import CategoryList from "@/components/CategoryList";
export default async function Page() {
  const data = await fetchAllCategoriesParallel();
  const articles = data.map(
    (item: {
      category: string;
      article: { title: string; content: string };
    }) => ({
      ...item.article,
      id: 0, // Add appropriate id
      description: "", // Add appropriate description
      publishedAt: "", // Add appropriate publishedAt date
      category: item.category,
    })
  );
  return (
    <div className="mb-16">
      <Head>
        <title>Blog - Next.js 15</title>
      </Head>
      <div className="mb-10">
        <div className="my-size">
          <h1 className="header__title">Blog Edukacyjny</h1>
        </div>
      </div>

      <div className="bg-gray-100 p-0 m-0 justify-center items-center appla">
        <div className="my-size">
          <h2 className="text-xl font-bold mb-5">Kategorie</h2>
          <div>
            <CategoryList />
          </div>
        </div>
      </div>
      <PostList articles={articles} />
    </div>
  );
}
