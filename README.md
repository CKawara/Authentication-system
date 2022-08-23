# Authentication-system

#### By [Catherine Kawara](https://github.com/CKawara/)

## Description
This is a project that demonstrates how you could implement authentication using Django, React and Google social. 
The features include; 
 - Account creation and activation,
 - Password reset, and also 
 - Social authentication with google and oauth2. 
 
## Live Link
(To be uploaded)

## Setup Requirements

*   clone the repository
*   in the frontend folder, run
      ```
      npm install
      npm run build
      ```
      to install the required frontend packages and  make a build folder and copy it into the root(backend) folder
*   in the backend folder, run: 
      ```
      python3 -m venv venv
      ```
*   then activate the virtual environment
*   then run: 
      ```
      pip install -r requirements.txt
      ```

* In auth_system/settings.py:

-   under DATABASES, set the PASSWORD field to your database password
-   under EMAIL_HOST_USER, set the email that you want to use
-   under EMAIL_HOST_PASSWORD, set the app password that you setup for your email
-   under SOCIAL_AUTH_GOOGLE_OAUTH2_KEY, paste in your google oauth2 key
-   under SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET, paste in your google oauth2 secret



