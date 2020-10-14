<template>
  <div>
    <!--ViewWrapper-->
    <mdb-view>
      <mdb-mask
        class="gradient d-flex justify-content-center align-items-center"
      >
        <mdb-container>
          <mdb-row class="item">
            <mdb-carousel :items="items" :interval="5000"></mdb-carousel>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>

    <div class="card card-image" :style="styleSrc">
      <div class="rgba-black-strong py-5 px-4">
        <h2 class="h1-responsive font-weight-bold text-center my-5">
          Achievements
        </h2>
        <mdb-row center>
          <mdb-col md="10" xl="8">
            <mdb-accordion :panes="panes" photoBg></mdb-accordion>
          </mdb-col>
        </mdb-row>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbView,
  mdbMask,
  mdbAccordion,
  mdbCarousel,
} from "mdbvue";
export default {
  data() {
    return {
      styleSrc:
        "background-image: url(https://wallpaperaccess.com/full/16532.jpg)",   
      panes: [
        {
          title: `<h4 class="mb-0">&nbsp;Awards</h4>`,
          icon: "award",
          content: `<ul>
                    <li><p class="mb-0">Best in Web Application,
                    Technology Innovation in
                    Capstone Project 2019.</p></li>
                    <li><p class="mb-0">Students’ Choice Award,
                    Technology Innovation in
                    Capstone Project 2019.</p></li>
                    <li><p class="mb-0">Best Exhibit Booth, Technology
                    Innovation in Capstone Project
                    2019.</p></li>
                    </ul>`,
        },
        {
          title: `<h4 class="mb-0">Accomplished Projects</h4>`,
          icon: "flag-checkered",
          content: `<ul>
                    <li><p class="mb-0">ITCON 2019 Realms of Technology : a seminar on FEU-IT students’ technological
                    innovations | Delegate Relations.</p></li>
                    <li><p class="mb-0">LinkMate: An Online Communication for Bureau of Jail Management and
                    Penology : a system submitted in our Capstone Project class using PHP, HTML,
                    CSS, Java, Javascript, and SQL | Web Developer and Technical Writer.</p></li>
                    <li><p class="mb-0">Chulbal Travel Agency : a project submitted in our Web Design class using HTML
                    and CSS | Web Developer.</p></li>
                    <li><p class="mb-0">Online Banking Website : a project submitted in our Web Application 2 class using
                    PHP and SQL | Web Developer.</p></li>
                    <li><p class="mb-0">Thesis Publication: International Journal of Scientific & Technology Research | ISSN 2277-8616.</p></li>
                    </ul>`,
        },
        {
          title: `<h4 class="mb-0">Certification</h4>`,
          icon: "certificate",
          content: `<ul>
                    <li><p class="mb-0">Microsoft® Certified
                    Professional Introduction to
                    Programming Using HTML
                    and CSS
                    2019.</p></li>
                    </ul>`,
        },
      ],
      items: [
        {
          img: true,
          src:
            "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/72129178_3773607492664984_8138693220369432576_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeH8sChBrD1aEsJhzoUyPQi89uGhAt1cjXz24aEC3VyNfIh2cLwrF3l4EkfqX7NB-QuD5sWTQefkIUuBG1you5wC&_nc_ohc=wZGdF0l0gJYAX9eXpsH&_nc_ht=scontent.fmnl4-1.fna&oh=27f94ced2b4c1a9db489a627fa70c1d2&oe=5FAAC442",
        },
        {
          img: true,
          src:
            "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/75521832_2720648541312158_8902184942121779200_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_eui2=AeEC6n3Heze46Mn3Vkx9pEGhsFG66ZUaKlSwUbrplRoqVAnuCenr46QVuICHTg3SxiTJ-AX3JAhbhxLFKqUvZmxC&_nc_ohc=4u76QunZcOgAX8iSkEC&_nc_ht=scontent-hkg4-1.xx&oh=94d713a40e3f46fdaa6aa9de1d96868a&oe=5FA95BDA",
        },
      ],
    };
  },
  methods: {
    setActiveNav(nav) {
      this.activeNav = nav;
      this.$router.push({ name: nav });
    },
  },
  name: "NavbarPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbAccordion,
    mdbCarousel,
  },
};
</script>


<style lang="scss">
.w-100 {
  height: 100%;
  width: 100%;
}
.item {
  top: 40px;
  height: 680px;
  width: 100%;
  position: relative;
}
</style>