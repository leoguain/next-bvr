import React from "react";

const AdsComponent = (dataAdSlot: any) => {
  return (
    <>
      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-6520138402418007"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

//style={{ display: "block" }}

export default AdsComponent;
