import Head from "next/head";
import { getPostByCategory } from "../../../utils/api";
import CategoryList from "../../../components/CategoryList";
import PostList from "../../../components/PostList";

type Params = Promise<{ category: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const category = params.category;

  interface PostData {
    id: number;
    title: string;
    description: string;
    publishedAt: string;
    category: string;
    article: string;
  }

  const data: PostData[] = await getPostByCategory(category);
  const articles: PostData[] = data.map((item) => item);
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
      <PostList articles={articles} category={category} />
    </div>
  );
}
