import { Product } from "@prisma/client";
import Image from "next/image";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.BASE_URL}/api/products/${id}`);
  const product = (await res.json()) as Product;
  // const { data: product, error } = useGetProductQuery(id) as { data: IProduct, error: any }
  // if (error) return <div>Error loading product</div>
  if (!product) return <div>No product found</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {/* {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))} */}
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Title</dt>
              <dd className="mt-2 text-sm text-gray-500">{product.title}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Description</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {product.description}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="mt-2 text-sm text-gray-500">{product.price}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Brand</dt>
              <dd className="mt-2 text-sm text-gray-500">{product.brand}</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
