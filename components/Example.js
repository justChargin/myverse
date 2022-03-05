import Typical from "react-typical";
import React, { useState } from "react";

const TypeAnimation = React.memo(
  () => {
    return (
      //   <p>"Hello"</p>
      <Typical
        steps={[
          "Hey!",
          1000,
          "Connect To My Metaverse",
          500,
          "I mean... Myverse.",
          500,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    );
  },
  (props, prevPros) => true
);

export default function Navbar() {
  let [state, setState] = useState("no");

  return (
    <div>
      <TypeAnimation />
      <span className="ms-4">
        <kbd className={state ? "text-light" : state}>
          hello, im a web developer and nft designer
        </kbd>
      </span>
    </div>
  );
}
