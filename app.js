const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      isToggle: true,
    };
  },
  computed: {
    btnCaption() {
      return this.isToggle ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    toggleList() {
      this.isToggle = !this.isToggle;
    },
  },
});

app.mount("#assignment");
