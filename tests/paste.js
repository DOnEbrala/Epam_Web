const {By, Key, Builder, Actions} = require("selenium-webdriver");
require("chromedriver");

async function paste(){

    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://pastebin.com")

    await driver.findElement(By.className("textarea -form js-paste-code")).sendKeys("Hello from WebDriver");

    const time = await driver.findElement(By.id("select2-postform-expiration-container")).click();

    //#1
    // const choosenTime = await driver.findElement(By("//li[@id='select2-postform-expiration-result-g10d-10M']")).click();

    //#2
    // const choosenTime = await driver.findElement(By.xpath("//span[@title='Never']"));
    // chooseType.setValue("10 Minutes");

    //#3
    // await driver.actions({bridge: true}).sendKeys(minTen.Key.down)
    //     .click()
    //     .sendKeys(minTen.Key.down)
    //     .perform();

    const chooseName = await driver.findElement(By.id("postform-name")).sendKeys("helloweb");

    //driver.quit();

};

paste();