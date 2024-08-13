// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import profilePicture from "assets/images/samilsadiq.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Hədəfimiz"
                    description=" Tədbirin keçirilməsində məqsəd təhsil sistemi və xidmətlərinin effektiv təşkili, kadrların idarə olunması, təhsildə informasiya texnologiyalarının tətbiqi və istifadəsi, keyfiyyətli təhsilin tədrisi, yeni dünyaya inteqrasiya istiqamətində doğru bildiyimiz
                    yanlışları müəyyənləşdirmək, dövlət və özəl təhsil müəssisələri arasında işgüzar əlaqələrin və kommunikasiyanın daha da möhkəmləndirilməsinə xidmət edən platforma rolunu oynamaqdır."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Aktuallıq"
                    description="Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması və
                    idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji, elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi
                    ilə bağlı istər elmi-nəzəri, istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil idarəetmənin tələbləri fərqlidir."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    description="Bu sahədə inkişafa dəstək olmaq üçün belə bir forumun keçirilməsini zəruri hesab etdik. Hədəfimiz tanınmış təhsil idarəçilərinin, məktəb quruculuğunda birbaşa iştirak edən təhsil menecerlərinin təcrübələrini, nəzəriyyələrini, konseptlərini birbaşa özlərindən
                    dinləmək imkanı yaratmağa çalışmaqdır. Təhsil nə qədər ümumbəşəri dəyər olsa da, onun idarə edilməsi, yönləndirilməsi, heç şübhəsiz, regional, milli xüsusiyyətlər nəzərə alınmaqla həyata keçirilməlidir. Məhz bunun üçün
                    də təlimçilərin əksəriyyəti ölkəmizdə təhsil ictimaiyyətində qəbul edilən, təhsilə dair yanaşmaları, məktəb quruculuğunda böyük təcrübələri olan dəyərli ziyalılarımızdır."
                  />
                </MKBox>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid>
            <MKBox textAlign="center">
              <img src={profilePicture} alt="Burce Mars" size="xxl" />
            </MKBox>
            {/* <CenteredBlogCard
              image={profilePicture}
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
