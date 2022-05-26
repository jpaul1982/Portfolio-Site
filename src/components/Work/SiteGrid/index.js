import React from "react";
import SiteItem from "./SiteItem";

// assets
import AerospaceLogo from "../../../assets/images/aerospace_logo.png";
import MalmborgsLogo from "../../../assets/images/malmborgs_logo.png";
import GeminiLogo from "../../../assets/images/gemini.png";
import ApplewoodLogo from "../../../assets/images/Applewood-logo.png";
import KeyPolLogo from "../../../assets/images/key_polymer_logo.png";
import KoKLogo from "../../../assets/images/KofKLogo.png";
import UnichemLogo from "../../../assets/images/unichem.png";
import ZubieLogo from "../../../assets/images/zubie.png";

const SiteGrid = () => {
  let works = [
    {
      companyName: "Malmborgs",
      background: "#102E24",
      logo: MalmborgsLogo,
      url: "https://malmborgsinc.com/",
    },
    {
      companyName: "Aerospace Fabrication",
      background: "#00A38A",
      logo: AerospaceLogo,
      url: "https://aerospacefab.com/",
    },
    {
      companyName: "GeminiAMS",
      background: "#19325A",
      logo: GeminiLogo,
      url: "https://geminiams.com/",
    },
    {
      background: "#F15D22",
      logo: ApplewoodLogo,
      url: "https://www.applewoodfixit.com/",
    },
    {
      companyName: "Keyl Polymer",
      background: "#16425B",
      logo: KeyPolLogo,
      url: "https://www.keypolymer.com/",
    },
    {
      background: "#00467F",
      logo: KoKLogo,
      url: "https://www.kingofkingswoodbury.org/",
    },
    {
      companyName: "Unichem",
      background: "#3653A3",
      logo: UnichemLogo,
      url: "https://www.unichem.com/",
    },
    {
      companyName: "Zubie",
      background: "#00C2DF",
      logo: ZubieLogo,
      url: "https://zubie.com/",
    },
  ];

  const makeKeys = () => {
    let i = 0;
    works.forEach((work) => {
      work.id = i;
      i++;
    });
  };
  makeKeys();
  return (
    <div style={{paddingTop: '5rem'}} className="flex-grid">
      {works.map((work, i) => (
        <SiteItem key={i} work={work} />
      ))}
    </div>
  );
};

export default SiteGrid;
