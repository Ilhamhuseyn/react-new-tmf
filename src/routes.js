/**
   Material Kit 2 React üçün bütün marşrutlar buraya əlavə olunur,
   Burada yeni marşrut əlavə edə, marşrutları fərdiləşdirə və marşrutları silə bilərsiniz.

   Bu fayla yeni marşrut əlavə etdikdən sonra o, avtomatik olaraq görünəcək
   Navbar.

   Yeni marşrut əlavə etmək üçün siz marşrutlar massivindəki mövcud marşrutları izləyə bilərsiniz.
   1. “Ad” düyməsi Navbar-da marşrutun adı üçün istifadə olunur.
   2. “İkon” düyməsi Navbar-da marşrutun simvolu üçün istifadə olunur.
   3. “Yığılma” düyməsi digər marşrutları ehtiva edən Navbar-da yığıla bilən element yaratmaq üçün istifadə olunur.
   daxilində (iç-içə marşrutlar), siz `dağılma` düyməsi üçün dəyər kimi massiv daxilində iç-içə marşrutları ötürməlisiniz.
   4. “Marşrut” düyməsi reaksiya yönləndiricisi üçün istifadə olunan marşrut yerini saxlamaq üçün istifadə olunur.
   5. “href” düyməsi xarici keçidlərin yerini saxlamaq üçün istifadə olunur.
   6. “komponent” açarı onun marşrutunun komponentini saxlamaq üçün istifadə olunur.
   7. "Açılır" düyməsi elementin yığışdırılan elementlər üçün açılan menyunu açmalı olduğunu müəyyən etmək üçün istifadə olunur.
   8. Təsviri müəyyən etmək üçün “təsvir” düyməsi istifadə olunur
           adı altında marşrut.
   9. “Sütunlar” düyməsi məzmunun açılan menyuda sütun şəklində necə görünəcəyini müəyyən etmək üçün istifadə olunur.
           bu açar əsasında sütunların miqdarını təyin edə bilərsiniz.
   10. `rowsPerColumn` düyməsi bir sütunda neçə sətir olması lazım olduğunu müəyyən etmək üçün istifadə olunur.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

import CallIcon from "@mui/icons-material/Call";
import NewspaperIcon from "@mui/icons-material/Newspaper";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
// import PeopleIcon from "@mui/icons-material/People";

// // Sections

import Movzular from "pages/LandingPages/Authors";
import Blog from "pages/LandingPages/Blog";

const routes = [
  {
    name: "ana səhifə",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "TMF",
        collapse: [
          {
            name: "Haqqımızda",
            route: "/haqqimizda",
            component: <AboutUs />,
          },
          {
            name: "Əlaqə",
            route: "/elaqe",
            component: <ContactUs />,
          },
          {
            name: "Müəllif",
            route: "/muellif",
            component: <Author />,
          },
        ],
      },
      {
        name: "Qeydiyyat",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "mövzular",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Mövzular",
        route: "/movzular",
        component: <Movzular />,
      },
      {
        name: "proqram",
        route: "/program",
        component: <Movzular />,
      },
    ],
  },
  {
    name: "Xəbərlər",
    icon: <NewspaperIcon />,
    route: "/xeberler",
    component: <Blog />,
    // collapse: [
    //   {
    //     name: "Mövzular",
    //     route: "/pages/landing-pages/movzular",
    //     component: <Movzular />,
    //   },
    //   {
    //     name: "proqram",
    //     route: "/pages/landing-pages/program",
    //     component: <Movzular />,
    //   },
    //   {
    //     name: "news1",
    //     route: "/pages/landing-pages/azerbaycan",
    //     component: <News1 />,
    //   },
    // ],
  },
  {
    name: "Əlaqə",
    icon: <CallIcon />,
    route: "/elaqe",
    component: <ContactUs />,
  },
];

export default routes;
