# Tyne & Wear Public Transport Users Group website redesign

## Introduction

I maintain the content of the above website which, though it does its job, is both dated and visually unappealing. It needs to be redeveloped,
sooner rather than later, so I decided to do a first release of that as my project rather than the assignment brief based on a rock band. The site is 
huge, so no more than a prototype can be attempted. However, this fits in well with an agile approach, since I first need to convince 
the organisation of the need to re-develop it, so a partly-completed version that gives a general idea of how it could look is sufficient 
at this point in time.

### Organisational Overview

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

### Current website

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
they tend to abbreviate it to "PTUG", so it's not so easy to change it now. Putting both logos up is a bit of a fudge, so for the redesigned
website, I will be dropping the “Action on Public Transport” logo so as to avoid visitor confusion over which organisation the site is supposed
to represent. The content of the live site is quite dynamic as news articles, events, files and meeting notices are posted to it regularly, and 
old stuff is taken down. The website averages around 3000 hits per calendar month.

### Website Purpose

- Disseminate news on transport issues, including air pollution.
- Disseminate information on campaigns, petitions, protests, events and regular local group and Transport Forum meetings. 
- Signpost people looking for transport information to Nexus, local bus operating companies and train companies.

### Aims For This Release

As per the milestone project criteria, my aim is to initially prototype a responsive, front-end website. I want
to give it a fresher, more appealing look while still retaining most of the existing features and adding some new ones. I particularly want to
display more images and icons across the site. I think it is probably a good idea to create all the necessary menu buttons and associated pages but without adding 
content (other than standard content like menus and footers) to all the pages NOT included in this release. Instead, I will create them but display them as 
‘Under construction’, with a Back button, if they are entered.

## UX
 
### Website Audience

This consists of public transport users, local group activists, Management Committee members, partner organisations, Media organisations, other UK community transport organisations, Nexus officials, and local councillors.

### User Stories

User stories to be catered for in this release:
- As a public transport user, I want to find local transport information like timetables, fares, ticket-types, etc.
- As a non-activist (member of the public, journalist, researcher, etc), I want to read information about the organisation and/or transport issues.
- As a non-activist, I want to contact someone to ask further questions about the organisation and/or transport issues.
- As an activist, I want to read information about transport issues local group meetings, events, demonstrations, etc.
- As an official (councillor, bus company manager, etc), I want to view information about Transport Forum meetings and other public events.
- As an official (councillor, bus company manager, etc), I want to contact someone to ask further questions about Transport Forum meetings and other public events.

### Layouts

The files shown below are stored in the __Project Documentation_ folder in the GitHub repository. The layout diagrams show both wide screen and mobile layouts. I drew out the Home page layout first, but I didn't stick to it as it didn't look right on the page. The later pages reflect the new design. Even then, I haven't followed the later designs to the letter, but repositioned elements according to what looked right in practice. I did not design layouts for the Acknowledgement page as it consisted only of a simple banner message and a Return button. Similarly for the 'Under construction' pages, as these were cloned from the Acknowledgement page, though styled with a different background colour. 

- Proposed menu and page structure.pdf
- Home page layouts.jpg
- Group page layouts.jpg (This is a general template for the 5 Local Groups)
- About page layouts.jpg

## Features

### Pages/modals implemented and styled:
- Home
- Local Groups (5 in total i.e. Newcastle, Gateshead, North Tyneside, South Tyneside, Sunderland) 
- About (existing Partners page info, from live website, is merged with this page) 
- Email acknowledgement
- Under construction
- Modal email form
- Modal video (launched from News panel)
- Modal audio (launched from News panel)

### Pages to be displayed as 'Under Construction':
- Bus Facts
- Re-regulation
- Hospital Buses
- Rail
- Cycling
- Transport Select Committee
- Air pollution
- Media
- Pensioners
- Disability
- Blog

### Existing Features

- All pages:
    - A comprehensive Bootstrap menu that collapses into a hamburger icon when screen size is less that 768px.
    - A footer showing summary About info, an email link and social media links.

- index.html:
    - Scrolling News panel with links to external websites, pdfs, video and audio files.
    - Modal windows for playing video and audio.
    - A horizontal button group that become vertical when screen size is less that 768px.

- acknowledgement.html:
    - Displays a Bootstrap jumbotron 'Thank You' message after user has submitted an email to the site. Includes a Return button to go back to the previous page, where the email facility was invoked. (I considered a Bootstrap modal window to do this initially but it isn't recommend by them.)

- All undeveloped pages (e.g. busfacts.html, rail.html, blog.html, etc):
    - Displays a Bootstrap jumbotron 'Under Construction' message when a enters an undeveloped page. Includes a Return button to go back to the previous page, where the current page was was invoked. Although this is just a prototype site, I did not want users to get a Not Found error when accessing an undeveloped page. This page is a template of the 'Thank You' message page, though it is coloured differently to indicate a different purpose.

- about.html:
    - Displays tooltip text describing the photos when the images are hovered over.

### Features Left to Implement

- Fully develop content and layout for pages currently displayed as Under Construction (referenced above).
- Validation of email forms, particularly to check the first email address matches the confirmation email.
- Get the site to send real emails to a test email account.
- Use JavaScript (or some other language) to send the media link to video and audio modals, so that only one code instance of each is required in a page.
I don't know how to do this currently, so individual blocks of HTML have to copied and modified for every video or audio file that is shown in the news panel. This could make the HTML very cumbersome and slow to load.
- Find a way to create just one instance of a common element, such as the navigation menu or footer (which can then be 'called' into each page as required) so it can be maintained in just one place. This especially important on big sites because no-one wants to, for example, to insert (and test!) a new menu dropdown item for each page on a large site. From my searches online, I understand this can be achieved using either server side includes or a programming language.

## Technologies Used

- [HTML5](https://www.w3.org/TR/html52/) 
  - To build page structure and content

- [CSS3](https://www.w3.org/standards/techs/css#w3c_all)
  - To style page structure and content.

- [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/getting-started/)
  - To provide template components to easily create and style responsive elements like the navigation menu, buttons, banners, etc.

- [Google Fonts](https://fonts.google.com/)
  - For 'Roboto' font style used on all pages.

- [Font Awesome 5](https://fontawesome.com/icons?d=gallery)
  - Used to create 'icon' characters for menus, video and audio links, social media, external links, etc.

- [JQuery](https://jquery.com)
  - Used to simplify DOM manipulation.

- [JavaScript](https://www.w3schools.com/js/js_versions.asp) snippets added to:
  - pause both modal video and audio playback when modal widow is closed.
  - allow return back to previous page after a message acknowledgement or navigating to an 'Under construction' page.
  - clear modal email forms after form is submitted.

## Testing

- Excel workbook,'Test plan - TWPTUG redesign', stored in the __Project Documentation_ folder in the GitHub repository, details all the functional and responsiveness tests carried out across several popular browsers.

- As the site gets bigger I will definitely need to create some automated test scripts, because manual testing will just get too slow and tedious to carry out. I did consider doing it for this particular phase of 
  development, using a product, based on Selenium IDE, called Katalon Recorder but, after a bit of experimentation, I found it was not sophisticated enough to capture page and window identifying information without 
  writing some programming code in its sister product Katalon Studio. This is too much of a learning curve for me at this point in time.

## Deployment
- The Project is deployed on GitHub Pages, using the default settings. Click [here](https://kevald1963.github.io/milestone-1-twptug-redesign/) to view.

## Credits

### Content
- The text for the Welcome sections on the Group pages was copied from the TWPTUG 2018 Annual Report, and edited to suit.
- The text for the About page comes from a combination of the About and Partner pages on the live TWPTUG website.
- The News panel articles on the Home and Group pages are replicated from the the live TWPTUG website.

### Media
- The images used in this site were obtained from 
    - [Pixabay](https://pixabay.com/en/). These are the large images on the Group pages, except for South Shields and Sunderland.
    - Existing TWPTUG resources, mostly photos taken by activists. These are the images on the About page.
    - [Reinventing Transport](https://www.reinventingtransport.org/) logo, shared under a Creative Commons licence. Logo is used in the audio modal as a link to the RT website. A link to the CC licence (which must be shown) is provided in the footer of the modal.
    - The large images on the South Shields and Sunderland group pages were licensed by TWPTUG from John R. Short, author of Facebook page [See Tyne and Wear Differently](https://www.facebook.com/ctynewear/).
- The embedded video file is from [Parliament TV](https://www.parliamentlive.tv)
- The embedded audio file is from Reinventing Transport (above)

### Code Snippets
- to pause modal video/audio playback when modal widow is closed is credited to user3376436 on Stack Overflow at https://stackoverflow.com/questions/5958132/javascript-to-stop-html5-video-playback-on-modal-window-close
- to allow user to return back to previous page credited to W3 Schools at https://www.w3schools.com/jsref/met_his_back.asp
- to clear modal email forms is credited to user3127109 on Stack Overflow at https://stackoverflow.com/questions/15827262/how-to-reset-form-body-in-bootstrap-modal-box

### Acknowledgements

- I received inspiration for this project from Paul Baker and Vicki Glbert who work tirelessly on behalf of TWPTUG. Many thanks also to my mentor, Chris Zielinski, for his expertise advice and guidance, particularly on responsivity. Also thanks to Slack regulars 'Jo Wings' and 'Eventyret_mentor' for sorting out my mistakes and misunderstandings.
