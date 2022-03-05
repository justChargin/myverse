import ReactiveButton from "reactive-button";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import convertEth from "ether-converter";
import styles from "../styles/DonateButton.module.css";
import ethPrice from "eth-price";

export default function DonateButton() {
  const [status, setStatus] = useState("idle");
  const [ethValue, setEthValue] = useState(0.001);
  const [usd, setUsd] = useState("");

  const ownerAddress = process.env.WALLET_ADDRESS;

  const transactionParameters = {
    to: ownerAddress,
    from: window.ethereum.selectedAddress,
    value: parseInt(convertEth(ethValue, "eth", "wei")).toString(16), // hex
    gasLimit: "0",
  };

  const donate = async () => {
    setStatus("loading");
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      setStatus("success");
      return "https://rinkeby.etherscan.io/tx/" + txHash;
    } catch (error) {
      setStatus("error");
      return error;
    }
  };

  useEffect(async () => {
    await usdConverter();
  }, [ethValue]);

  const valueController = async (type) => {
    if (type == "increase") {
      let increasedValue = Number((ethValue + 0.001).toFixed(3));
      setEthValue(increasedValue);
    } else {
      let decreasedValue = Number((ethValue - 0.001).toFixed(3));
      ethValue > 0.001 ? setEthValue(decreasedValue) : "";
    }
  };

  const usdConverter = async () => {
    const res = await ethPrice("usd");
    const ethUSD = Number(res[0].slice(5));

    setUsd((ethUSD * ethValue).toFixed(2));
  };

  return (
    <div className={styles.donation}>
      <ReactiveButton
        buttonState={status}
        onClick={donate}
        color="green"
        size="large"
        shadow
        style={{ borderRadius: "10px" }}
        idleText={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              icon="bxs:coin-stack"
              width="25px"
              style={{ marginRight: ".5rem" }}
            />{" "}
            Donate
          </div>
        }
        loadingText={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              icon="eos-icons:loading"
              width="25px"
              style={{ marginRight: ".3rem" }}
            />{" "}
            Donating
          </div>
        }
        errorText={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              icon="bx:error-alt"
              width="25px"
              style={{ marginRight: ".3rem" }}
            />{" "}
            Couldn't Donate.
          </div>
        }
        successText={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              icon="ep:success-filled"
              width="25px"
              style={{ marginRight: ".3rem" }}
            />{" "}
            Thanks!
          </div>
        }
      />
      <div className={styles.price}>
        <button onClick={() => valueController("decrease")}>-</button>
        <span>{ethValue} ether</span>
        <button onClick={() => valueController("increase")}>+</button>
      </div>
      <span>{usd} $</span>
    </div>
  );
}
