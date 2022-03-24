const os = require("os");
const path = require("path");
const user = os.userInfo();
console.log(user);
console.log(`time is ${os.uptime}`);
const curretnOs = {
	name: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
	release: os.release(),
};
console.log(curretnOs);
const amount = 12;
if (amount < 15) {
	console.log("sm");
} else {
	console.log("lg");
}

console.log("hey its my code node");
console.log("==?", __dirname);
console.log(__filename);
// setInterval(() => {
// 	console.log("sagar");
// }, 1000);

console.log(path.sep);

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
console.log("starting ");
writeFileSync(
	"./content/subfolder/second.txt",
	`here is the result: ${first}, ${second}`,
	{ flag: "a" }
);
readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			"./content/subfolder/generate.txt",
			`here is the result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("done with this");
			}
		);
	});
});
console.log("g");
