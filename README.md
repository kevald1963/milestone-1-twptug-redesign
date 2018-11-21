# Tyne & Wear Public Transport Users Group website redesign

Organisational overview:

Tyne & Wear Passenger Transport Users Group (TWPTUG) is voluntary community group that campaigns for the full integration of public transport 
in Tyne & Wear, such as rail, Metro, bus and ferry with private transport modes such as of walking, cycling and driving. TWPTUG believes such 
integration can only be achieved through local public ownership of public transport. TWPTUG covers the five boroughs of Tyne & Wear, namely 
Newcastle, Gateshead, North Tyneside, South Tyneside and Sunderland. Only Newcastle and North Tyneside are running at the moment. Gateshead and
South Shields did start up but have since stopped due to various reasons like members moving out of the area, ill-health, and the distraction
of other issues affecting the community like hospital closures. TWPTUG is run by a Management Committee, the members of which are elected 
by individuals within the local groups and partner organisations. TWPTUG’s members include individuals as well as a number of partner 
organisations such as cycling groups, pensioners’ groups, union community branches and other community transport groups from across the UK. 
TWPTUG also works closely with bus operating companies, local authorities and Nexus to influence general transport policy. Nexus is the Passenger 
Transport Executive for Tyne & Wear, which directly operates the Metro and the Shields Ferry on behalf of the five boroughs and secures some 
essential local bus services ran by the private bus operators.

Current website:

The current website (www.twptug.org.uk) was created in 2010 using a website builder called Webeden. This tool is a somewhat dated product, has 
little documentation to support it, and has some time-consuming bugs to work around. It is awkward to use for both maintaining and developing the site. The TWPTUG site was not built with 
responsive design in mind. It may not have even been available then. There is now some support for displaying on a mobile but the results are 
far from perfect e.g. elements and components are too wide making it necessary to scroll from left to right on a narrow screen. This seems to 
have been done all automatically. It is not clear how the width can be reduced, or elements can be styled differently to the default. The TWPTUG
site has a primitive blogging page that supports basic text and image formatting. It is not currently used but there is an intention to do some 
blogging activity in the future. TWPTUG have both a Facebook and Twitter account but connection to social media is only currently available via  
the blog page, which appears to be built into the page already. The current logo (entitled “Action on Public Transport”) does not look particularly
professional. It is also not clear from the website what "Action on Public Transport" is. It is, in fact, an alternative name later suggested for
TWPTUG, because it was thought "Tyne & Wear Passenger Transport Users Group" was too long. However, the latter has stuck with many people, though
they tend to abbreviate it to "PTUG", so it's not so easy to change it now. Putting both logos up is a bit of a silly fudge, so for the redesigned
website, I will be dropping the “Action on Public Transport” logo so as to avoid visitor confusion over which organisation the site is supposed
to represent. The content of the live site is quite dynamic as news articles, events, files and meeting notices are posted to it regularly, and 
old stuff is taken down. The website averages around 3000 hits per calendar month.

Website purpose:

a)	Disseminate information on transport issues, including air pollution.
b)	Disseminate information on campaigns, petitions, protests, events and regular local group and Transport Forum meetings. 
c)	Signpost people looking for transport information to Nexus, local bus operating companies and train companies.

Long-term aims:

I am currently responsible for maintaining the website, which is a quite tedious task using the site builder. Therefore, my long-term aim is 
to re-design the website in HTML5, CSS3, Bootstrap and JavaScript. At some point in the future, I would like to also separate the content from
the presentation by using an open source content management system (CMS). A CMS is needed because the organisation does not have the finances
to employ a professional developer, and I may not be available, for whatever reason. I want to develop a system that members can update easily
themselves, without having to rely on me. For example, I would prefer local group secretaries to post their own group meetings and events, 
rather than email details to me to post on their behalf.

Aims for this release:

As per the milestone project criteria, my aim is to initially prototype a responsive front-end website using HTML5, CSS3 and Bootstrap. I want
to give it a fresher, more appealing look while still retaining most of the existing features and adding some new ones. I particularly want to
display more images and icons across the site. I think it is probably a good idea to create all the necessary menu buttons but without adding 
content (other than standard content) to all the pages not included in this release. Instead I will create them but display them show them as 
‘Under construction’, with a Back button, if they are entered.

It is not necessary to construct most of the website in the first phase of development phase for the following reasons:

a)	First and foremost, the new site would need to be ‘sold’ to the Management Committee, so a minimum-build agile development will be 
    sufficient to give it an idea of how it will look and function.
b)	The existing site, though outdated and clunky, is still functioning and its content is still being regularly updated.
c)	The amount of development work involved for the front-end is too much for me to complete in a reasonable timescale.

Pages/modals to implement and add styled content to:

Home
Local Groups (5 in total i.e. Newcastle, Gateshead, North Tyneside, South Tyneside, Sunderland) 
About Us (existing Partners page info will be merged with this page) 
Email acknowledgement
Under construction
Modal email form
Modal video (launched from News panel)
Modal audio (launched from News panel)

Pages to be displayed as Under Construction:

Re-regulation
Hospital Buses
Bus Facts
Rail
Cycling
Transport Select Committee
Air pollution
Media
Pensioners
Disability
Blog

External links:

Sustrans
Passenger Transport Magazine
Transport Focus News
Campaign for Better Transport

## UX
 
[Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.]

Website audience:

Public transport users, local group activists, Management Committee members, partner organisations, Media organisations, other UK community transport organisations, Nexus officials, and local councillors.

[In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

User stories:

1) As a public transport user, I want to follow a link to find local transport information like timetables, fares, etc.

2) As a first time visitor, I want to find out more information about the organisation and transport issues.

3) As an activist, I want to find out information about transport issues local group meetings, events, demonstrations, etc.

4) As an TWPTUG local group officer, I want to find out information about local group meetings and Transport Forum meetings.

5) As an TWPTUG Management Committee officer, I want to find out information about, Management Committee meetings.

[This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.]

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team