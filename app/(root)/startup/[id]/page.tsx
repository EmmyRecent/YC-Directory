import React from "react";

type PageType = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: PageType) => {
  const id = (await params).id;

  return <div>Startup id: {id}</div>;
};

export default page;
