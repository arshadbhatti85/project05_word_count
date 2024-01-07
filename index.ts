import inquirer from "inquirer";

const counter = (paragraph: string) => paragraph.replace(/\s/g, "").length


async function startwordcount(counter:(paragraph: string)=>number){
  
    do{
    let res = await inquirer.prompt({
        type: "input",
        message: "write paragraph text here ....",
        name: "paragraph"
    })
    console.log(counter (res.paragraph))
  }
 
  while(true)

}

startwordcount(counter)


