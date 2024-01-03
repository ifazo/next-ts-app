import CategoryList from "@/components/CategoryList";
import CategoryPreview from "@/components/CategoryPreview";
import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";
import LogoClouds from "@/components/LogoClouds";
import WorkspaceCard from "@/components/WoekspaceCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
      <FeaturedCard />
      <CategoryPreview />
      <WorkspaceCard />
      <LogoClouds />
    </main>
  )
}
