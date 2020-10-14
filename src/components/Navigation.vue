<template>
  <div>
    <!--Navbar-->
    <mdb-navbar
      :color="'primary'"
      position="top"
      dark
      href="#"
      transparent
      scrolling
    >
      <mdb-container>
        <mdb-navbar-brand> </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/g-character-alphabet-letter-32848.png"
                width="50px"
                height="45px"
              />
            </mdb-nav-item>
            <mdb-nav-item
              v-for="(nav, key) in navigations"
              :key="key"
              class="p-2"
              @click="setActiveNav(nav)"
              >{{ nav }}</mdb-nav-item
            >
          </mdb-navbar-nav>
          <div>
            <mdb-btn
              tag="a"
              size="lg"
              floating
              class="btn-fb"
              icon="facebook-f"
              fab
              href="https://www.facebook.com/Gemtreb"
              target="_blank"
            ></mdb-btn>
            <mdb-btn
              tag="a"
              size="lg"
              floating
              class="btn-tw"
              icon="twitter"
              fab
              href="https://twitter.com/_gembert"
              target="_blank"
            ></mdb-btn>
            <mdb-btn
              tag="a"
              size="lg"
              floating
              class="btn-ins"
              icon="instagram"
              fab
              href="https://www.instagram.com/g.e.m.b.e.r.t/"
              target="_blank"
            ></mdb-btn>
          </div>
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
  </div>
</template>
<script>
import {
  mdbContainer,
  mdbNavbar,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbBtn,
  mdbNavbarBrand,
} from "mdbvue";
export default {
  data() {
    return {
      imgUnderline:
        "https://thumbs.dreamstime.com/b/logo-dog-do-not-bringing-free-193128060.jpg",
      activeNav: "Home",
      navigations: ["Home", "Skills", "Achievement", "Education", "Contact"],
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
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbBtn,
    mdbNavbarBrand,
  },
};
</script>

<style lang="scss">
.navbar .md-form {
  margin: 0;
}
.top-nav-collapse {
  background-color: #424f95 !important;
}
@media (max-width: 990px) {
  .navbar {
    background-color: #424f95 !important;
  }
}

.btn-tw {
  margin-left: 5px;
  margin-right: 5px;
}
</style>