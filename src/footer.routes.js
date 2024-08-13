// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logoCT from "assets/images/logo-ct-dark.png";
import logoCT from "assets/images/tmf.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "TMF",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.instagram.com/hedefglobaltehsil",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/hedefglobaltehsil",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.facebook.com/hedefglobalgroup",
    },
  ],
  menus: [
    {
      name: "TMF",
      items: [
        { name: "Haqqımızda", href: "/" },
        { name: "Müəllif", href: "/" },
        { name: "Mövzular", href: "/" },
        { name: "Xəbərlər", href: "/" },
      ],
    },
    {
      name: "Əlaqə",
      items: [
        { name: "tel: 077 220 44 22", href: "/" },
        { name: "tel: 077 233 33 77", href: "/" },
        { name: "mail: global@hedefgroup.az", href: "/" },
      ],
    },
    {
      name: "Mövzular",
      items: [
        { name: "Uğurlu təhsil konsepsiyaları", href: "/" },
        { name: "Təhsildə idarəetmənin strategiyası", href: "/" },
        { name: "Məktəb idarəetməsindəki yanlışlıqlar", href: "/" },
        { name: "BAŞ OFİS", href: "/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Bütün hüquqlar qorunur. &copy; {date}{" "}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        TƏHSİL MENECERLƏRİNİN I FORUMU
      </MKTypography>
      .
    </MKTypography>
  ),
};
