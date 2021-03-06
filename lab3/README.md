# README.md LAB 3 WebSys

### Work Log

Virginia Barnes:
Major structure for index.html, HTML/CSS validation, resume

Gabriel Wild:
Major structure for resume page and style.css, hCard.

Zehao Qin:
Project mock-up, hcard, minor resume page fix, html and css validation

Derek Li:
Project mock-up, hCard, Google font, resume page, index page fix.

TJ Samuels:
Resume page, hCard. Fixing minor Git technical blocker.


### Semantic Markup Explanation
Preface: The explanation for the index.html page is how we intended to markup. Unfortunately, when changing div's to section or article, our CSS would mess up and we could not figure out how to fix this.
The markup for the index.html page is semantically correct. We used a div tag, id'ed as "homepage" to encompass all markup in the HTML body. We did not use article or section here because later in the index.html file, article and section are used in a more consistent way. Using it at the beginning would make the meaning of article or section confusing.
We also use div to label the "topPhrase" and "bottomPhrase". This is, again, because our group wanted to keep the use of article and section consistent and meaningful in the rest of the file.
Our group used section to label the header (team name and phrase), the example works, and the team member profiles. Within the example works and team member profiles, each individual example or profile is labeled with section.
The markup for the resume pages is semantically correct. The tags h1-h4 were used for headings, and subheadings on the resume. A p tag was used for the summary, which is the only section with a complete paragraph. For the list items, ul and li tags were used. Other than those tags, a few div elements were used for styling purposes. They were only used to separate out different sections of the document for things like sizing purposes. For example, divs were used for separating out the two columns in the document, so they could be properly spaced and formatted using bootstrap.

### hCard explanation
Derek:
The hCard information added to the personal pages are useful for both humans and machines because the hCard clearly denotes each section of the contact information. Each tag represents a piece of contact information, which makes it easy for both humans and machines to attribute meaning to each part of the text. Address, name, organization, etc. are all clearly denoted.

Gabriel:
The hCard info on my resume page is easy to read for people, because all relevant data is grouped together and formatted logically. More importantly, because all the data on the html document itself has an appropriate tag and formatting, machines can quickly parse my contact information from the page. Which, given that this is a resume, is something I want to be easily parsed.

Kyle:
It enhances my resume because it presents all my contact info in one spot. The tags are semantically correct so it's easy for machines and humans to read.
Besides the extra tag attributes, the div's and spapn's were used for styling purposes and shouldn' be too confusing for future maintenance.

Virginia:
The hCard information added to my personal resume page is useful to both humans and machines trying to access my content because each bit of information about my address is labeled in a clear and consistent way. Machines and humans would both be able to quickly decipher which line is dedicated to which part of my address.

Samuel:
All my contact info were listed in a clear, organized manner. hCard provides readability for html content and is semantically correct even though non-semantic tags were used for styling.

### References
Websites used for inspiration: https://www.werkstatt.fr/en/
Bootstrap documentation and w3schools used for reference

### Extra Credit
Our index.html page uses Web fonts and CSS to enhance the visual presentation of our document. Our markup references Noto Sans and Cardo from Google Fonts. These fonts are assigned in our style.css file. The fallback fonts we chose were sans-sarif and sarif respectively. To see the fallback fonts in action, we used Netsurf to display our webpages. Opening our webpage in Chrome or Firefox allowed for Google fonts to be used, but opening in Netsurf caused sans-sarif and sarif to be used instead.
