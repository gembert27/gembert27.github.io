<template>
  <div>
    <mdb-view>
      <mdb-mask
        class="gradient d-flex justify-content-center align-items-center"
      >
        <mdb-container>
          <mdb-row>
            <div
              class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 animated fadeInLeft"
            >
              <h1 class="h1-responsive font-weight-bold mt-sm-5">
                {{ name }}
              </h1>
              <hr class="hr-light" />
              <h6 class="mb-4">
                {{ course }}
              </h6>
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5 animated fadeInRight">
              <img :src="img" class="zoom img-fluid rounded-circle" />
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>

    <div class="card card-image" :style="styleSrc">
      <div class="rgba-black-strong py-5 px-4">
        <mdb-row center>
          <mdb-col md="10" xl="8">
            <mdb-accordion :panes="panes" photoBg></mdb-accordion>
          </mdb-col>
        </mdb-row>
        <mdb-container>
          <h2 class="h1-responsive font-weight-bold text-center my-5">
            Recent posts
          </h2>
          <mdb-row
            v-for="(nav, key) in travel"
            :key="key"
            style="padding: 10px"
          >
            <mdb-col lg="5">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  width="560"
                  height="315"
                  :src="nav.src"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <a>
                <mdb-mask overlay="white-slight" waves />
              </a>
            </mdb-col>
            <mdb-col lg="7">
              <a class="green-text">
                <h6 class="font-weight-bold mb-3">
                  <mdb-icon icon="utensils" class="pr-2" />
                  {{ nav.label }}
                </h6>
              </a>
              <h3 class="font-weight-bold mb-3 p-0">
                <strong class="textColor">{{ nav.title }}</strong>
              </h3>
              <p class="textColor">
                {{ nav.desc }}
              </p>
              <p class="textColor">
                by
                <a>
                  <strong class="textColor">{{ name }}</strong> </a
                >,
                {{ nav.date }}
              </p>
            </mdb-col>
          </mdb-row>
        </mdb-container>
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
} from "mdbvue";
export default {
  data() {
    return {
      img:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.0-9/14233090_1532029806822775_6142674705018883148_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_eui2=AeHmfgbM8LVVOVL9P_U7_FasnCABFVHQx6icIAEVUdDHqG1tqzXM-UvuL98vXp3tvHz2-26h7UoiLIjpB0x4n8Co&_nc_ohc=Z157FulcR0UAX-dggwB&_nc_ht=scontent.fmnl4-2.fna&oh=89a0747366dfd15ac62e63305d9452ef&oe=5FA97753",
      activeNav: "Home",
      name: "GEMBERT M. MERCURIO",
      styleSrc:
        "background-image: url(https://wallpaperaccess.com/full/16532.jpg)",
      course:
        "Bachelor of Science in Information Technology with Specialization in Web and Mobile Application",
      panes: [
        {
          title: `<h4 class="mb-0">&nbsp;&nbsp;Objective</h4>`,
          icon: "compress",
          content: `<p class="p-md-4 mb-0">To obtain an Intern position as a Web Developer where I can utilize my knowledge and
                    skills in programming, such as PHP, CSS, Javascript, and Java, alongside my effective
                    social skills to contribute to the attainment of the company's goals.</p>`,
        },
        {
          title: `<h4 class="mb-0">Organization</h4>`,
          icon: "people-carry",
          content: `<p class="p-md-4 mb-0">Member, Alliance of
                    Information Technology
                    Students | 2015 – Present.</p>`,
        },
        {
          title: `<h4 class="mb-0">&nbsp;Other Interests</h4>`,
          icon: "universal-access",
          content: `<ul>
                    <li><p class="mb-0">Adventuring and Travelling.</p></li>
                    <li><p class="mb-0">Watching Movies and Series.</p></li>
                    <li><p class="mb-0">Sports.</p></li>
                    </ul>`,
        },
      ],
      travel: [
        {
          label: "Travel",
          title: "First Asia Travel Vlog",
          src: "https://www.youtube.com/embed/t1nFeGPBOiU",
          date: "03/27/2020",
          desc:
            "Here is the compilation video I created when I was travelling around the Taiwan. Please watch and subscribe for getting in touch with me and thank you for visiting my profile.",
        },
        {
          label: "Island",
          title: "My First Island Hopping at Caramoan",
          src: "https://www.youtube.com/embed/4MxStyl8ZLM",
          date: "10/25/2019",
          desc:
            "This is my first island hopping together with my family and they are my inspiration and motivation on my succession.",
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
  },
};
</script>
