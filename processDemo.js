// console.log(process.argv);

// process.env
// console.log(process.env);

//pid
console.log(process.pid);

console.log(process.cwd());

console.log(process.title);

console.log(process.memoryUsage());

console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`about to exit with code: ${code}`);
});

console.log(process.exit(0));

console.log("hello after exit");
