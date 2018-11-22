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
 
[Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.]

### Website Audience

This consists of public transport users, local group activists, Management Committee members, partner organisations, Media organisations, other UK community transport organisations, Nexus officials, and local councillors.

### User Stories

- As a public transport user, I want to follow a link to find local transport information like timetables, fares, etc.
- As a non-activist (individual, journalist), I want to find out more information about the organisation and transport issues.
- As an activist, I want to find out information about transport issues local group meetings, events, demonstrations, etc.
- As an official (councillor, bus company manager, etc), I want to find out information about Transport Forum meetings.
- As an TWPTUG local group officer, I want to find reminders about local group meetings and Transport Forum meetings details.
- As an TWPTUG Management Committee officer, I want to find reminders about Management Committee meetings details.

### Layouts

These are stored in the __Project Documentation_ folder on GitHub. I drew out the Home page layout first, but I didn't stick to
as it just didn't look right on the page. I changed the navigation menu from vertical to horizontal, but this altered everything else. The later pages reflect the new design. The layout diagrams show both the wide screen and mobile layouts.

- Proposed menu and page structure.pdf
- Home page layouts.pdf
- Group page layouts.pdf (This is a general template for the 5 Local Groups)
- About page layouts.pdf
- Acknowledgement layouts.pdf (Feedback page for submitted email forms)

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
    - A horizontal button group that become vertical when screen size is less that 768px.
- acknowledgement.html:
    - Displays a Bootstrap jumbotron 'Thank You' message after user has submitted an email to the site. Includes a Return button to go back to the previous page, where the email facility was invoked. (I considered a Bootstrap modal window to do this initially but it isn't recommend by them.)
    - Displays a Bootstrap jumbotron 'Under Construction' message after user has submitted an email to the site. Includes a Return button to go back to the previous page, where the current page was was invoked. This page is a template of the 'Thank You' page, though it is coloured differently to indicate a different purpose.

- about.html:
    - Displays tool tips describing the photos when the images are hovered over.

### Features Left to Implement

- Fully develop content and layout for pages currently displayed as Under Construction (referenced above).
- Validation of email forms, particularly to check the first email address matches the confirmation email.
- Get the site to send real emails to a test email account.
- Use JavaScript (or some other language) to send the media link to video and audio modals, so that only one instance of each is required in 
the HTML. I don't know how to do this currently, so individual blocks of HTML have to copied and modified for every video or audio file that is shown in the news panel. This could make the HTML very cumbersome to load.
- Find a way to create just one instance of a common element, such as the navigation menu or footer (which can then be 'called' into each page as required) so it can be maintained in just one place. This especially important on big sites because no-one wants to, for example, insert (and test!) a new menu dropdown item for a 50-page site. From my searches online, I understand this can be achieved using either server side includes or a programming language.

## Technologies Used

- [HTML5]( https://www.w3.org/TR/html52/) 
  - To build page structure and content

- [CSS3]( https://www.w3.org/standards/techs/css#w3c_all)
  - To style page structure and content.

- [Bootstrap 3.3.7]( https://getbootstrap.com/docs/3.3/getting-started/)
  - To use template components to easily create and style responsive elements like the navigation menu, buttons, call-outs, etc.

- [Google Fonts]( https://fonts.google.com/)
  - For 'Roboto' font style used on all pages.

- [Font Awesome 5]( https://fontawesome.com/)
  - Used to create 'icon' characters for menus, video and audio links, social media, external links, etc.

- [JQuery](https://jquery.com)
  - Snippet added to pause both modal video and audio playback when modal widow is closed.
  - Snippet added to allow user to return back to previous page after a message acknowledgement or navigating to an 'Under construction' page.

### STILL TO COMPLETE! >>

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
- The text for the Welcome sections on the Group pages was copied from the TWPTUG 2018 Annual Report though edited to suit.
- The text for the About page comes from a combination of the About and Partner pages on the live TWPTUG website.
- The News panel articles on the Home page are all real and are replicated from the Home page of the live TWPTUG website.

### Media
- The photos used in this site were obtained from 
    - Pixabay( https://pixabay.com/en/). These are the large images on the Group pages, except for Sunderland.
    - Existing TWPTUG resources, mostly photos taken by activists. These are the images on the About page.
    - Reinventing Transport (for the RT logo in the audio modal) shared under a Creative Commons licence (linkable from modal).
    - Facebook page photographic page - check out owner!

### Acknowledgements

- I received inspiration for this project from my mentor, Chris Zielinski who patiently showed me how to use Bootstrap columns properly. Also many thanks to Slack regulars / mentors 'Jo Wings' and 'Eventyret_mentor' for sorting out my stupid mistakes and misunderstandings.
   


