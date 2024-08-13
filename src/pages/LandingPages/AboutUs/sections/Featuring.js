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

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
// import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
// import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
// import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
// import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
// import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
// import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";
import team1 from "assets/images/terefdaslar/aztv.jpg";
import team2 from "assets/images/terefdaslar/deyerler.jpg";
import team3 from "assets/images/terefdaslar/dunyamektebi.jpg";
import team4 from "assets/images/terefdaslar/edupess.jpg";
import team5 from "assets/images/terefdaslar/heydereliyev.jpg";
import team6 from "assets/images/terefdaslar/khazar.jpg";
import team7 from "assets/images/terefdaslar/kibris.jpg";
import team8 from "assets/images/terefdaslar/sia.jpg";
import team9 from "assets/images/terefdaslar/tehsilformu.jpg";
import team10 from "assets/images/terefdaslar/turk.jpg";
import team11 from "assets/images/terefdaslar/tmf.jpg";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <h2>Tərəfdaşlar</h2>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team1} alt="aztv" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team2} alt="deyerler mektebi" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team3} alt="dunyamektebi" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team4} alt="Edupres" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team5} alt="heydereliyev" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team6} alt="khazar university" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team7} alt="kibris ilim" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team8} alt="sia" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team9} alt="tehsil forumu" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team10} alt="turk" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={1}>
            <MKBox component="img" src={team11} alt="tmf" width="100%" opacity={0.6} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={400}
              separator=","
              suffix="+"
              title="İştirakçılar"
              description="İştirakçılar bərabərliyi, müxtəlifliyi və mükəmməlliyi təşviq edən inklüziv."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={12}
              separator=","
              title="Məruzəçilər"
              description="İştirakçılar bərabərliyi, müxtəlifliyi və mükəmməlliyi təşviq edən inklüziv."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={7}
              title="Mövzular"
              description="İştirakçılar bərabərliyi, müxtəlifliyi və mükəmməlliyi təşviq edən inklüziv."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
