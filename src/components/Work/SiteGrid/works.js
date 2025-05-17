// assets
import WestBusinessLogo from "../../../assets/images/west-business-interiors-logo.svg";
import ImmigrationGroupLogo from "../../../assets/images/immigration group.svg";
// import GeminiLogo from "../../../assets/images/gemini.png";
// import ApplewoodLogo from "../../../assets/images/Applewood-logo.png";
import KoKLogo from "../../../assets/images/KofKLogo.png";
// import ZubieLogo from "../../../assets/images/zubie.png";
import ChartwellLogo from "../../../assets/images/chartwell-logo.webp";
import FCLogo from "../../../assets/images/FClogo-compressed.2022_FC.Black_.compressed.logo_.png";
import GenesisLogo from "../../../assets/images/Genesis-Logo-1.png"
import NCFLLogo from "../../../assets/images/Layer_1-2.svg"
import e47Logo from "../../../assets/images/Frame10.svg"
import MSMALogo from "../../../assets/images/cropped-logo_red-2.webp"
import GreenRiverLogo from "../../../assets/images/green-river.svg"
import REFarrisLogo from "../../../assets/images/refarris.svg"
import WiredHumanLogo from "../../../assets/images/wired-human.svg"
import GreatlawnsLogo from "../../../assets/images/great-lawns.svg"
import SwanLogo from "../../../assets/images/swan.png"
import LLLogo from "../../../assets/images/LLeigh.svg"
import DDLogo from "../../../assets/images/ddlogo.png"

let works = [
  {
    companyName: "Great Lawns Turf Care",
    background: "#005742",
    logo: GreatlawnsLogo,
    url: "https://greatlawnsturf.com/",
  },
  {
    companyName: "Leisure Leigh Travel",
    background: "#073452",
    logo: LLLogo,
    url: "https://leisureleightravel.com/",
  },
  {
    companyName: "Wired Human",
    background: "#272E3E",
    logo: WiredHumanLogo,
    url: "https://wiredhuman.org/",
  },
  {
    companyName: "RE Farris Cabinets LLC",
    background: "#EAEAEA",
    logo: REFarrisLogo,
    url: "https://refarriscabinets.com/",
  },
  {
    companyName: "Serenity at Swan",
    background: "#0F2C42",
    logo: SwanLogo,
    url: "https://serenityatswan.com/",
  },
  {
    companyName: "Green River Marina",
    background: "#0D2E4F",
    logo: GreenRiverLogo,
    url: "https://greenrivermarina.com/",
  },
  {
    companyName: "Florida College",
    background: "#c41230",
    logo: FCLogo,
    url: "https://floridacollege.edu/",
  },
  {
    companyName: "West Business Interiors",
    background: "#F6F5F3",
    logo: WestBusinessLogo,
    url: "https://westinteriors.com/",
  },
  {
    companyName: "Immigration Group",
    background: "#091F40",
    logo: ImmigrationGroupLogo,
    url: "https://immigrationgrp.com/",
  },
  {
    companyName: "Chartwell Hospitality",
    background: "#003265",
    logo: ChartwellLogo,
    url: "https://www.chartwellhospitality.com/",
  },
  {
    companyName: "Genesis Engineering",
    background: "#1d232c",
    logo: GenesisLogo,
    url: "https://geneng.net/",
  },
  // {
  //   companyName: "GeminiAMS",
  //   background: "#19325A",
  //   logo: GeminiLogo,
  //   url: "https://geminiams.com/",
  // },
  {
    companyName: "NCFL",
    background: "#a5a940",
    logo: NCFLLogo,
    url: "https://familieslearning.org/",
  },
  {
    companyName: "Diamond Mobile Detailing",
    background: "#111111",
    logo: DDLogo,
    url: "https://diamondmobiledetailingmn.com/",
  },
  // {
  //   background: "#F15D22",
  //   logo: ApplewoodLogo,
  //   url: "https://www.applewoodfixit.com/",
  // },
  {
    background: "#00467F",
    logo: KoKLogo,
    url: "https://www.kingofkingswoodbury.org/",
  },
  {
    companyName: "Element 47",
    background: "#F6BF5B",
    logo: e47Logo,
    url: "https://element47.co/",
  },
  {
    companyName: "MSMA",
    background: "#FF5B04",
    logo: MSMALogo,
    url: "https://www.msmachisago.com/",
  },
  // {
  //   companyName: "Zubie",
  //   background: "#00C2DF",
  //   logo: ZubieLogo,
  //   url: "https://zubie.com/",
  // }
];

const makeKeys = () => {
  let i = 0;
  works.forEach((work) => {
    work.id = i;
    i++;
  });
};

makeKeys();

export default works;