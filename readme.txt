1) install node.js
2)install selenium webdriver
3)install chromedriver.exe
4)Install Mocha
 A testing framework that will simplify the process of writing tests. Here, we will use Mocha, a node package 
that contains helper code for developing and running tests for node-based projects:

It support test case and test suite structure

5)Install Chai 
this is used for assertion

npm install --save chai

6)Install visualcode tester
this the Javascript editor, where i ran scripts
7)Setup environment variables by setting path of chromedriver

8)Goto javascript folder and execute
a)npm init
b)give description
c)code .   -- to launch visualcode tester from cmd
d)open terminal
e)install selenium webdriver    npm install selenium-webdriver

9)To generate reports
install
a)cucumberjs --format json:./reports/cucumber-json-report.json           --report cucumber-json-report.json will store in reports folder
b)npm install cucumber-html-reporter --save-dev             --install cucumber html reporter module from npm
c)npm install gulp --save-dev            --install gulp module as well
d)gulp cucmberReports                 --To run cucumberReports




Description of tests
There are 3 files
1)loginonedrive.js  -- this will lauch onedrive and login with user credentials.
2)emptyfile.js    -- this file includes scripts to login and upload 0 byte code and verifies thats it gives error.
3)uploadtextfil.js -- this file includes scripts to login, then upload text file and verifies upload of a text file.
                      comaparing metadata of uploaded file. Update the contents of the text document from the OneDrive editor and click on save button to create a new version of the
                      document in OneDrive.Download and comparing with files. deleting files.

