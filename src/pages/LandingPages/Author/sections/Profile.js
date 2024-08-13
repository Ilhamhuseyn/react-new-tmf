/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/samilsadiq.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Şəmil Sadiq</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    1800+&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    410&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Bu günün dünyasında elm və texnologiya elə sürətlə inkişaf edir ki, bəzən nəinki bu
                inkişafa çatmaq, hətta onu izləmək belə çətin görünür. Ancaq bu dəyişikliyin
                mühərrikinin elə insanın özü olduğunu da bilirik – dinindən, dilindən, cinsindən
                asılı olmayaraq elmi təfəkkürə sahib, məntiqli mühakimə yürüdə bilən, qıvraq xəyal
                gücü ilə zamanı qabaqlaya bilən insan. Biz sənədli ﬁlmlərdə və texnologiya
                xəbərlərində Marsa enəcək kosmik zondu gördükdə, istifadə etdiyimiz ağıllı
                telefonların yeni funksiyalarını kəşf etdikdə, genetik tibdəki yeniliklərdən xəbər
                tutduqda, çağdaş bir memarlıq abidəsini gördükdə, yüzlərlə insanı bir neçə saat
                ərzində dünyanın bir ucundan digər ucuna daşıyan hava gəmiləri ilə uçduqda,
                istər-istəməz “bunu yaradan dahidir”, “bu, bir möcüzədir” deyə düşünür, o məhsulları
                yaradan şəxslərin adlarını bilməsək belə içimizdə onlara təşəkkür edirik. Bu gün
                Samsung, Apple, Facebook, Miscrosoft, Amazon kimi şirkətlərin büdcəsini bir çox
                dövlətin büdcəsi ilə müqayisə etməklə texnologiyanın iqtisadi güc kimi böyüklüyünü
                təqdir etmək mümkündür. Sizi əvvəlcə bu şirkətlərin yaranma tarixçələri, bügünkü
                fəaliyyət miqyasları və iqtisadi imkanları ilə, eyni zamanda bizim hədəﬂərimizlə
                tanış olmağa və “Hədəf”li bir balabilgənin valideyni olmağa dəvət edirik. <br />
                <MKTypography
                  component="a"
                  href="https://shamilsadiq.az/"
                  target="_blank"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Daha ətraflı <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
