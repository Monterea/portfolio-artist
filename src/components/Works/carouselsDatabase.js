import jirikKalendar from "../../assets/pictures/carousel/JirikKalendar.png";
import beaKalendar from "../../assets/pictures/carousel/beaKalendar.png";
import bakugan from "../../assets/pictures/carousel/bakugan.jpg";
import dansptaky from "../../assets/pictures/carousel/danSptaky.jpg";
import drak from "../../assets/pictures/carousel/drak.jpg";
import fenix from "../../assets/pictures/carousel/fenix.jpg";
import garfieldarakosnicek from "../../assets/pictures/carousel/garfieldArakosnicek.jpg";
import karmickaastrologie from "../../assets/pictures/carousel/Karmická astrologie3.jpg";
import lodka from "../../assets/pictures/carousel/lodka.jpg";
import magickyhrnek from "../../assets/pictures/carousel/magickyHrnek.jpg";
import motylci from "../../assets/pictures/carousel/motylci.jpg";
import nato from "../../assets/pictures/carousel/nato.jpg";
import radix1 from "../../assets/pictures/carousel/Radix1.jpg";
import radix2 from "../../assets/pictures/carousel/Radix2.jpg";
import radix8 from "../../assets/pictures/carousel/Radix8.jpg";
import robutek from "../../assets/pictures/carousel/robutek.png";
import splavmatysek from "../../assets/pictures/carousel/splavMatysek.jpg";

export const CarouselsDatabase = [
  {
    id: 1,
    title: "Grafika",
    descriptions: [
      "Grafická tvorba využívající průhlednosti a\u00a0vrstev.",
      "Použité programy a nástroje:",
      "GIMP - rastrový grafický editor, který se\u00a0používá se\u00a0zejména pro\u00a0retušování a\u00a0úpravy obrázků, fotografií, kreslení rukou, převod mezi různými formáty obrázků, tvorbu webové grafiky a\u00a0specializovanější práce.",
      "Photopea - software na\u00a0úpravu a\u00a0zpracování rastrových a\u00a0vektorových obrázků od\u00a0českého vývojáře Ivana Kuckira.",
      "Inkscape - nástroj na\u00a0tvorbu a\u00a0úpravu vektorové grafiky.",
      "Zoner Callisto - vektorový grafický editor.",
    ],
    pictures: [
      {
        id: 1,
        addition: "chlapecký roční kalendář pro vklad vlastní fotografie",
        image: jirikKalendar,
      },
      {
        id: 2,
        addition: "dívčí roční kalendář pro vklad vlastní fotografie",
        image: beaKalendar,
      },
      {
        id: 3,
        addition: "chlapecký roční kalendář pro vklad vlastní fotografie",
        image: jirikKalendar,
      },
      {
        id: 4,
        addition: "měsíční kalendář pro vklad vlastní fotografie",
        image: splavmatysek,
      },
      {
        id: 5,
        addition: "vrstva pro tisk na magický hrnek měnící barvu povrchu",
        image: magickyhrnek,
      },
      {
        id: 6,
        addition: "nápaditá magnetka pomocí koláže",
        image: motylci,
      },
      {
        id: 7,
        addition: "pozadí na plochu počítače pomocí koláže",
        image: nato,
      },
      {
        id: 8,
        addition: "nápaditá magnetka pomocí koláže",
        image: dansptaky,
      },
      {
        id: 9,
        addition: "responzivní vektorový obrázek",
        image: robutek,
      },
    ],
  },
  {
    id: 2,
    title: "Tvorba digitální publikace",
    descriptions: [
      "Použité programy a nástroje:",
      "Adobe InDesign - nástroj pro návrh a\u00a0rozvržení stránek pro\u00a0desktopové a\u00a0digitální publikování.",
      "GIMP - rastrový grafický editor, který se\u00a0používá se\u00a0zejména pro retušování a\u00a0úpravy obrázků, fotografií, kreslení rukou, převod mezi různými formáty obrázků, tvorbu webové grafiky a\u00a0specializovanější práce.",
      "Inkscape - nástroj na\u00a0tvorbu a\u00a0úpravu vektorové grafiky.",
    ],
    pictures: [
      {
        id: 1,
        image: radix1,
      },
      {
        id: 2,
        image: radix2,
      },
      {
        id: 3,
        image: radix8,
      },
      {
        id: 4,
        image: karmickaastrologie,
      },
    ],
  },
  {
    id: 3,
    title: "Malby",
    descriptions: [
      "Ruční velkometrážová malba na\u00a0vnitřní stěnu místnosti bez použití projektoru pro základní nákres obrazu.",
      "Podklad: stěrková hmota / první vnitřní nátěr",
      "Použité materiály: bílá malířská základní barva a\u00a0tónovací matné barvy pro\u00a0vnitřní a\u00a0vnější použití.",
    ],
    pictures: [
      {
        id: 1,
        name: "Fénix",
        addition: "velikost obrazu: výška 170cm a šířka 139cm",
        image: fenix,
      },
      {
        id: 2,
        name: "Drak z animovaného seriálu Bakugan",
        addition: "velikost obrazu: výška 195cm a šířka 280cm",
        image: drak,
      },
      {
        id: 3,
        name: "Mechický robot z animovaného seriálu Bakugan",
        addition: "velikost obrazu: výška 180cm a šířka 127cm",
        image: bakugan,
      },
      {
        id: 4,
        name: "Garfield a Rákosníček",
        addition: "Garfield - velikost obrazu: výška 145cm a šířka 86cm",
        addition1: "Rákosníček - velikost obrazu: výška 110cm a šířka 133cm",
        image: garfieldarakosnicek,
      },
      {
        id: 5,
        name: "Loď - mozaika",
        addition: "velikost obrazu: výška 242cm a šířka 234cm",
        image: lodka,
      },
    ],
  },
];
