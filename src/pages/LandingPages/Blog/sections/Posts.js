import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import newsdata from "pages/Presentation/sections/data/newsdata";

function Places() {
  const renderData = newsdata.map(({ image, name, route, description }) => (
    <Grid item xs={12} md={4} sx={{ mb: { xs: 3, lg: 3 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} description={description} />
      </Link>
    </Grid>
  ));
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={1}>
            Xəbərlər
          </MKTypography>
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Rover raisesdsd $65 million"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/tmfqeyd",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/azerbaycan",
                element: <News1 />,
                color: "info",
                label: "etrafli",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "read more",
              }}
            />
          </Grid>
        </Grid> */}
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 4 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
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
                Forum çıxışlar və panel müzakirələrindən ibarətdir.
              </MKTypography>
            </MKBox>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
