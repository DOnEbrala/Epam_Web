const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function paste(){

    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://pastebin.com")

    await driver.findElement(By.className("textarea -form js-paste-code")).sendKeys("Hello from WebDriver");

    await driver.findElement(By.id("select2-postform-category_id-container")).click();

    const chooseType = await driver.findElement(By.className("select2-search__field")).sendKeys("Gaming", Key.ENTER);

    // const time = await driver.findElement(By.id("select2-postform-expiration-container")).click();

    // const highlighter = await driver.findElement(By.className("select2-results__option select2-results__option--highlighted")).click("");

    // const drop = await driver.findElement(By.id("select2-postform-expiration-result-ms2x-10M")).sendKeys(Key.ENTER);

    const chooseName = await driver.findElement(By.id("postform-name")).sendKeys("helloweb", Key.ENTER);





    //driver.quit();

};

paste();