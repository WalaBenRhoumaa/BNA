module.exports = {
    reporters: [
      "default",
      ["jest-junit", { outputDirectory: "./admin/coverage/junit", outputName: "results.xml" }]
    ]
  };
  