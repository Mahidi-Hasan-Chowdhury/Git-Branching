import time
# FIX: Import from selenium, not from 'testing'
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# 1. Initialize the WebDriver instance
# This opens the physical Firefox browser window
#driver = webdriver.Firefox()
driver = webdriver.Chrome()  # Using Chrome instead of Firefox

try:
    # 2. Navigate to Google
    driver.get("https://www.google.com")
    print("Page opened successfully! Title is:", driver.title)

    # 3. Locate the search input element
    # 'q' is the internal name Google uses for its search box
    search_box = driver.find_element(By.NAME, "q")

    # 4. Type the query and hit Enter
    search_box.send_keys("Selenium WebDriver Python")
    search_box.send_keys(Keys.RETURN)

    # 5. Wait for the page to load the new results
    time.sleep(3)

    # 6. Assertion Check: 
    # This verifies if the word 'Selenium' appears in the new tab title
    if "Selenium" in driver.title:
        print("Test Passed! The results loaded perfectly.")
    else:
        print("Test Failed! Keyword not found in title.")

except Exception as error:
    print(f"An error occurred: {error}")

finally:
    # 7. Cleanup: Closes the browser so it doesn't stay open in the background
    driver.quit()