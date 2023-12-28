export const CounterComponent = {
  template: `
<div>
  <p>Count: {{ count }}</p>
  <el-button @click="increment">Increment</el-button>
</div>
`,
  setup() {
    const { ref, onMounted, watch } = Vue;
    // Use ref for reactive data
    const count = ref(0);

    // Use onMounted for lifecycle hooks
    onMounted(() => {
      console.log("Component is mounted");
    });

    // Use watch for watching changes
    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    });

    // Define methods
    const increment = () => {
      count.value++;
    };

    // Return data and methods to be used in the template
    return {
      count,
      increment,
    };
  },
};
