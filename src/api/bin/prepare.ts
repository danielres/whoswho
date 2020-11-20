import { steps } from "./prepare/steps";

const run = async () => {
  console.log(
    `=== Running fauna:prepare in environment "${process.env.NODE_ENV}"`
  );

  let counter = 0;
  for (const step of steps) {
    counter += 1;
    try {
      await step.action();
      console.log(`✔ Step ${counter}: ${step.name}`);
    } catch (error) {
      console.error(
        `✗ Step ${counter}: ${step.name}`.padEnd(50),
        `Error: ${error.message}`
      );
    }
  }
};

run().then(() => {
  console.log("done");
});
