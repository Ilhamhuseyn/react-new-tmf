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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/spikerler/shamilsadiq.webp";
import team2 from "assets/images/spikerler/nergiz.webp";
import team3 from "assets/images/spikerler/orxan.webp";
import team4 from "assets/images/spikerler/fexri.webp";
import team5 from "assets/images/spikerler/qulu.webp";
import team6 from "assets/images/spikerler/ferid.webp";
import team7 from "assets/images/spikerler/hamlet.webp";
import team8 from "assets/images/spikerler/tebriz.webp";
import team9 from "assets/images/spikerler/anar.webp";
import team10 from "assets/images/spikerler/elvinaliyev.webp";
import team11 from "assets/images/spikerler/arif.webp";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Məruzəçilər
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Təhsil menecerlərinin forumu
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Şəmil Sadiq"
                position={{ color: "info", label: "SEO" }}
                description="Hədəf STEAM Liseyinin qurucusu."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Nərgiz Seyidzadə"
                position={{ color: "info", label: "İnsan Resursları" }}
                description="Azərbaycan İnsan Resursları Assosiasiyası” İctimai Birliyinin təsisçisi."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team3}
                name="Orxan Cabbarlı"
                position={{ color: "info", label: "Təhsil jurnalisti" }}
                description="Panel müzakirələrinin moderatoru. Təhsil jurnalisti."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team4}
                name="Fəxri Ağayev"
                position={{ color: "info", label: "Motivasion spikeri" }}
                description="Biznes məsləhətçisi, motivasion spikeri."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team5}
                name="Qulu Novruzov"
                position={{ color: "info", label: "Akademiyasının rəisi" }}
                description="Azərbaycan Respublikası Dövlət Gömrük Komitəsinin Akademiyasının rəisi."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team6}
                name="Fərid Seyfullayev"
                position={{ color: "info", label: "Təlimçi" }}
                description="NLP Master praktikantı, təlimçi, fəlsəfə doktoru."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team7}
                name="Hamlet İsaxanlı"
                position={{ color: "info", label: "Professor" }}
                description="Riyaziyyatçı, fizika-riyaziyyat elmləri doktoru, professor."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team8}
                name="Təbriz Hacınski"
                position={{ color: "info", label: "Biznes təlimçisi" }}
                description="“CIBS Europe” təlim mərkəzinin təsisçisi, “Yalanın Beynəlxalq Araşdırılması Akademiyası”nın mütəxəssis profayleri, biznes təlimçisi."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team9}
                name="Anar Mustafazadə"
                position={{ color: "info", label: "Müdir" }}
                description="Bakı Şəhər Təhsil İdarəsində Keyfiyyətə nəzarət sektorunun müdiri."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team10}
                name="Elvin Əliyev"
                position={{ color: "info", label: "Tarix" }}
                description="Tarix üzrə fəlsəfə doktoru, dosent."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team11}
                name="Arif Əsədov"
                position={{ color: "info", label: "Ekologiya liseyi direktoru" }}
                description="291 nömrəli Ekologiya liseyi direktoru, filologiya üzrə fəlsəfə doktoru."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
