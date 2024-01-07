import inquirer from "inquirer";
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startwordcount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "write paragraph text here ....",
            name: "paragraph"
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startwordcount(counter);
