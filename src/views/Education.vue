<template>
  <div>
    <mdb-mask class="gradient d-flex justify-content-center align-items-center">
      <mdb-container class="educ">
        <section class="my-5">
          <h2
            class="h1-responsive font-weight-bold text-center animated fadeInUp"
          >
            Where do I learn?
          </h2>
          <p
            class="lead white-text w-responsive text-center mx-auto mb-5 animated fadeInDown"
          >
            {{ desc }}
          </p>
          <mdb-media
            class="d-block d-md-flex mt-4"
            v-for="(nav, key) in educ"
            :key="key"
          >
            <mdb-media-image
              class="zoom d-flex mb-3 mx-auto media-image z-depth-1 animated fadeInLeft"
              :src="nav.src"
              alt="Generic placeholder image"
            />
            <mdb-media-body
              class="textColor media-body text-center text-md-left ml-md-3 ml-0 animated fadeInRight"
            >
              <h5 class="mt-0 font-weight-bold">{{ nav.sch }}</h5>
              {{ nav.desc }}
            </mdb-media-body>
          </mdb-media>
        </section>
      </mdb-container>
    </mdb-mask>
  </div>
</template>
<script>
import {
  mdbContainer,
  mdbMedia,
  mdbMediaBody,
  mdbMediaImage,
  mdbMask,
} from "mdbvue";
export default {
  data() {
    return {
      desc:
        "This is the school and or university I studied starting from high school up to college.",
      educ: [
        {
          sch: "Gumaca National High School",
          desc:
            "Gumaca National High School (GNHS) is a public secondary school in Gumaca, Quezon Province established in 1945 as the Tayabas East High School (TEHS). Currently, it offers a DepEd-recognized education program for Grade 7-12 students. Available senior high school (SHS) tracks include Academic, Sports, and Technical-Vocational-Livelihood (TVL).",
          src:
            "https://static.vecteezy.com/system/resources/thumbnails/000/225/349/small/flat-high-school.png",
        },
        {
          sch: "Far Eastern University Institute of Technology",
          desc:
            "FEU Institute of Technology, also known simply as FEU Tech, was established in 1992. EACIT is an educational partnership of Asia Pacific College, IBM Philippines, Intelligent Wave Inc., and Far Eastern University.",
          src:
            "https://i1.wp.com/powcastsports.com/wp-content/uploads/2015/12/FEUTamaraws.png?fit=200%2C200&ssl=1",
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
    mdbMedia,
    mdbMediaBody,
    mdbMediaImage,
    mdbMask,
  },
};
</script>
<style lang="scss">
.educ {
  margin-top: 141px;
}
</style>

