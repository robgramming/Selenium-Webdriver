const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

(async function firstTest() {
    let driver;

    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        let title = await driver.getTitle();
        assert.equal("Web form", title);

        await driver.manage().setTimeouts({implicit: 500});
    }
})