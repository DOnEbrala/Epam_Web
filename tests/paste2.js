const {By, Key, Builder, Actions} = require("selenium-webdriver");
require("chromedriver");

async function paste2(){

    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://pastebin.com");

    await driver.findElement(By.className("textarea -form js-paste-code")).sendKeys(`git config --global user.name "New Sheriff in Town"`,Key.ENTER);
    await driver.findElement(By.className("textarea -form js-paste-code")).sendKeys(`git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")`, Key.ENTER);
    await driver.findElement(By.className("textarea -form js-paste-code")).sendKeys("git push origin master --force");


    await driver.findElement(By.id("select2-postform-format-container")).click("");
    const chooseType = await driver.findElement(By.className("select2-search__field")).sendKeys("Bash", Key.ENTER);

    try{

        const timeMenu = await driver.findElement(By.id("select2-postform-expiration-container")).click();

    }catch{

    //#1
    // const timeChoice = await driver.findElement(By.xpath(`//li[@id="select2-postform-expiration-result-7do9-10M"]`))
    // await driver.wait(until.elementIsVisible(timeChoice), 3000)
    // await driver.wait(until.elementIsEnabled(timeChoice), 3000)
    // await Actions.click(timeChoice);

    //#2

    // const hoverable = await driver.findElement(By.xpath(`//li[@id="select2-postform-expiration-result-7do9-10M"]`));
    // const actions = await driver.actions({ async: true });
    // await actions.move({ origin: hoverable }).perform();
        
    };

    //#3

    // const ageChoice = await driver.wait(until.elementLocated(By.xpath(By.xpath))(`//li[@id="select2-postform-expiration-result-7do9-10M"]`));
    // ageChoice.click()

     const chooseName = await driver.findElement(By.id("postform-name")).sendKeys("how to gain dominance among developers");

     const head = await driver.findElement(By.className("btn -big")).click();
     

     async function checkName (){

         if (driver.findElement(By.className("how to gain dominance among developers"))){
            console.log("Right Title")
    
         }
         else {
            console.log("it's incorrect")
         }
         
         }

}

paste2();

// const search = await driver.getElement(By.(`git config --global user.name "New Sheriff in Town`, `git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")`,`"git push origin master --force"` )).perform(
//     console.log(search)
//  );
