# Prevent Project
This Project aims to create a small static website to provide a brief overview of the UK governments Prevent anti extremism programme along with a list of warning signs of possible radicalisation and a contact form for those worried about extremism. (**this is a proof of concept please see links in the credits section for actual government resources**).

The site aims to be easily legible, navigable and accessible for all users and conforms with standard SEO practices to enhance its visibility on the web as it may be a point of contact for those looking for help.

(This exercise is to improve web design and not copy writing or vector graphics skills so the images and copy used are ad hoc)

## Features
### Essential Features
- Navbar with links to relevant sections
- Short Description of Prevent
- Signs of Radicalisation
- Contact Form

### Other Features
- copyright information
- dynamic image loading
- contact form updates to give user feedback
## Deployment and Testing
- initial wireframing
- after initial deployment of MVP with github pages, lighthouse report comes back all over 95%
- with extra features added lighthouse report returns over 90% but SEO and performance under 95%
- after more refinement all lighthouse metrics above 98% barring performance, seemingly due to the inclusion of bootstrap
- W3C HTML and CSS validators return no errors

## Issues
- Use of bootstrap classes demands heavy use of !important keywords in css to override
- Bootstrap default styling looks generic
- use of collapsible elements has possible negative impact on accessibility 
- using 'expand all' button collapses first element if open

### Feature to Implement / TODO
- ~~resources / links~~ | **done**
- ~~better integrate images into warning signs section~~ |**done**
- testimonials
- replace low quality AI placeholder images with illustrative vector art
- add aria-expanded attributes to accordion items 
- replace bootstrap with bespoke styling
- ensure all images are of same proportions



## Credits
- https://www.officeforstudents.org.uk/advice-and-guidance/student-wellbeing-and-protection/counter-terrorism-the-prevent-duty/prevent-case-studies/

- https://www.bhscp.org.uk/preventing-abuse-and-neglect/spotting-the-signs/signs-of-radicalisation-extremism/

- https://www.et-foundation.co.uk/

- https://prevent-uk.org/resources

- https://www.gov.uk/government/publications/independent-review-of-prevents-report-and-government-response/independent-review-of-prevent-one-year-on-progress-report-accessible

- https://coolors.co/

- https://validator.w3.org/

- https://jigsaw.w3.org/css-validator/

## Software used 
- VSCode for editing
- git for version control
- Balsamiq for wireframing
- ChatGPT for writing copy / placeholder images
- GIMP for image manipulation
- github Copilot for adding Bootstrap JS logic