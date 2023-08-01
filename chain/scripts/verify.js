const { verify } = require("../utils/verify")


async function main() {
    console.log("verifying")
    await verify("0x276ea4bb6B252ac9D2b1f796f1AdB0e0a7bbA982", []);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });