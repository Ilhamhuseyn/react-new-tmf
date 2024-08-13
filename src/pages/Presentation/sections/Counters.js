// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={400}
              suffix="+"
              title="İştirakçılar"
              description="İştirakçılar bərabərliyi, müxtəlifliyi və mükəmməlliyi təşviq edən inklüziv."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={12}
              title="Məruzəçilər"
              description="İştirakçılar bərabərliyi, müxtəlifliyi və mükəmməlliyi təşviq edən inklüziv."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
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

export default Counters;
