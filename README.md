# Adrien's Kitchen

In this project, I create a fully functional and responsive restaurant website using HTML, CSS and JavaScript, from scratch. I deployed this website using netlify, and you can visit it at this address: [https://adrien-s-kitchen.netlify.app](https://adrien-s-kitchen.netlify.app)

The website is composed of 5 pages: home, menu, about, contact and booking pages. It is fully responsive as the layout adapts to all widths of screen, using the CSS media queries. It is also functional because the forms included on the website collects data, which is displayed on the Netlify dashboard. 


<img src="https://github.com/NOBODIDI/Restaurant-website/blob/main/restaurant_website/images/logo.png" height="150">
Restaurant Website logo, created using Google Drawings

### 1. Creating an HTML structure for the website

A strong HTML structure is what makes styling easier. Using this phrase as a guide, I created a modular HTML structure where each section on the page is clearly separated and given an id. Inside these sections, divs are used to give a class to every element. 
For example, on the home page there is a section detailing the restaurant's opening hours, location and phone number. All of the elements in this section are contained in divs that are each given a class "container". This makes it easy to style elements of the same class together in CSS, and to have all of our elements organized. 

```
    <!-- Store Info Section-->
    <section id="storeInfo" data-aos="fade-up">
        <div class="container">
            <div class="store__info__wrapper">
                <div class="store__info__item">
                    <div class="store__info__icon">
                        <img src="./restaurant_website/images/wall-clock-icon.svg" alt="icon">
                    </div>
                    <h3 class="store__info__title">
                        10 AM - 7 PM 
                    </h3>
                    <p class="store__info__text">
                        Opening Hours
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Store Info Section -->
```
This is a sample of the formatting of an HTML module in the website.

### 2. Obtaining images and logos

I used [Pixabay](https://pixabay.com/) to obtain images that are free-to-use. This is essential when deploying a website on the internet. 
For the icons, I used the open-source library [Feather Icons](https://feathericons.com/). 

I created the logo for "Adrien's Kitchen" on Google Drawings, and saved it as a svg. 

### 3. Choosing a color palette

The goal when choosing a color palette is to have a distinct and memorable color pattern that is esthetic, and helps to make the website accessible for all. 
Readability is most affected by contrast between colors so I made sure to keep this contrast high between text and background. 

<img src="https://github.com/NOBODIDI/Adrien-s-Kitchen/blob/main/restaurant_website/images/text_contrast.png" height="250">
The text and background are always distinguishable. 

### 4. Styling the website using CSS

I first created color variables, imported two fonts (Poppins and Raleway), and implemented default styles for the website. I then proceeded onto writing the different modules in their pages' respective CSS files. For some modules that are present on several pages, I did the styling on a file that is referenced in all HTML files, for simplicity. 

I used CSS Grid and Flexboxes, as well as many standard CSS properties. 

### 5. Making beautiful animations

I used the [Animate On Scroll Library](https://michalsnik.github.io/aos/) to animate the modules of the website as they appeared in the viewport. After initializing these animations on JavaScript, I used them by setting them for each module. 

### 6. Making the website fully responsive

Each module was programmed with a mobile-first strategy in mind, then it was adapted to larger screens (above 768px in width) using media queries. When necessary, I also added media queries for casese where the screen would be very thin ( less than 300px). This makes the website usable on all screen sizes. 

### 7. Deploying the website on Netlify

By connecting my GitHub accound to Netlify, I was able to put the website online. From the Netlify platform I changed the website address to [](). 

### 8. Making the forms functional
### 9. The RESULT
