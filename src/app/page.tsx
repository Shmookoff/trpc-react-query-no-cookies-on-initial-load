import { api } from "@/trpc/server";
import ClientComponent from "./_components/client";

export default async function Home() {
  await api.post.hello({text: "world"})
  return <ClientComponent />;
}
