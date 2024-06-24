"use client";

import { api } from "@/trpc/react";

const ClientComponent = () => {
  api.post.getLatest.useSuspenseQuery();
  return "";
};

export default ClientComponent;
