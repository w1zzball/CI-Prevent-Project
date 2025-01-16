# Prevent Project
This Project aims to create a small static website to provide a brief overview of the UK governments Prevent anti extremism programme along with a list of warning signs of possible radicalisation and a contact form for those worried about extremism. (**this is a proof of concept please see links in the credits section for actual government resources**).

The site aims to be easily legible, navigable and accessible for all users and conforms with standard SEO practices to enhance its visibility on the web as it may be a point of contact for those looking for help.
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

## Testing and Issues
- Use of bootstrap classes demands heavy use of !important keywords in css to override
- Bootstrap default styling looks generic
- W3C HTML and CSS validators return no errors
- use of collapsible elements has negative impact on accessibility 

### Feature to Implement / TODO
- ~~resources / links~~ | **done**
- ~~better integrate images into warning signs section~~ | **done**
- testimonials
- replace low quality AI placeholder images with illustrative vector art
- add aria-expanded attributes to accordion items 

## Deployment
- after initial deployment of MVP with github pages, lighthouse report comes back all over 95%
- with extra features added lighthouse report returns over 90% but SEO and performance under 95%

## Credits
- https://www.officeforstudents.org.uk/advice-and-guidance/student-wellbeing-and-protection/counter-terrorism-the-prevent-duty/prevent-case-studies/

- https://www.bhscp.org.uk/preventing-abuse-and-neglect/spotting-the-signs/signs-of-radicalisation-extremism/
## Software used 
- VSCode for editing
- git for version control
- Balsamiq for wireframing
- ChatGPT for writing copy / placeholder images
- GIMP for image manipulation
