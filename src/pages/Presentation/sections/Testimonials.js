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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
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

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Tərəfdaşlar</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography> */}
        </Grid>
        {/* <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid> 
        </Grid>*/}
        <Divider sx={{ my: 6 }} />
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
      </Container>
    </MKBox>
  );
}

export default Information;
