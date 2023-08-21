import time

import pytest
from behave import given, when, then
from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_URL = "https://hishabee.business/"


@given("I am on the Hishabee Business application")
def open_home(context):
    context.driver = webdriver.Chrome()
    context.driver.get(BASE_URL)

    wait = WebDriverWait(context.driver, 10)
    element = wait.until(EC.visibility_of_element_located((By.XPATH, "/html/body/div[2]/div/div/div/section[1]/div/div[1]/div/div[2]/div/h1")))
    element.is_displayed()

    context.driver.close()


@then("I click Web Login button")
def Web_Login(context):
    context.driver = webdriver.Chrome()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 10)
    element = wait.until(EC.visibility_of_element_located((By.XPATH, "/html/body/div[2]/div/div/div/section[1]/div/div[1]/div/section/div/div/div/div[2]/div/div/a/span/span")))
    element.click()
    new_element_selector = (
    By.CSS_SELECTOR, "#app > div > section > div > div > div > div > div > form > div > div > input")
    new_element = wait.until(EC.visibility_of_element_located(new_element_selector))
    number_to_input = "01711111111"
    new_element.send_keys(number_to_input)
    new_element.send_keys(Keys.RETURN)
    time.sleep(5)
    context.driver.close()


@when("I Press the Make App Button")
def make(context):
    context.driver = webdriver.Chrome()
    context.driver.maximize_window()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 5)
    make_app_element = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-1-78f96407"]/li[2]/a')))
    make_app_element.click()
    time.sleep(5)
    context.driver.close()

@given("Download Hishabee App")
def app(context):
    context.driver = webdriver.Chrome()
    context.driver.maximize_window()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 3)
    app_download = wait.until(EC.visibility_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div/section[1]/div/div[1]/div/section/div/div/div/div[1]/div/div/a/span/span')))
    app_download.click()
    time.sleep(5)

@then("Enter here first and last name")
def name(context):
    wait = WebDriverWait(context.driver, 10)
    first_name_input = wait.until(EC.visibility_of_element_located((By.ID,'wpforms-6607-field_0')))
    last_name_input = wait.until(EC.visibility_of_element_located((By.ID, 'wpforms-6607-field_0-last')))
    first_name_input.send_keys('Saiful')
    last_name_input.send_keys('Islam')
    time.sleep(2)

@then("Enter here mobile number")
def number(context):
    wait = WebDriverWait(context.driver, 10)
    phone_number_input = wait.until(EC.visibility_of_element_located((By.ID, 'wpforms-6607-field_3')))
    phone_number_input.send_keys('01600000000')
    time.sleep(2)

@then("Enter here email address")
def email(context):
    wait = WebDriverWait(context.driver, 10)
    email_input = wait.until(EC.visibility_of_element_located((By.ID, 'wpforms-6607-field_1')))
    email_input.send_keys('test@gmail.com')
    time.sleep(2)

@then("Select wich device is support")
def radio_buttons(context):
    wait = WebDriverWait(context.driver, 10)
    radio_button = wait.until(EC.visibility_of_element_located((By.ID, 'wpforms-6607-field_4_1')))
    radio_button.click()
    time.sleep(2)

@when("Fill up form press submit")
def submit(context):
    wait = WebDriverWait(context.driver, 10)
    submit_button = wait.until(EC.visibility_of_element_located((By.ID, 'wpforms-submit-6607')))
    submit_button.click()
    time.sleep(2)

@then("HISABEE Icon pressed going home again")
def home(context):
    wait = WebDriverWait(context.driver, 10)
    home_page = wait.until(EC.visibility_of_element_located((By.XPATH,'/html/body/div[1]/section[1]/div/div[1]/div/div/div/a/img')))
    home_page.click()
    time.sleep(2)
    context.driver.close()

@when("Contact option is pressed")
def contact(context):
    context.driver = webdriver.Chrome()
    context.driver.maximize_window()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 5)  # Increased timeout duration
    contact_info = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-1-78f96407"]/li[3]/a')))
    contact_info.click()
    time.sleep(3)

@then("Facebook icon is pressed")
def facebook(context):
    wait = WebDriverWait(context.driver, 10)
    facebook_contact = wait.until(EC.visibility_of_element_located((By.XPATH, '/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[1]/a/i')))
    facebook_contact.click()
    time.sleep(6)

@then("Instagram icon is pressed")
def instagram(context):
    wait = WebDriverWait(context.driver, 10)
    instagram_contact = wait.until(EC.visibility_of_element_located((By.XPATH, '/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[2]/a/i')))
    instagram_contact.click()
    time.sleep(6)

@then("Linkdin icon is pressed")
def linkdin(context):
    wait = WebDriverWait(context.driver, 10)
    linkdin_contact = wait.until(EC.visibility_of_element_located((By.XPATH, '/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[3]/a/i')))
    linkdin_contact.click()
    time.sleep(6)

@then("Youtube icon is pressed")
def youtube(context):
    original_window = context.driver.window_handles[0]
    wait = WebDriverWait(context.driver, 10)
    youtube_contact = wait.until(EC.visibility_of_element_located((By.XPATH, '/html/body/div[2]/section[2]/div/div/div/div[3]/div/div/span[4]/a/i')))
    youtube_contact.click()
    time.sleep(15)
    context.driver.switch_to.window(original_window)
    context.driver.close()

@given("Tutorial option is pressed")
def tutorial(context):
    context.driver = webdriver.Chrome()
    context.driver.maximize_window()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 5)  # Increased timeout duration
    contact_info = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-1-78f96407"]/li[4]/a')))
    contact_info.click()
    time.sleep(3)

@then("Create Online e-commerce shop or Webstore in 1 minute in Bangladesh")
def tutorial1(context):
    wait = WebDriverWait(context.driver, 10)
    tutorial_link1 = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="post-7278"]/div[2]/div/h2/a')))
    tutorial_link1.click()
    tutorial_back = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-1-78f96407"]/li[4]/a')))
    tutorial_back.click()
    time.sleep(6)

@then("How Can You Win Gifts From Hishabee Referral Program?")
def tutorial2(context):
    wait = WebDriverWait(context.driver, 10)
    tutorial_link2 = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="post-7304"]/div[2]/div/h2/a')))
    tutorial_link2.click()
    tutorial_back1 = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-1-78f96407"]/li[4]/a')))
    tutorial_back1.click()
    time.sleep(6)
    context.driver.close()

@given("Shop option is pressed")
def shop(context):
    context.driver = webdriver.Chrome()
    context.driver.maximize_window()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 5)  # Increased timeout duration
    shop_info = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-1-78f96407"]/li[5]/a')))
    shop_info.click()
    time.sleep(3)
    context.driver.close()

@when("Massage POP-UP is Pressed")
def massage(context):
    context.driver = webdriver.Chrome()
    context.driver.maximize_window()
    context.driver.get(BASE_URL)
    wait = WebDriverWait(context.driver, 5)  # Increased timeout duration
    massage_pop = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="zsiq_agtpic"]')))
    massage_pop.click()
    time.sleep(3)
    context.driver.close()