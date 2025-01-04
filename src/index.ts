#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const program = new Command();

// Get the directory where the templates are stored
const getTemplatesDir = () => {
  const currentFileUrl = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileUrl);
  const projectRoot = dirname(dirname(currentFilePath)); // Go up two levels from dist/index.js to project root
  return path.join(projectRoot, "registry");
};

const installComponent = async (componentName: string) => {
  try {
    const templatesDir = getTemplatesDir();
    const sourceDir = path.join(templatesDir, componentName);
    const targetDir = path.join(process.cwd(), "app", componentName);

    // Check if source directory exists
    if (!fs.existsSync(sourceDir)) {
      console.error(
        chalk.red(
          `Error: Template for ${componentName} not found in ${templatesDir}`
        )
      );
      process.exit(1);
    }

    // Check if the app directory exists
    if (!fs.existsSync(path.join(process.cwd(), "app"))) {
      console.error(
        chalk.red(
          'Error: No "app" directory found. Make sure you are in a Next.js project root.'
        )
      );
      process.exit(1);
    }

    // Check if component directory already exists
    if (fs.existsSync(targetDir)) {
      console.error(
        chalk.red(`Error: ${componentName} directory already exists.`)
      );
      process.exit(1);
    }

    // Copy the component files
    await fs.copy(sourceDir, targetDir);
    console.log(
      chalk.green(`✓ Successfully installed ${componentName} component`)
    );
  } catch (error) {
    console.error(chalk.red("Error installing component:"), error);
    process.exit(1);
  }
};

// Immediately execute the installation
console.log(chalk.blue("📦 Installing components...\n"));

(async () => {
  try {
    await installComponent("contact");
    await installComponent("waitlist");

    console.log(chalk.green("\n✨ All components installed successfully!"));
    console.log(
      chalk.yellow(
        "\nNote: Make sure to add the following to your .env.local file:"
      )
    );
    console.log(
      chalk.gray(`
        ROUTER_API_KEY=your_api_key
      `)
    );
  } catch (error) {
    console.error(chalk.red("\n❌ Installation failed:"), error);
    process.exit(1);
  }
})();
