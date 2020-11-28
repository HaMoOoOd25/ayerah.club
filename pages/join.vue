<template>
  <div v-scroll-reveal.reset>
    <v-dialog @closed="atClosed"/>
    <vue-particles color="#dedede"></vue-particles>
    <div class="primary-text text-center mt-5">
      <h1>Squad Join Request</h1>
    </div>
    <div class="forms primary-text">
      <form @submit.prevent="submitRequest">
        <div class="form-group">
          <label for="username">Discord Username*</label>
          <input
            type="text"
            class="form-control"
            required
            id="username"
            v-model="username"
            placeholder="Ex. HaMoOoOd25#7712"
          />
        </div>

        <div class="form-group">
          <label for="id">Discord ID*</label>
          <input
            type="text"
            class="form-control"
            required
            id="id"
            v-model="id"
            placeholder="279224191671205890"
          />
        </div>

        <div class="form-group">
          <label for="answer">Why do you want to join the Squad?*</label>
          <textarea
            class="form-control"
            required
            id="answer"
            v-model="answer"
            rows="3"
            placeholder="I am so cool"
          ></textarea>
        </div>
        <div v-if="show" class="alert alert-warning" role="alert">
          Looks like you are not in saturn
          <a href="https://discord.gg/D6ZWkRV">sαturn</a>. Join the server or
          check your Discord ID.
        </div>
        <div v-if="submitted" class="alert alert-warning" role="alert">
          Looks like you already submitted.
        </div>

        <button class="btn btn-secondary btn-lg" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      username: "",
      id: "",
      answer: "",
      show: false,
      submitted: false,
    };
  },
  methods: {
    submitRequest: async function (e) {
      if (Vue.$cookies.get("submitted")) {
        this.submitted = true;
        return;
      }

      try {
        const res = await this.$axios.post(
          "/api/joinrequest",
          {
            username: this.username,
            id: this.id,
            answer: this.answer,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.allowed) {
          Vue.$cookies.set("submitted", true);
          this.$modal.show("dialog", {
            title: "Ayerah Squad Join Request",
            text:
              "Your request has been submitted. Decision will be DMed after we review it.",
            
            buttons: [
              {
                title: "Cool",
                handler: () => {
                  this.$router.push("/");
                  this.$modal.hide("dialog");
                },
              },
            ],
          });
        }

        if (!res.data.allowed) {
          this.show = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    atClosed (event) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
.vue-dialog {
  background: #00010d;
  color: #d9d9d9;
}

.vue-dialog-buttons:hover {
  color: #00010d;
  background: #d9d9d9;
  transition-duration: 0.5s;
}
</style>