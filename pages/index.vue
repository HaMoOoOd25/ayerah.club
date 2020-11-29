<template>
  <div>
    <vue-particles color="#dedede"></vue-particles>
    <modal height="auto" adaptive="true" scrollable="true" name="joinSquad"> 
      <div class="primary-text text-center p-3">
        <h3>Join Ayerah Squad</h3>
        <br>
        <h5>How to join?</h5>
        <br>
        1. Join <a href="https://discord.gg/D6ZWkRV">sαturn</a> discord server.
        <br>
        2. Fill the request application <nuxt-link to="/join">here</nuxt-link>
        <br>
        3. Make sure your DM is opened for <a href="https://discord.gg/D6ZWkRV">sαturn</a> server to recieve the decision
        <br>
        4. Wait for your final decision
      </div>
    </modal>
    <div class="center-box" v-scroll-reveal.reset>
      <h1 class="ml11 text-center primary-text mt-5">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">Ayerah Squad</span>
        </span>
      </h1>
      <h3 class="ml3 text-center primary-text">
        From cradle to grave, we are living Nightmares.
      </h3>
    </div>

    <div class="container">
      <div class="content-wrapper" v-scroll-reveal.reset>
        <img
          class="rounded mx-auto d-block logo img-fluid mt-3"
          src="~/assets/img/AAyerah.gif"
          alt="some cool gif"
        />

        <h2 class="text-center primary-text mt-3">Squad Message</h2>
        <h5 class="text-center primary-text mt-3">
          If we charge, follow us. If we retreat, kill us. If we die, avenge us.
          This is the code we live by, if you have a problem with it then leave.
          Every father's worst fear. Every daughters wet dream. From cradle to
          grave, we are living Nightmares.
        </h5>
      </div>

      <div class="content-wrapper" v-scroll-reveal.reset>
        <h2 class="text-center primary-text mt-3">Members</h2>
        <h5 class="text-center primary-text mt-5">
          <ul class="members-list d-flex flex-column justify-content-center">
            <members
              v-for="member in members"
              :key="member.id"
              :id="member.id"
              :username="member.username"
            ></members>
          </ul>
          <button @click="showModal" class="btn btn-secondary">Join</button>
        </h5>
      </div>

      <div class="content-wrapper text-center" v-scroll-reveal.reset>
        <h2 class="text-center primary-text mt-3">Base</h2>
        <h5 class="text-center primary-text mt-5">
          <ul class="members-list d-flex flex-column justify-content-center">
            <li>
              <img
                src="https://cdn.discordapp.com/icons/738327804164309023/a_6b771ad83030020ada53cff4958c80cb.webp"
                alt=""
              />
              <a href="https://discord.gg/zv9d8M">sαturn</a>
            </li>
          </ul>
        </h5>
      </div>

      <div class="content-wrapper text-center" v-scroll-reveal.reset>
        <h2 class="text-center primary-text mt-3">Enemies</h2>
        <h5 class="text-center primary-text mt-5">
          <ul class="members-list d-flex flex-column justify-content-center">
            <li>
              <img
                src="https://cdn.discordapp.com/icons/270287692049285152/b79b80f63bb2b624a0940265a1b2fbf1.webp"
                alt=""
              />
              <a href="https://discord.gg/CprqkJ">Chat Zone</a>
            </li>
          </ul>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import members from "~/components/member.vue";

export default {
  data() {
    return {
      members: [
        { id: "351943629423771649", username: "Ayerah" },
        { id: "279224191671205890", username: "HaMoOoOd25" },
        { id: "547646541297483803", username: "Dust" },
        { id: "294195148781518849", username: "Ness" },
      ],
    };
  },
  components: { members },
  methods: {
    showModal() {
      this.$modal.show('joinSquad')
    }
  },
};
</script>

<style>
.vm--modal {
  background: black;
}
</style>
