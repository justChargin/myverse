import styles from "../styles/About.module.css";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.screen}>
        <img src="/metame.png" />
        <h2>Emirhan Sirkeci</h2>
        <label>Web3 Developer</label>
        <p>
          I writing smartcontracts and generating NFT collections with
          Javascript. Besides that i can code a website where people can mint.
          Im using Next.JS and React.JS together for my projects.
        </p>
        <div className={styles.opacityText}>Technologies</div>

        <div className={styles.technologies}>
          <Icon
            icon="logos:solidity"
            color="#222"
            width="40"
            height="40"
            style={{ marginRight: "1rem" }}
          />
          <Icon width="80px" icon="logos:nextjs" />
          <Icon
            icon="akar-icons:react-fill"
            color="#222"
            width="40"
            height="40"
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className={styles.opacityText}>Social Links</div>

        <div className={styles.links}>
          <a href="https://github.com/justChargin" target="_blank">
            <Icon icon="akar-icons:github-fill" width="40" height="40" />
          </a>
          <a href="https://opensea.io/M1croNFT" target="_blank">
            <Icon icon="simple-icons:opensea" width="40" height="40" />
          </a>
          {/*<a href="https://www.upwork.com/freelancers/~0114a7a5117a83e1e6?viewMode=1">
            <Icon icon="bxl:upwork" color="#222" width="40" height="40" />
          </a>*/}
          <a
            href="https://open.spotify.com/user/mijamhnmzi3bgkss5867p12zp"
            target="_blank"
          >
            <Icon icon="akar-icons:spotify-fill" width="40" height="40" />
          </a>
          <a
            href="https://www.snapchat.com/add/woe000?share_id=5DCWP8k-f4w&locale=tr-TR"
            target="_blank"
          >
            <Icon icon="fa:snapchat-square" width="40" height="40" />
          </a>
        </div>
      </div>
    </section>
  );
}
