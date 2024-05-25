// @ts-check
import * as path from "path"
import esbuild from "esbuild"
// import * as fs from "fs"
import chalk from "chalk"

// const pkg = JSON.parse(fs.readFileSync("./package.json").toString())
// const deps = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {})
// ]

const watchMode = process.argv.includes("--watch")

/**
 * @returns {import("esbuild").Plugin}
 */
function BuildTimer () {
  return {
    name: "build-timer",
    setup(build) {
      let startTime

      build.onStart(() => {
        startTime = Number(new Date())
      })

      build.onEnd(() => {
        const endTime = Number(new Date())
        const buildTime = endTime - startTime

        console.log(chalk.green(`Build complete in ${buildTime}ms!`), `✨\n\n`)
      })
    }
  }
}

;(async function () {
  /**
   * @type {import("esbuild").BuildOptions["entryPoints"]}
   */
  const entries = {}

  const toPath = (/** @type {string} */ str) => path.join(path.resolve(process.cwd()), ...str.split("/"))

  entries["ninja-keys"] = toPath("./src/ninja-keys.js");
  entries["ninja-header"] = toPath("./src/ninja-header.js");
  entries["index"] = toPath("./src/index.js");

  const defaultConfig = {
    entryPoints: entries,
    sourcemap: true,
    target: "es2020",
    color: true,
    bundle: true,
    external: [],
  }

  /**
   * @type {Array<import("esbuild").BuildOptions>}
   */
  const configs = [
    {
      ...defaultConfig,
      entryPoints: entries,
      outdir: 'bundle',
      format: 'esm',
      target: "es2017",
      external: [],
      splitting: true,
      minify: false,
      plugins: [
        BuildTimer()
      ],
      chunkNames: 'chunks/[name]-[hash]'
    },
  ]

  if (!watchMode) {
    await Promise.all(configs.map((config) => esbuild.build(config)))
      .catch((err) => {
        console.error(err)
        process.exit(1)
      })

    return
  }

  await Promise.all(configs.map(async (config) => {
    const context = await esbuild.context(config)
    return await context.watch()
  })).catch((err) => {
    console.error(err)
  })
})()
