export default async function getWalletAddress() {
  if (window.ethereum) {
    const addressArray = await window.ethereum.request({
      method: "eth_accounts",
    });
    const address = addressArray[0];
    return address;
  }
  return;
}
