import ProductDetails from "@/components/ProductDetails";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <ProductDetails id={id} />
    </>
  );
}
