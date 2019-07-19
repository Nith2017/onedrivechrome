var webDriver = require("selenium-webdriver"),
By = webDriver.By,
until = webDriver.until;
var email;
var password
var pwd;

async function login()
{
var driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
await driver.get("https://onedrive.live.com/about/en-us/");
await driver.wait(until.elementTextIs(driver.findElement(By.linkText("Sign up for free")),"Sign up for free"), 3000).click();
await driver.findElement(By.xpath("//*[@id='appRoot']/ms-signindialog/section/div[2]/div/div[3]/div/div[1]/p/a")).click();
driver.switchTo().frame(1);
driver.sleep(30000);
driver.findElement(By.className("form-control")).sendKeys(email);
driver.findElement(By.className("btn btn-block btn-primary")).click();
driver.navigate().to("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1563288013&rver=7.1.6819.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fonedrive.live.com%3Fgologin%3D1%26mkt%3Den-US&lc=1033&id=250206&cbcxt=sky&mkt=en-US&lw=1&fl=easi2&username=nithyamanjur09%40gmail.com");
driver.sleep(90000);
pwd = driver.findElement(By.css("#i0118")).sendKeys(password).clear();
driver.sleep(25000);
pwd.sendKeys('runtest1').click();
driver.sleep(50000);
await driver.findElement(By.id("idSIButton9")).click();
driver.sleep(50000);
console.log(pwd);
}
login();