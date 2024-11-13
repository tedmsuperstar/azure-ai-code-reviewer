// Define environment variables with type annotations
async function main() {
    console.log("== TEST TS ==");
    const githubToken = process.env.GITHUB_TOKEN;
}
main().catch((err) => {
    console.error("main encountered an error:", err);
});
export {};
