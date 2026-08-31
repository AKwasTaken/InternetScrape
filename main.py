import asyncio
from playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeoutError
from bs4 import BeautifulSoup
import re
import pandas as pd

import matplotlib.pyplot as plt
import seaborn as sns

TARGET_URL = "https://gateway.iisertvm.ac.in:4443/"

async def get_dashboard_html(username, password):
    """
    Logs into the user portal asynchronously and returns the HTML of the 
    authenticated dashboard page. Returns None if login fails or errors out.
    """
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(ignore_https_errors=True)
        page = await context.new_page()
        
        page.set_default_timeout(30000)

        try:
            await page.goto(TARGET_URL, wait_until="domcontentloaded")
            
            # Wait 2 seconds for the portal's JavaScript (UserPortalLogin.js) to initialize
            await asyncio.sleep(2)
            
            await page.fill("input#username", username)
            await page.fill("input#password", password)
            
            # Directly evaluate the login function to bypass UI overlay/rendering issues
            await page.evaluate("callLogin()")
            
            # Wait for backend session creation and the subsequent redirect
            await asyncio.sleep(4)
            
            message_div = page.locator("div#message")
            error_text = ""
            if await message_div.count() > 0:
                error_text = (await message_div.inner_text()).strip()
            
            # If we are still on mode=1 (login page) and there's an error, login failed
            if "mode=1" in page.url and error_text:
                return None
            
            html_content = await page.content()
            
            # Optional: Save a copy to disk
            # with open("dashboard_preview.html", "w", encoding="utf-8") as f:
            #     f.write(html_content)
            #     print("Written to file: dashboard_preview.html")
                
            # print(f"Process Complete for '{username[:-2]}'")
            
            return html_content

        except (PlaywrightTimeoutError, Exception):
            # Quietly return None on any connection or timeout errors
            return None
            
        finally:
            await browser.close()

def extract_traffic_rows(html_content):
    # Parse the raw HTML string
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # These are the exact, unchanging IDs of the labels inside the <tr> blocks we want
    target_labels = [
        "Language.UploadedData",
        "Language.DownloadedData",
        "Language.DataTrasfer"
    ]
    
    extracted_html_blocks = []
    
    for label_id in target_labels:
        # Find the label element
        label_elem = soup.find('label', id=label_id)
        
        if label_elem:
            # Find the closest <tr> tag that wraps this label
            parent_tr = label_elem.find_parent('tr')
            
            if parent_tr:
                # Convert the BeautifulSoup object back to a raw HTML string
                extracted_html_blocks.append(str(parent_tr))
                
    # Join the extracted rows with newlines for clean formatting
    clean_output = "\n".join(extracted_html_blocks)
    
    return clean_output

def parse_traffic_totals(html_rows_content):
    soup = BeautifulSoup(html_rows_content, 'html.parser')
    
    # Target label IDs for the three rows
    target_labels = [
        "Language.UploadedData",
        "Language.DownloadedData",
        "Language.DataTrasfer"
    ]
    
    extracted_totals = []
    
    for label_id in target_labels:
        # Find the label element inside the row
        label_elem = soup.find('label', id=label_id)
        
        if label_elem:
            # Locate the parent <tr> tag wrapping this label
            parent_tr = label_elem.find_parent('tr')
            
            if parent_tr:
                # Find all <td> cells within the row
                tds = parent_tr.find_all('td')
                
                # Index 4 corresponds to the right-most 'Total' column before 'Remaining'
                if len(tds) >= 5:
                    cell_text = tds[4].get_text(strip=True)
                    
                    match = re.search(r'([\d\.]+)', cell_text)
                    if match:
                        extracted_totals.append(float(match.group(1)))
                    else:
                        extracted_totals.append(0.0)
                else:
                    extracted_totals.append(0.0)
            else:
                extracted_totals.append(0.0)
        else:
            extracted_totals.append(0.0)
            
    return extracted_totals

async def snitch_internet_usage(username, password):
    raw_html = await get_dashboard_html(username, password)

    stripped_str = extract_traffic_rows(raw_html)
    values = parse_traffic_totals(stripped_str)

    return values

async def main():
    creds = pd.read_csv("data.csv")

    creds["Upload"] = 0.0
    creds["Download"] = 0.0
    creds["Total traffic"] = 0.0

    for index, row in creds.iterrows():
        user = row["Username"]
        passwd = row["Password"]
        name = row["Name"]

        raw_html = await get_dashboard_html(user, passwd)
        
        if raw_html:
            ul, dl, tl = parse_traffic_totals(raw_html)
        else:
            ul, dl, tl = 0.0, 0.0, 0.0

        print(f"{name} ({user}) - Upload: {ul}, Download: {dl}, Total: {tl}")
        
        creds.at[index, "Upload"] = ul
        creds.at[index, "Download"] = dl
        creds.at[index, "Total traffic"] = tl

    creds.to_csv("scrapped_data.csv", index=False)
    print("Saved output to scrapped_data.csv")

if __name__ == "__main__":
    asyncio.run(main())


