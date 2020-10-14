<template>
  <div>
    <mdb-mask class="gradient d-flex justify-content-center align-items-center">
      <mdb-container class="cont">
        <section class="my-5">
          <h2 class="h1-responsive font-weight-bold text-center my-5">
            Contact us
          </h2>

          <mdb-row>
            <mdb-col lg="5" class="lg-0 mb-4">
              <mdb-card>
                <mdb-card-body>
                  <div class="form-header">
                    <h3 class="mt-2">
                      <mdb-icon icon="envelope" /> Write to us:
                    </h3>
                  </div>
                  <p class="dark-grey-text">
                    We'll write rarely, but only the best content.
                  </p>
                  <div class="md-form">
                    <mdb-input
                      icon="user"
                      label="Your name"
                      iconClass="grey-text"
                      type="text"
                      id="form-name"
                    />
                  </div>
                  <div class="md-form">
                    <mdb-input
                      icon="envelope"
                      label="Your email"
                      iconClass="grey-text"
                      type="text"
                      id="form-email"
                    />
                  </div>
                  <div class="md-form">
                    <mdb-input
                      icon="tag"
                      label="Subject"
                      iconClass="grey-text"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div class="md-form">
                    <mdb-textarea
                      icon="pencil"
                      label="Icon Prefix"
                      iconClass="grey-text"
                      id="form-text"
                    />
                  </div>
                  <div class="text-center">
                    <mdb-btn color="light-blue">Submit</mdb-btn>
                  </div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="7">
              <div
                id="map-container"
                class="rounded z-depth-1-half map-container"
                style="height: 400px"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247899.90253793617!2d121.98657615227727!3d13.872859936467137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a290c466807bf7%3A0x5252c95f200f7aaa!2sGumaca%2C%20Quezon!5e0!3m2!1sen!2sph!4v1602520209613!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style="border: 0"
                ></iframe>
              </div>
              <br />
              <mdb-row class="text-center">
                <mdb-col md="4" v-for="(nav, key) in contact" :key="key">
                  <mdb-btn tag="a" class="accent-1">
                    <mdb-icon :icon="nav.icon" />
                  </mdb-btn>
                  <p class="textColor">{{ nav.head }}</p>
                  <p class="textColor mb-md-0">{{ nav.sub }}</p>
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
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbIcon,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody,
  mdbMask,
} from "mdbvue";
export default {
  data() {
    return {
      desc:
        "This is the school and or university I studied starting from high school up to college.",
      contact: [
        {
          head: "Tabing-Dagat, #070",
          icon: "map-marker",
          sub: "Philippines",
        },
        {
          head: "09958710919",
          icon: "phone",
          sub: "Mon - Fri, 8:00-17:00",
        },
        {
          head: "gembert1998@gmail.com",
          icon: "envelope",
          sub: "Email",
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
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody,
    mdbMask,
  },
};
</script>

<style lang="scss">
.cont {
  margin-top: 89px;
}
</style>