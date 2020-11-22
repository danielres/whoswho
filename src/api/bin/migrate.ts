import { createDocumentMigration } from "./migrate/createDocumentMigration";
import { migrations } from "./migrate/migrations";
import { client } from "./utils/admin/client";
import { getLatestMigrationId } from "./migrate/getLatestMigrationId";

const run = async () => {
  console.log(`=== Running fauna:migrate (env: ${process.env.NODE_ENV})`);

  const latestMigrationId = await getLatestMigrationId(client);

  for (const migration of migrations) {
    console.log(`Running migrations - Latest: ${latestMigrationId}`);

    try {
      if (latestMigrationId < migration.id) {
        await migration.action();
        await createDocumentMigration(client, migration);
        console.log(`✔ Migration ${migration.id}: ${migration.name}`);
      } else {
        console.log(`SKIP Migration ${migration.id}: ${migration.name}`);
      }
    } catch (error) {
      console.error(
        `✗ Migration ${migration.id}: ${migration.name}`.padEnd(50),
        `Error: ${error.message}`
      );
    }
  }
};

run().then(() => {
  console.log("fauna:migrate done");
});
