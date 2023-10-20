import bakugan from "../../assets/pictures/carousel/bakugan.jpg";
import drak from "../../assets/pictures/carousel/drak.jpg";
import fenix from "../../assets/pictures/carousel/fenix.jpg";
import garfieldarakosnicek from "../../assets/pictures/carousel/garfieldArakosnicek.jpg";
import lodka from "../../assets/pictures/carousel/lodka.jpg";

export const CarouselsDatabase = [
  {
    id: 1,
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
