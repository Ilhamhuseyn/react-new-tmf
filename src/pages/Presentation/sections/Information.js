// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    TMF
                    <br />
                    Qeydiyyatdan keç
                  </>
                }
                description="."
              />
              <RotatingCardBack
                image={bgBack}
                title="TMF"
                description="Təhsil menecerlərin forumu"
                action={{
                  type: "internal",
                  route: "https://forms.gle/VhcJRxTnL2BsobRt8",
                  label: "Bilet Al",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="content_copy"
                  icon={<HistoryToggleOffIcon fontSize="large" color="info" />}
                  title="XXI əsr trendləri"
                  description="Texnologiyanın sürətli inkişafı ilə müəllimlərin ən son yeniliklərdən xəbərdar olmaları və şagirdlərin öyrənmə keyfiyyətini yaxşılaşdırmaq üçün tədrislərində texnologiyanın necə tətbiq olunacağını öyrənmələri vacibdir. Forum bu cür bilik mübadiləsi və öyrənmə üçün bir platforma təqdim edir."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="İnklüzivlik"
                  description="İştirakçılar bərabərliyi, müxtəlifliyi və mükəmməlliyi təşviq edən inklüziv təcrübələrini inkişaf etdirə bilərlər. Azərbaycanda inklüziv təhsil xüsusilə vacibdir, çünki ölkənin mədəni, dil və dini mənşəyində müxtəlifliklər var. Bu müxtəliflikdə bərabərlik yaratmaq üçün forumda vacib ipucular veriləcək."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<AccountBalanceWalletIcon fontSize="large" color="info" />}
                  title="Biletin qiyməti"
                  description="99 manat    ."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<WorkspacePremiumIcon fontSize="large" color="info" />}
                  title="Sertifikat"
                  description="Təhsil forumunda iştirak edən bütün iştirakçılara SERTİFİKAT veriləcəkdir."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
