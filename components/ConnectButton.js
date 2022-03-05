import ReactiveButton from "reactive-button";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileDetect from "mobile-detect";

export default function ConnectButton(props) {
  const [status, setStatus] = useState("idle");

  const connectMetamask = async () => {
    if (window.ethereum) {
      setStatus("loading");
      await ethereum
        .request({ method: "eth_requestAccounts" })
        .then((acc) => {
          setStatus("success");
          setTimeout(function () {
            props.setWalletAddress(acc[0]);
          }, 2500);
        })
        .catch((err) => setStatus("error"));
    } else {
      toast.error("You must install Metamask to connect myverse. CLICK ME!");
    }
  };

  const openInstallPage = () => {
    const md = new MobileDetect(navigator.userAgent);
    if (md.is("iPhone")) {
      window.open(
        "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
      );
    } else if (md.os() || md.mobile()) {
      window.open(
        "https://play.google.com/store/apps/details?id=io.metamask&hl=tr&gl=US"
      );
    } else {
      window.open(
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
      );
    }
  };

  return (
    <div>
      <ReactiveButton
        buttonState={status}
        color="primary"
        size="large"
        messageDuration={2500}
        shadow
        style={{ borderRadius: "10px" }}
        idleText="Connect"
        onClick={connectMetamask}
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
            Connecting
          </div>
        }
        errorText={
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon
              icon="bx:error-alt"
              width="25px"
              style={{ marginRight: ".3rem" }}
            />{" "}
            Couldn't Connect.
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
            Connected!
          </div>
        }
      />
      <ToastContainer position="bottom-right" onClick={openInstallPage} />
    </div>
  );
}
