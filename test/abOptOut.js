const assert = require("assert");
const { Builder, By }  = require("selenium-webdriver");

describe("A/B opt-out", function() {
    let driver;

    beforeEach(function() {
        this.timeout(60000) driver = new Builder().forBrowser("chrome").build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it("with cookie after visiting page", async function() {
        await driver.get("https://the-internet.herokuapp.com/abtest")
    });
})