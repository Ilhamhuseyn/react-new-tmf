// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={4} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="......."
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Xəbərlər
          </MKTypography>
          {/* <MKTypography variant="body1" color="text">
            Düzgün təhsil sisteminin qurulması və idarə edilməsi,
            <br /> əlbəttə ki, peşəkar təhsil menecerlərindən başlanır.
          </MKTypography> */}
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 7 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} sx={{ mt: 2, px: { xs: 0, lg: 12 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Təhsil menecerlərinin forumu
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Forum çıxıșlar və panel müzakirələrindən ibarətdir.
              </MKTypography>
            </MKBox>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
