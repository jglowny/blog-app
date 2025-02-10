import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  path: string;
  image: string;
  color: string;
  ico: string;
  type?: string;
}

export default function CategoryCard({
  name,
  path,
  image,
  color,
  ico,
  type,
}: CategoryCardProps) {
  return (
    <>
      {type === "slider" ? (
        <div
          key={name}
          className="w-[366px] rounded-tl-super-rounded rounded-br-super-rounded overflow-hidden cursor-pointer  m-auto"
        >
          <Link href={`/category/${path.toLowerCase()}`}>
            <Image src={`/${image}.png`} alt={name} width={366} height={100} />
            <div
              className={`h-1/2 ${color}
                } text-white flex flex-col items-center justify-center space-y-5 p-10`}
            >
              <h3 className="text-lg font-semibold">{name.toUpperCase()}</h3>
              <Image src={ico} alt={name} width={48} height={48} />
            </div>
          </Link>
        </div>
      ) : (
        <div
          key={name}
          className="w-[366px] md:w-[200px] lg:w-[366px]  rounded-tl-super-rounded rounded-br-super-rounded overflow-hidden cursor-pointer"
        >
          <Link href={`/category/${path.toLowerCase()}`}>
            <Image src={`/${image}.png`} alt={name} width={366} height={100} />
            <div
              className={`h-1/2 ${color}
            } text-white flex flex-col items-center justify-center space-y-5 p-10`}
            >
              <h3 className="text-lg font-semibold">{name.toUpperCase()}</h3>
              <Image src={ico} alt={name} width={48} height={48} />
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
