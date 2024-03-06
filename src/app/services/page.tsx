import { useGetServicesQuery } from "@/store/features/api/apiSlice";
import { Service } from "@prisma/client";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  console.log(data);
  return <div>Service page</div>;
}
