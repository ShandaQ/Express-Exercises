# Exercises

## Basic Portfolio Site

Make basic portfolio site using Express routing and handlebars templates. It will contain 3 pages:

* Home page
* About me
* Projects

## Add Contact Me

You will add a fourth page to the site: Contact me.

Step 1. This page will have a contact form for visitors to fill out.
Step 2. When they submit the form, you will save their response in a file called messages.txt. Instead of using fs.writeFile(), you will use fs.appendFile() so that you don't overwrite previous requests.
Step 3. After appending the message to the file, you will redirect them to a thank you page.
Step 4. Now make that thank you page.
