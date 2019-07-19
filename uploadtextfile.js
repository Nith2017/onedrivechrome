var assert = require('assert');
var webDriver = require("selenium-webdriver"),
By = webDriver.By,
until = webDriver.until;
var email;
var password;
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
//uploading text file

async function textfile()
{
    await driver.wait(until.elementLocated(driver.findElement(By.css("#id__33"))),3000).click();
    await driver.findElement(By.css("#id__33-menu > div > ul > li:nth-child(1) > button > div > span")).click().sleep(50000).sendKeys("C:/Users/balag/Desktop/konika projec/tropical_depression");
    driver.sleep(30000);
    driver.findElement(By.css("#id__33")).click();
    driver.findElement(By.css("#id__33-menu > div > ul > li:nth-child(1) > button > div > span")).click().sendKeys("C:/Users/balag/Desktop/konika projec/emptyfile");
    if (assert.equal(driver.findElement(By.css("#RootPage\.default\.F\.A > div.ms-Layer.ms-Layer--fixed.root-112 > div > div > div > div.ms-Callout-main.calloutMain-119 > div > div > div > div > div.OperationMonitor-groups > div > div > div.OperationMonitor-itemName")).getText == "Uploaded 1 item to Files")) {
        console.log("Uploaded text file");
    } 
    else 
    {
        console.log("failed to upload"); 
    }
    ;
    driver.sleep(30000);
}
textfile();
//comaparing metadata of uploaded file
async function comparemetadata()
{
    driver.sleep(30000);
    await driver.wait(until.elementLocated(By.xpath("//*[@id='appRoot']/div/div[2]/div[5]/main/div/div/div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/div/div/div/div")),3000).click();
    diver.wait(until.elementLocated(By.className("ms-Button-flexContainer flexContainer-62")),3000).click();
    if (assert.equal(driver.findElement(By.className("InfoPane-itemDetails-name")).getText, "tropical depression1.txt"))
     {
        console.log("Metadata is correct");
    } else {
        Console.log("Metadata is wrong");
    }
    }

//Update the contents of the text document from the OneDrive editor and click on save button to create a new version of the document in OneDrive
async function editandsavefile()
{
    driver.sleep(30000);
    await driver.wait(until.elementLocated(By.xpath("//*[@id='appRoot']/div/div[2]/div[5]/main/div/div/div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/div/div/div/div")),3000).click();
    await driver.wait(until.elementLocated(By.xpath("//*[@id='id__326']"), 10000)).click().sendKeys("this is new text");
    Runtime.getRuntime().exec("cmd.exe /c Start AutoIt3.exe ");
    
}
editandsavefile();
//Download and comparing with files
async function downloadcompare()
{
    driver.switchTo.window(0);
    await driver.wait(until.elementLocated(By,xpath("//*[@id='id__229']")),10000).click();
    await driver.wait(until.elementLocated(By,xpath("//*[@id='id__229']")),10000).click();


}
downloadcompare();
//deleting files
async function deletefile()
{
    await driver.wait(until.elementLocated(By.xpath("//*[@id='appRoot']/div/div[2]/div[5]/main/div/div/div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/div/div/div/div")),3000).click();
    await driver.wait(until.elementLocated(By,xpath("//*[@id='appRoot']/div/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div/div/div/div[1]/div[4]/button/div")),10000).click();
    if (assert.equal(driver.findElement(By.className("EmptyFolder-pc")).getText(), "Drag files here to upload them to OneDrive. You can also add files to this folder using the OneDrive app for your computer.")) {
        console.log("deleted files");
    } else {
        console.log("failed to delete files");
    }
    
}
deletefile();