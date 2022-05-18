# restaurant-website

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



To maximize accessibility and esthetics
### 4. Styling the website using CSS
### 5. Making beautiful animations
### 6. Making the website fully responsive
### 7. Making the forms
### 8. Deploying the website on Netlify
### 9. Making the forms functional
### 10. The RESULT
