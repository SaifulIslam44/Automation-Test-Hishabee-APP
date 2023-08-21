const { Before, After } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');

const BASE_URL = 'https://hishabee.business/';
let driver;

Before(async () => {
  // Nothing needed here
});

After(async () => {
  if (driver) {
    await driver.sleep(3000);
    await driver.quit();
    driver = null;
  }
});

Given('I am on the Hishabee Business application', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const elementLocator = By.xpath('/html/body/div[2]/div/div/div/section[1]/div/div[1]/div/div[2]/div/h1');
  await driver.wait(until.elementLocated(elementLocator), 10000);
  const element = await driver.findElement(elementLocator);
  await element.click();
  

  await driver.sleep(3000);
  await driver.quit();
  driver = null;
});

Then('I click Web Login button', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const elementLocator = By.xpath('/html/body/div[2]/div/div/div/section[1]/div/div[1]/div/section/div/div/div/div[2]/div/div/a/span/span');
  await driver.wait(until.elementLocated(elementLocator), 10000);
  const element = await driver.findElement(elementLocator);
  await element.click();
 
  await driver.sleep(3000);
  await driver.quit();
  driver = null;
});

When('I Press the Make App Button', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const elementLocator = By.xpath('//*[@id="menu-1-78f96407"]/li[2]/a');
  await driver.wait(until.elementLocated(elementLocator), 10000);
  const element = await driver.findElement(elementLocator);
  await element.click();
  
  await driver.sleep(3000);
  await driver.quit();
  driver = null;
});

Given('Download Hishabee App', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const elementLocator = By.xpath('/html/body/div[2]/div/div/div/section[1]/div/div[1]/div/section/div/div/div/div[1]/div/div/a/span/span');
  await driver.wait(until.elementLocated(elementLocator), 10000);
  const element = await driver.findElement(elementLocator);
  await element.click();
  
});

Then('Enter here first and last name', async () => {
  const firstNameInputLocator = By.id('wpforms-6607-field_0'); 
  const lastNameInputLocator = By.id('wpforms-6607-field_0-last');   
  const firstNameInput = await driver.findElement(firstNameInputLocator);
  const lastNameInput = await driver.findElement(lastNameInputLocator);
  await firstNameInput.sendKeys('Saiful'); 
  await lastNameInput.sendKeys('Islam');   
});

Then('Enter here mobile number', async () => {
 
  const mobileNumberInput = By.id('wpforms-6607-field_3');   
  const mobileNumber = await driver.findElement(mobileNumberInput);
  await mobileNumber.sendKeys('01710000000'); 
  
});

Then('Enter here email address', async () => {
 
  const emailInput = By.id('wpforms-6607-field_1');   
  const email = await driver.findElement(emailInput);
  await email.sendKeys('test@gmail.com'); 
  
});

Then('Select wich device is support', async () => {
  const deviceRadioButtonId = 'wpforms-6607-field_4_1'; 
  const deviceRadioButton = await driver.findElement(By.id(deviceRadioButtonId));
  await deviceRadioButton.click();
});

When('Fill up form press submit', async () => {
  const FormSubmit = 'wpforms-submit-6607'; 
  const submitbutton = await driver.findElement(By.id(FormSubmit));
  await submitbutton.click();
});

Then('HISABEE Icon pressed going home again', async () => {
  
  const elementLocator = By.xpath('/html/body/div[1]/section[1]/div/div[1]/div/div/div/a/img');
  await driver.wait(until.elementLocated(elementLocator), 1000);
  const element = await driver.findElement(elementLocator);
  await element.click();
  
  await driver.sleep(3000);
  await driver.quit();
  driver = null;

});

When('Contact option is pressed', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const contact = By.xpath('//*[@id="menu-1-78f96407"]/li[3]/a');
  await driver.wait(until.elementLocated(contact), 10000);
  const ContactClick = await driver.findElement(contact);
  await ContactClick.click(); 
});

Then('Facebook icon is pressed', async () => {
  const facebook = By.xpath('/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[1]/a/i');
  await driver.wait(until.elementLocated(facebook), 10000);
  const facebookclick = await driver.findElement(facebook);
  await facebookclick.click(); 
  await driver.sleep(3000);
});

Then('Instagram icon is pressed', async () => {
  const Instagram = By.xpath('/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[2]/a/i');
  await driver.wait(until.elementLocated(Instagram), 10000);
  const InstagramClick = await driver.findElement(Instagram);
  await InstagramClick.click();
  await driver.sleep(3000); 
});

Then('Linkdin icon is pressed', async () => {
  const Linkdin = By.xpath('/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[3]/a/i');
  await driver.wait(until.elementLocated(Linkdin), 10000);
  const LinkdinClick = await driver.findElement(Linkdin);
  await LinkdinClick.click(); 
  await driver.sleep(3000);
});

Then('Youtube icon is pressed', async () => {
  const Youtube = By.xpath('/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[4]/a/i');
  await driver.wait(until.elementLocated(Youtube), 10000);
  const YoutubeClick = await driver.findElement(Youtube);
  await YoutubeClick.click(); 
  await driver.sleep(3000);
  await driver.quit();
  driver = null;
});

Given('Tutorial option is pressed', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const Tutorial = By.xpath('//*[@id="menu-1-78f96407"]/li[4]/a');
  await driver.wait(until.elementLocated(Tutorial), 10000);
  const TutorialClick = await driver.findElement(Tutorial);
  await TutorialClick.click(); 
});

Then('Create Online e-commerce shop or Webstore in 1 minute in Bangladesh', async () => {
  const Tutorial1 = By.xpath('//*[@id="post-7278"]/div[2]/div/h2/a');
  await driver.wait(until.elementLocated(Tutorial1), 10000);
  const Tutorial1Click = await driver.findElement(Tutorial1);
  await Tutorial1Click.click(); 

  const Tutorial1B = By.xpath('//*[@id="menu-1-78f96407"]/li[4]/a');
  await driver.wait(until.elementLocated(Tutorial1B), 10000);
  const Tutorial1Back = await driver.findElement(Tutorial1B);
  await Tutorial1Back.click(); 
  await driver.sleep(3000);

});

Then('How Can You Win Gifts From Hishabee Referral Program?', async () => {
  const Tutorial2 = By.xpath('//*[@id="post-7304"]/div[2]/div/h2/a');
  await driver.wait(until.elementLocated(Tutorial2), 10000);
  const Tutorial2Click = await driver.findElement(Tutorial2);
  await Tutorial2Click.click(); 

  const Tutorial1B = By.xpath('//*[@id="menu-1-78f96407"]/li[4]/a');
  await driver.wait(until.elementLocated(Tutorial1B), 10000);
  const Tutorial1Back = await driver.findElement(Tutorial1B);
  await Tutorial1Back.click(); 
  await driver.sleep(3000);
  await driver.quit();
  driver = null;

});

Given('Shop option is pressed', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const shop = By.xpath('//*[@id="menu-1-78f96407"]/li[5]/a');
  await driver.wait(until.elementLocated(shop), 10000);
  const ShopClick = await driver.findElement(shop);
  await ShopClick.click(); 
  await driver.sleep(3000);
  await driver.quit();
  driver = null;
});

Given('Massage POP-UP is Pressed', async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .build();
  await driver.manage().window().maximize();
  await driver.get(BASE_URL);
  
  const Massage = By.xpath('//*[@id="zsiq_agtpic"]');
  await driver.wait(until.elementLocated(Massage), 10000);
  const MassageClick = await driver.findElement(Massage);
  await MassageClick.click(); 
  await driver.sleep(3000);
  await driver.quit();
  driver = null;
});