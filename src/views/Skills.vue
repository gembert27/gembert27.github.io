<template>
  <div>
    <mdb-mask class="gradient d-flex justify-content-center align-items-center">
      <mdb-container class="skill">
        <section class="my-5">
          <h2
            class="h1-responsive font-weight-bold text-center animated fadeInUp"
          >
            Why is it so great?
          </h2>
          <p
            class="lead white-text w-responsive text-center mx-auto mb-5 animated fadeInDown"
          >
            {{ desc }}
          </p>
          <mdb-row>
            <mdb-col
              lg="5"
              class="text-center text-lg-left animated fadeInLeft"
            >
              <img
                class="zoom img-fluid"
                src="https://it-waves.com/wp-content/uploads/2020/03/web-development.png"
                alt="Sample image"
              />
            </mdb-col>
            <mdb-col lg="7" class="animated fadeInRight">
              <mdb-row class="mb-3" v-for="(nav, key) in skills" :key="key">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="indigo-text" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="textColor font-weight-bold mb-3">
                    {{ nav.skill }}
                  </h5>
                  <p class="white-text">{{ nav.desc }}</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>
    </mdb-mask>
  </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbMask } from "mdbvue";
export default {
  data() {
    return {
      desc: "These are the several programming languages I am proficient.",
      skills: [
        {
          skill: "C++",
          desc: "This is the first language I learned in programming",
        },
        {
          skill: "HTML, CSS, SCSS, SASS and Javascript",
          desc: "These are the software I used on designing a website",
        },
        {
          skill: "Vue",
          desc:
            "This is first JavaScript framework I learned on my first internship and having improved with my second internship",
        },
        {
          skill: "React",
          desc:
            "This is the second JavaScript framework I have learned on my second internship",
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
    mdbMask,
  },
};
</script>
<style lang="scss">
.skill {
  margin-top: 152px;
}
</style>