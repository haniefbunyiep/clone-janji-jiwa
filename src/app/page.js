import Image from "next/image";
import OurBrand from "../components/ourBrand";
import WhatsOnJiwaGroup from "../components/whatsOnJiwaGroup";
import CardPage from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Welcome to Janjiw</h1>
      <h1 className="text-3xl font-bold">Welcome to Janjiw</h1>
      <h1 className="text-3xl font-bold">Welcome to Janjiw</h1>
      <h1 className="text-3xl font-bold">Welcome to Janjiw</h1>
      <h1 className="text-3xl font-bold">Welcome to Janjiw</h1>
      <WhatsOnJiwaGroup />
      <CardPage />
    </main>
  );
}
