import React from "react";

import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const HomePage = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
