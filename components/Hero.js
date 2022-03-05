import styles from "../styles/Hero.module.css";
import Typical from "react-typical";
import React, { useState, useEffect } from "react";
import ConnectButton from "../components/ConnectButton";
import DonateButton from "../components/DonateButton";
import getWalletAddress from "../utils/getWalletAddress";

const TypeAnimation = React.memo(
  () => {
    return (
      <Typical
        steps={[
          "Hey,",
          1000,
          "Join to my metaverse!",
          500,
          "I mean...",
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

export default function Hero() {
  const [walletAddress, setWalletAddress] = useState();

  useEffect(async () => {
    const currentAddress = await getWalletAddress();
    setWalletAddress(currentAddress);

    addWalletListener();
  }, []);

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (accounts) => {
        setWalletAddress(accounts[0]);
      });
    }
  };

  return (
    <section className={styles.main}>
      <div>
        <div className={styles.introduction}>
          <span className={styles.typeAnimation}>
            <TypeAnimation />
          </span>
          {/* <button onClick={connectWallet} className={styles.btnGrad}>
            Connect
          </button> */}
          {walletAddress ? (
            <DonateButton />
          ) : (
            <ConnectButton setWalletAddress={setWalletAddress} />
          )}
        </div>
      </div>
    </section>
  );
}
