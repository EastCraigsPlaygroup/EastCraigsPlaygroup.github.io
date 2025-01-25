Dev notes

I use Visual Studio code to edit files in this project, which is free to download from here:
https://code.visualstudio.com/download
Download the version appropriate to your operating system

Next you need to grab the files that make up the website, which is on GitHub:

1) Get a github account and access to the EastCraigsPlaygroup project:
https://github.com/EastCraigsPlaygroup/EastCraigsPlaygroup.github.io
2) If on windows install powershell (probably already there)
3) Open Visual Studio code and select Source control in the navigation bar on the left
4) Click on the Download Git for windows button and follow the instructions to install it, selecting to 'Use Visual Code as git's default editor' and the defaults for everything else
5) Reload Code and go back to the Source control section
6) Click on Clone repository which will ask you to enter the repo name in the input box (with Clone from GitHub beneath it)
7) Enter this URL and hit return:
https://github.com/EastCraigsPlaygroup/EastCraigsPlaygroup.github.io
8) Select a folder where you would like to clone (copy and download) all of the files to, e.g. a GitHub folder in your Documents folder
9) You'll then be asked if you want to open the workspace and trust the files, which you can do so.
10) You need to set your name and email in git so open a Terminal in Code (Terminal->New) and type in the following, replacing the angled brackets with your details:
git config --global user.name "<Your name used in github>"
git config --global user.email "<Your email used in github>"


When running just open it in this folder and everything should be laid out nicely. Opening code should just default to this workspace for you.
Most of the contents of this folder are from a template and I've just modified it.

The main file that is loaded by default in web browsers is index.html so that's the first page to look at and see how
everything hangs together. Links will take you out to the other html files.
You can open files by holding CTRL and clicking P and then typing the name of the file you want to open

Images are stored in the img folder

Styles (css) are in css/playgroup.css but I have not changed this dramatically from the original template

The website is based on bootstrap to allow it to render nicely on large screens as well as mobile devices.
AngularJS is used for control aspects, e.g. menus, booking system etc and the main code is in js/app.js and the html for each page in the website is in the pages folder.

In app.js you will be able to add new pages or remove logic for old ones - just copy and paste what's already there to start with. The booking and contact forms are more complicated but are also coded in app.js

To get a build running locally in order to test you need to do the following (first time setup):

1) Install node and npm by going to https://nodejs.org/en/download and download the windows installer
2) Run the installer
3) Open powershell and change to the folder you have cloned the repo to, e.g:
cd .\OneDrive\Documents\GitHub\EastCraigsPlaygroup.github.io\
4) Test that npm is available by typing in:
npm --version
5) If npm fails to run you may need to update the powershell permissions for running scripts which can be done by running:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
6) Try again an npm --version should return something like 10.9.2, it doesn't need to be this version
7) Now run the following to install the light-server webserver used in local testing:
npm install

Once everything is installed you are set up to run the local test webserver and test the pages in Chrome or other browser:

1) In Power shell change to the EastCraigsPlaygroup folder and run:
npm run server
2) This should run the local webserver (you may need to Allow access for this in a windows security pop-up)
3) Go to a browser and enter the local URL to test the site:
http://localhost:3000/

Approach to making changes:

Open Code and make changes to files, upload images, create new files etc
Run the test server and go to http://localhost:3000/ to test that everything is OK
When you are happy then you need to do the following to push the changes up to GitHub and make them 'live':

1) In Code you need to click on the Source Control section of the nav bar
2) You will see all of the files you have changed in the Changes section
3) It's good practice to click on each of the changed files to see what changes you have made - this pops up a new window with the changes highlighted in red and green - once you are happy you haven't changed something by accident you can close these windows down
4) Hover your mouse over the Changes accordion and you can then click on the + button to stage all of your changes; alternatively you can do this for each file if you don't want to commit everything in one go
5) Enter a "commit" message in the box just above the Commit button that explains what this change is for and then click on the Commit button
6) In the terminal you can run git commands to push these changes to the live server:
git push
7) If this is the first time you have pushed to GitHub then you will need to enter your login details
8) If you want to see if everything went OK type in the following to the Code terminal:
git status
9) You should see a message like: Your branch is up to date with 'origin/master'
10) If somebody else pushes a change then you won't be able to until you have pulled down their changes which can be done by typing:
git pull
11) It is good practice to do a git pull before you make any changes - if more than one of you are pushing changes then you may want to look online for how to handle merging changes



Note on email:
Emails as provided for free through Formspree and is linked to this account:
https://formspree.io/xqkgzzre
Create your own Formspree account if you wish to modify who emails go to or feel free to just keep using this account
To log in you go to https://formspree.io/ with email playgroupeastcraigs@gmail.com (password needs to be kept safe and sent separately)

Note on domain hosting:
The domain URL is held in the root file CNAME (no file extension) and is set to www.eastcraigsplaygroup.co.uk
Github allows one free host site per user login and needs this file to link it to a domain
You need to set up DNS settings with a domain host server, e.g. if with names.co.uk:
https://www.names.co.uk/support/articles/changing-your-domains-dns-settings/
You essentially link www.eastcraigsplaygroup.co.uk to https://github.com/EastCraigsPlaygroup/EastCraigsPlaygroup.github.io
