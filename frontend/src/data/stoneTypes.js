import arsal1 from "../assets/HeroStones/arsal1.jpg";
import arsal2 from "../assets/HeroStones/arsal2.jpg";
import arsal3 from "../assets/HeroStones/arsal3.jpg";
import taria1 from "../assets/HeroStones/taria1.jpg";
import taria2 from "../assets/HeroStones/taria2.jpg";
import taria3 from "../assets/HeroStones/taria3.jpg";
import basalt1 from "../assets/HeroStones/bastal1.jpg";
import basalt2 from "../assets/HeroStones/bastal2.jpg";
import basalt3 from "../assets/HeroStones/bastal3.jpg";

export const stoneTypes = [
  { key: "kfair", swatch: "from-[#D8C4A0] to-[#B89B72]" },
  {
    key: "taria",
    images: [taria1, taria2, taria3],
    swatch: "from-[#E8DCC4] to-[#C9AD82]",
  },
  {
    key: "basalt",
    images: [basalt1, basalt2, basalt3],
    swatch: "from-[#8A8378] to-[#4A463F]",
  },
  {
    key: "arsal",
    images: [arsal1, arsal2, arsal3],
    swatch: "from-[#D6CBB8] to-[#A99373]",
  },
  { key: "shira", swatch: "from-[#DCD0BC] to-[#AD9873]" },
  { key: "testa", swatch: "from-[#F2ECE0] to-[#D6C9AE]" },
  { key: "rous", swatch: "from-[#C7B393] to-[#8C7350]" },
  { key: "labbaya", swatch: "from-[#E3CFC4] to-[#C0A088]" },
  { key: "saghbine", swatch: "from-[#E2D3A8] to-[#BFA463]" },
];

export const featuredStones = ["taria", "basalt", "arsal"];
