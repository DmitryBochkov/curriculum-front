<template>

  <v-row no-gutters class="home-page">
    <HomeHeader />
    <SecondSection />
    <ThirdSection />

    <Footer />
  </v-row>
</template>

<script>
import HomeHeader from '@/components/Home/Header'
import SecondSection from '@/components/Home/SecondSection'
import ThirdSection from '@/components/Home/ThirdSection'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    SecondSection,
    ThirdSection,
    Footer
  }
}
</script>
