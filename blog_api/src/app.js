import { Command } from "commander";

import { bootstrap } from "@/cli";

const program = new Command();

program
  .command("runserver")
  .description("Runs the server")
  .option("-p --port <port>", "Port", "8000")
  .option("-H --host <host>", "Host", "::")
  .action(async (options) => {
    await bootstrap(Number(options.port), options.host);
  });

program.parse(process.argv);
