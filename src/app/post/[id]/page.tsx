/* eslint-disable react/no-unescaped-entities */
"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getPostById } from "../../../utils/api";
import Image from "next/image";
interface Post {
  id: number;
  title: string;
  content: string;
}

const PostDetail = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id || searchParams.get("id");
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      const data = await getPostById(id as string);
      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(post.title));
    }
  }, [post]);

  const toggleFavorite = () => {
    if (!post) return;

    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter(
        (favTitle: string) => favTitle !== post.title
      );
    } else {
      favorites.push(post.title);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) return <p>Ładowanie posta...</p>;
  if (!post) return <p>Post nie znaleziony</p>;

  return (
    <div className="my-size">
      <div className="md:w-[400px] lg:w-[1200px] md:m-8 lg:m-12">
        <div className="mb-10">
          <div className="my-size flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h1 className="header__title" onClick={() => router.back()}>
              <span className="header__back">Blog Edukacyjny</span>
            </h1>
            <button
              onClick={toggleFavorite}
              className={`px-4 py-2 rounded  text-black`}
            >
              {isFavorite ? (
                <p className="flex items-center gap-2">
                  <Image src="/Icon.png" alt="Icon" width="30" height="30" />
                  <span>usuń z ulubionych</span>
                </p>
              ) : (
                <p className="flex items-center gap-2">
                  <Image src="/Icon(1).png" alt="Icon" width="30" height="30" />
                  <span>dodaj do ulubionych</span>
                </p>
              )}
            </button>
          </div>
        </div>
        <h1 className="article__title pt-10 ">{post.title}</h1>
        <p className="article__description pb-10">{post.content}</p>

        <h1 className="article__h2 pt-10 ">Lorem ipsum</h1>
        <p className="article__text pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.
        </p>
        <Image
          src="/article_image.png"
          alt="Article image"
          width={1200}
          height={500}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
        />
      </div>
    </div>
  );
};

export default PostDetail;
