# UserAnalytics

UserAnalytics is a chrome extension which tracks how much time a user spends on different websites and visualizes the data for the user.

This project was created in a group through UW CSE 403.

## Install & Run UserAnalytics
1. Clone this repository to your machine.
2. Navigate to chrome://extensions in google chrome. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over **More Tools** and selecting **Extensions**.
3. Check the box next to **Developer Mode**.
4. Click **Load Unpacked Extension** and select the **src** folder in this repository.

## How to use UserAnalytics
- Using Chrome as normal. Our app will automatically track your usage. 
- Open the extesion and click the "Go to dashboard" button on the popup page. This will display the usage data on the dashboard.
- You can set the category of the webpage you are currently visiting on the popup page.
- The dashboard page contains options for personalized settings.


## How to report a bug

To report a bug, make a new issue on our public GitHub repo ([Link](https://github.com/patrick-sharp/UserAnalytics)). Include the following pieces of information in the issue:

<!-- THIS INFORMATION IS MANDATORY - YOUR ISSUE WILL BE CLOSED IF IT IS MISSING.
Please format any code or console output with three ticks ``` above and below. -->

**User Analytics version**:

**Operating system** (windows, osx, ...):

**Issue**:



**Console Error (including full traceback)**:
```

```

**Command or request that led to error and steps to reproduce**:
```

```


## WIP Functionalities and Known bugs
- [x] User unable to make deletions to their whitelist.
- [x] The website/domain icons are not presented along with the domain name (currently it is a timer icon).
- [X] Differentiate subdomain from their parent domains.
- [x] Update extension popup UI.
- [x] Missing title for the right chart.
- [X] Change "Most frequent weekly" to expected behavior
- [ ] Correct other category to "uncategorized" category, needs correction in data processing layer
- [ ] The category chart needs unit when hovering. Categories should be displayed according to the order in descending order and the colors should match categories.
- [ ] Do not track UserAnalytic dashboard, chrome://*, and new tab.
- [ ] Better favicon fetching
- [ ] Add ability to view and modify categories in setting
- [ ] Delete data older than 7 days

