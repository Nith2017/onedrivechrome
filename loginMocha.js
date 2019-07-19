var assert = require('assert');
//var test = require('selenium-webdriver/testing');
var webDriver = require('selenium-webdriver');
var driver;
describe('one drive', function()
{
  beforeEach(function(done){
      this.timeout(20000);
      driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
      driver.get("http://onedrive.live.com/about/en-us/");
      driver.manage().window().maximize();
      done();
 });

 afterEach(function(done)
 {
     return driver.quit();
     done();

 })
 it('login', function(done)
 {
     driver.findElement(By.linkText("Sign up for free")).click();
    //driver.wait(until.elementTextIs(driver.findElement(By.linkText("Sign up for free")),"Sign up for free"), 3000).click();
    driver.findElement(By.xpath("//*[@id='appRoot']/ms-signindialog/section/div[2]/div/div[3]/div/div[1]/p/a")).click();
    driver.switchTo().frame(1);
    driver.timeout(30000);
    driver.findElement(By.className("form-control")).sendKeys("nithyamanjur09@gmail.com");
    driver.findElement(By.className("btn btn-block btn-primary")).click();
    driver.navigate().to("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1563288013&rver=7.1.6819.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fonedrive.live.com%3Fgologin%3D1%26mkt%3Den-US&lc=1033&id=250206&cbcxt=sky&mkt=en-US&lw=1&fl=easi2&username=nithyamanjur09%40gmail.com");
    driver.timeout(50000);
    driver.findElement(By.id("i0118")).sendKeys('sometext1', Key.CONTROL, 'a', Key.NULL,'sometext1');
    driver.timeout(70000);
    driver.findElement(By.id("idSIButton9")).submit();
    driver.timeout(50000);
    done();
 });
}   
);

