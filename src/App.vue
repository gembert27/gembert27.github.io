<template>
  <div id="app">
    <Navigation />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: {
    Navigation,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  background-image: url("https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-width: 100%;
  min-height: 100%;
}

.navbar .md-form {
  margin: 0;
}
.top-nav-collapse {
  background-color: #424f95;
}
@media (max-width: 990px) {
  .navbar {
    background-color: #424f95;
  }
}
.view {
  background-image: url("https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh);
}
.gradient {
  background: -moz-linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
  background: -webkit-gradient(
    linear,
    45deg,
    from(rgba(42, 27, 161, 0.7)),
    to(rgba(29, 210, 177, 0.7))
  );
  background: -o-linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(42, 27, 161, 0.7),
    rgba(29, 210, 177, 0.7) 100%
  );
}
h6 {
  line-height: 1.7;
  font-weight: 600;
}
.btn-tw {
  margin-left: 5px;
  margin-right: 5px;
}
.card {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-width: 100%;
  min-height: 100%;
}
.mb-0 {
  color: black;
  text-transform: capitalize;
  font-weight: 400;
}
.textColor,
.h1-responsive {
  color: white;
}
.zoom {
  transition: transform 0.4s;
}
.zoom:hover {
  transform: scale(1.1);
}

* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: rgba(42, 27, 161, 0.7);
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(29, 210, 177, 0.7);
  border-radius: 0px;
  border: 0px solid rgba(42, 27, 161, 0.7);
}
</style>
