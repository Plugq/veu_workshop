<template>
  <div class="hi">
    <!-- <v-row>
      <v-col cols="3">
        <v-card width="300" height="350">
          <v-img
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2018/08/c1.jpg?width=700&quality=95"
          ></v-img>

          <v-card-title primary-title>
            <span>Doraemon</span>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card width="300" height="350">
          <v-img
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2018/08/c1.jpg?width=700&quality=95"
          ></v-img>

          <v-card-title primary-title>
            <span>Doraemon</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row> -->
    <div class="as">
      <h1>Simple page</h1>
      <v-flex>
        <v-text-field
          v-model="email"
          label="E-mail"
          prepend-icon="mdi-email"
          id="email"
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          id="password"
        ></v-text-field>
      </v-flex>
      <v-btn color="success" @click="signin()">signin</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {};
  //   },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signin() {
      alert(this.email);
    },
  },
};
</script>

<style>
.hi {
  display: flex;
  align-items: center;
  justify-content: center;
}
.as {
  display: block;
  justify-content: center;
}
</style>
