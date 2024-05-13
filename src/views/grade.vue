<template>
  <div>
    <v-card width="300" height="300">
      <v-col cols="12">
        <v-flex>
          <v-text-field
            v-model="score"
            :rules="scoreRule"
            label="grade"
            id="grade"
          ></v-text-field>

          <v-btn
            color="success"
            @click="gradeScore()"
            :disabled="
              !score ||
              score > 100 ||
              score < 0 ||
              isNaN(score) ||
              /^\+/.test(score)
            "
            >submit</v-btn
          >
        </v-flex>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: "",
      grade: "",
      scoreRule: [
        (a) => !!a || "score requie",
        (a) => /^\d+$/.test(a) || " please input is number",
        (a) => (a >= 0 && a <= 100) || " please input 0-100",
      ],
    };
  },

  methods: {
    gradeScore() {
      if (this.score >= 80 && this.score <= 100) {
        alert((this.grade = "grade: A"));
      } else if (this.score >= 70 && this.score <= 79) {
        alert((this.grade = "grade: B"));
      } else if (this.score >= 60 && this.score <= 69) {
        alert((this.grade = "grade: C"));
      } else if (this.score >= 50 && this.score <= 59) {
        alert((this.grade = "grade: D"));
      } else if (this.score < 50 && this.score >= 0) {
        alert((this.grade = "grade: F"));
      }
    },
  },
};
</script>
<style>
div {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
