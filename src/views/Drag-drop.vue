<template>
  <div class="flexbox">
    <Board id="board-1">
      <Card id="card-1" draggable="true">
        <div v-for="(post, p) in usualName" :key="p">
          <h5>Name: {{ post.given.join("") }}</h5>
        </div>
        <h5>Gender: {{ genders.gender }}</h5>
      </Card>
      <Card id="card-2" draggable="true">
        <div v-for="(post, p) in usualName" :key="p">
          <h5>Name: {{ post.given.join("") }}</h5>
        </div>
        <h5>Birthdates: {{ birthdates.birthDate }}</h5>
      </Card>
    </Board>

    <Board id="board-2">
      <Card id="card-3" draggable="true">
        <div v-for="(post, p) in usualName" :key="p">
          <h5>Name: {{ post.given.join("") }}</h5>
        </div>
        <div v-for="a in address" :key="a.use">
          <h5>Address: {{ a.text }}</h5>
        </div>
      </Card>
    </Board>
  </div>
</template>

<script>
import Board from "@/components/Board-comp.vue";
import Card from "@/components/Card-comp.vue";
// import {useCardStore} from "@/stores/Store";

export default {
  // setup(){
  //   const store = useCardStore();
  //   return {store};
  // },
  data() {
    return {
      posts: [],
      genders: {},
      birthdates: {},
      address: [],
      info: [{ Name: this.posts, Gender: this.genders }],
    };
  },
  components: {
    Board,
    Card,
  },
  methods: {
    getPosts() {
      fetch("https://build.fhir.org/patient-example.json")
        .then((response) => response.json())
        .then((data) => (this.posts = data.name));
      for (let post in this.usualName) {
        return (this.posts = post.given.join(""));
      }
    },
    getGender() {
      fetch("https://build.fhir.org/patient-example.json")
        .then((response) => response.json())
        .then((data) => (this.genders = data));
    },
    getBirthdate() {
      fetch("https://build.fhir.org/patient-example.json")
        .then((response) => response.json())
        .then((data) => (this.birthdates = data));
    },
    getAddress() {
      fetch("https://build.fhir.org/patient-example.json")
        .then((response) => response.json())
        .then((data) => (this.address = data.address));
    },
    // combine() {
    //   for (let post in this.usualName) {
    //     this.info.push({
    //       id: 0,
    //       Name: post.given.join(""),
    //       Gender: this.genders.gender,
    //     });
    //     this.info.push({
    //       id: 1,
    //       Name: post.given.join(""),
    //       Birthdate: this.birthdates.birthDate,
    //     });
    //     for (let a in this.address) {
    //       this.info.push({ id: 2, Name: post.given.join(""), Address: a.text });
    //     }
    //   }
    //   return this.info;
    // },
  },
  computed: {
    usualName() {
      return this.posts.filter((p) => p.use == "usual");
    },
    // listone() {
    //   return this.store.board.filter((c) => c.id == 1);
    // },
    // listtwo() {
    //   return this.store.board.filter((c) => c.id == 2);
    // },
  },
  mounted() {
    this.getPosts();
    this.getGender();
    this.getBirthdate();
    this.getAddress();
    // this.combine();
  },
};
</script>

<style scoped>
.flexbox {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 70%;
  height: 90vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
}

.flexbox .board {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background-color: #313131;
  padding: 15px;
}

.flexbox .board .card {
  padding: 10px 20px;
  background-color: #f3f3f3;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>
