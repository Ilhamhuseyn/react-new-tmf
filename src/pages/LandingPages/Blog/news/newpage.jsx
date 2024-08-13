// src/pages/LandingPages/Blog/news/news1.js
import React from "react";
// import { Link } from "react-router-dom";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "pages/LandingPages/Author/sections/Footer";
import routes from "routes";
import bgImage from "assets/images/tmf.webp";
import Pages from "pages/Presentation/sections/Pages";
// import Container from "@mui/material/Container";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Grid from "@mui/material/Grid";
import foto from "assets/images/macbook.png";
function SpecialComponent() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://forms.gle/VhcJRxTnL2BsobRt8",
          label: "qeydiyyatdan keç",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="11rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <MKBox display="flex" justifyContent="center" p={3}>
          <Grid item xs={12} md={12}>
            <MKBox mb={5}>
              <DefaultInfoCard
                image={foto}
                title="Aktuallıq"
                description="Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması və
                    idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji, elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi
                    ilə bağlı istər elmi-nəzəri, istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil idarəetmənin tələbləri fərqlidir.
                    Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması və
                    idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji, elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi
                    ilə bağlı istər elmi-nəzəri, istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil idarəetmənin tələbləri fərqlidir.Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması və
                    idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji, elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi
                    ilə bağlı istər elmi-nəzəri, istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil idarəetmənin tələbləri fərqlidir.Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması və
                    idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji, elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi
                    ilə bağlı istər elmi-nəzəri, istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil idarəetmənin tələbləri fərqlidir.Ölkəmizdə təhsillə bağlı aparılan islahatlar, təhsilə müasir dəyərlər baxımından həyata keçirilən yeni baxış istər dövlət, istərsə də özəl sektorda çalışan təhsil işçilərini də bu proseslə ayaqlaşmasını tələb edir. Düzgün təhsil sisteminin qurulması və
                    idarə edilməsi, əlbəttə ki, peşəkar təhsil menecerlərindən başlanır. Biz pedaqoji, elmi-metodoloji baxımdan lazımi işlərin aparıldığını, layihələrin həyata keçirildiyini görürük. Amma etiraf etməliyik ki, təhsil menecmentliyi
                    ilə bağlı istər elmi-nəzəri, istərsə də praktiki işlər qənaətbəxş deyil. Yaxşı təhsil meneceri yaxşı məktəb deməkdir. Bəzən yaxşı müəllim yaxşı idarəçi ola bilmir. Çünki xüsusilə, yeni nəsil idarəetmənin tələbləri fərqlidir."
              />
            </MKBox>
          </Grid>
        </MKBox>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScKbC6Zgw0pe1FZUsPsnMtj60fhU3bhaj7FlvjaoqwueN4-rA/viewform?embedded=true"
          width="640"
          height="554"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Yükleniyor…
        </iframe>
        <Pages />
        <Footer />
      </MKBox>
    </>
  );
}

export default SpecialComponent;
