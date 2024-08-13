// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/shamilsadiq2.jpg";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6}>
            <MKTypography variant="h4">Hədəfimiz</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Tədbirin keçirilməsində məqsəd təhsil sistemi və xidmətlərinin effektiv təşkili,
              kadrların idarə olunması, təhsildə informasiya texnologiyalarının tətbiqi və
              istifadəsi, keyfiyyətli təhsilin tədrisi, yeni dünyaya inteqrasiya istiqamətində doğru
              bildiyimiz yanlışları müəyyənləşdirmək, dövlət və özəl təhsil müəssisələri arasında
              işgüzar əlaqələrin və kommunikasiyanın daha da möhkəmləndirilməsinə xidmət edən
              platforma rolunu oynamaqdır.
            </MKTypography>
            {/* <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid item sx={12} md={6}>
            <MKTypography variant="h4">Aktuallıq</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından
              həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil
              işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması
              və idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji,
              elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini
              görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi ilə bağlı istər elmi-nəzəri,
              istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb
              deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil
              idarəetmənin tələbləri fərqlidir.
            </MKTypography>
            {/* <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid item sx={12} md={6}>
            <MKTypography variant="h4">Aktuallıq</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Bu sahədə inkişafa dəstək olmaq üçün belə bir forumun keçirilməsini zəruri hesab
              etdik. Hədəfimiz tanınmış təhsil idarəçilərinin, məktəb quruculuğunda birbaşa iştirak
              edən təhsil menecerlərinin təcrübələrini, nəzəriyyələrini, konseptlərini birbaşa
              özlərindən dinləmək imkanı yaratmağa çalışmaqdır. Təhsil nə qədər ümumbəşəri dəyər
              olsa da, onun idarə edilməsi, yönləndirilməsi, heç şübhəsiz, regional, milli
              xüsusiyyətlər nəzərə alınmaqla həyata keçirilməlidir. Məhz bunun üçün də təlimçilərin
              əksəriyyəti ölkəmizdə təhsil ictimaiyyətində qəbul edilən, təhsilə dair yanaşmaları,
              məktəb quruculuğunda böyük təcrübələri olan dəyərli ziyalılarımızdır.
            </MKTypography>
            {/* <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
