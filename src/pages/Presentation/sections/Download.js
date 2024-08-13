// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import team1 from "assets/images/spikerler/shamilsadiq.webp";
// import team2 from "assets/images/spikerler/nergiz.webp";
import team1 from "assets/images/terefdaslar/HEDEFGROUP.jpg";
import team3 from "assets/images/terefdaslar/hedefliseyi.jpg";
import team4 from "assets/images/terefdaslar/hedefglobal.jpg";
import team5 from "assets/images/terefdaslar/sinkod.jpg";
import bgImage from "assets/images/shapes/waves-white.svg";
//import bgImages from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              UI Kit for ReactJS &amp; MUI?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Cause if you do, it can be yours for FREE. Hit the button below to navigate to
              Creative Tim where you can find the Design System in HTML. Start a new project or give
              an old Bootstrap project a new look!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Əməkdaşlar
            </MKTypography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={6} md={4} lg={3}>
                <Tooltip title="Hədəf şirkətlər qrupu">
                  <MKBox component="a" href="https://www.hedefgroup.az/" target="_blank">
                    <MKBox
                      component="img"
                      src={team1}
                      alt="pattern-lines"
                      width="100%"
                      zIndex={1}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <Tooltip title="Hədəf STEAM Liseyi">
                  <MKBox component="a" href="https://www.hedefliseyi.edu.az/" target="_blank">
                    <MKBox
                      component="img"
                      src={team3}
                      alt="pattern-lines"
                      width="100%"
                      zIndex={1}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <Tooltip title="Hədəf Qlobal">
                  <MKBox component="a" href="https://www.hedefglobal.az/" target="_blank">
                    <MKBox
                      component="img"
                      src={team4}
                      alt="pattern-lines"
                      width="100%"
                      zIndex={1}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <Tooltip title="Sinkod yayın və dağıtım">
                  <MKBox component="a" href="https://www.sinkod.az/" target="_blank">
                    <MKBox
                      component="img"
                      src={team5}
                      alt="pattern-lines"
                      width="100%"
                      zIndex={1}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
