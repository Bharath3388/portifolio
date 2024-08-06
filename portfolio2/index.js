// ======================= FLOATING NAV
const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () => {
floatingNavs.forEach(nav => {
nav.classList.remove('active')
})
}

floatingNavs.forEach(nav => {
nav.addEventListener('click', () => {
removeActiveClass();
nav.classList.add('active')
})
})










// ======================= RESUME
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `
<h4>Experience</h4>
                <p>
                    At Hippo Cloud, I developed a comprehensive E-commerce website using Django with Python and MySQL.
                </p>
                <ul>
                    <li>
                        <h6>2022-23</h6>
                        <h5>Intern</h5>
                        <p>Hippo cloud</p>
                    </li>
                </ul>
`
const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
resumeRight.innerHTML = experienceContent;
resumeRight.className = 'resume__right'
experienceBtn.classList.add('primary')
// remove classes from other buttons
aboutBtn.classList.remove('primary')
skillsBtn.classList.remove('primary')
educationBtn.classList.remove('primary')
})
// set experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;





// education
const educationBtn = document.querySelector('.education__btn');
const educationContent = `<h4>Education:</h4>
                <ul>
                    <li>
                        <h5> Unversity/College </h5>
                        <p>
                            -B.Tech in CSE
                            <br>
                            -GMR Institute of Technology
                            <br>
                            -CGPA: 9.20/10
                        </p>
                    </li>
                    <li>
                        <h5>Intermediate</h5>
                        <p>
                            -Tirmula Junoir college
                            <br>
                            -2019-2021
                            <br>
                            -98.6 percentage
                        </p>
                    </li>
                    <li>
                        <h5>High School</h5>
                        <p>
                            -Sri chaitanya School
                            <br>
                            -2018-2019
                            <br>
                            -GPA: 10/10
                        </p>
                    </li>
                </ul>`

educationBtn.addEventListener('click', () => {
resumeRight.innerHTML = educationContent;
resumeRight.className = 'resume__right education'
educationBtn.classList.add('primary')
// remove classes from other buttons
aboutBtn.classList.remove('primary')
skillsBtn.classList.remove('primary')
experienceBtn.classList.remove('primary')
})




// skills
const skillsContent = `<h4>Skills</h4>
                <ul>
                    <li>
                    <h5>Programming Skills</h5>
                    <p>
                    -C
                    <br>
                    -Python
                    <br>
                    -Java
                    </p>
                    </li>
                    <li>
                    <h5>CS Core</h5>
                    <p>
                    -DBMS
                    <br>
                    -Operating Systems
                    <br>
                    -Computer Networks
                    <br>
                    -Software Engineering
                    </p>
                    </li>
                    <li>
                    <h5>Web Skills</h5>
                    <p>
                    -HTML
                    <br>
                    -CSS
                    <br>
                    -JS
                    <br>
                    -Django
                    </p>
                    </li>
                    
                </ul>`

const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventListener('click', () => {
resumeRight.innerHTML = skillsContent;
resumeRight.className = 'resume__right skills'
skillsBtn.classList.add("primary")
// remove classes from other buttons
aboutBtn.classList.remove('primary')
experienceBtn.classList.remove('primary')
educationBtn.classList.remove('primary')
})



// about me
const aboutContent = `<h4>About me</h4>
<br>
<li>
<h6>Name:</h6>
<h5>Bharath Mogalapu</h5>
</li>
<li>
<h6>Experience:</h6>
<h5>Fresher</h5>
</li>
<li>
<h6>Email:</h6>
<h5>bharathmogalapu@gmail.com</h5>
</li>
<li>
<h6>Nationality:</h6>
<h5>indian</h5>
</li>
<li>
<h6>Freelance & collabs:</h6>
<h5>Available</h5>
</li>
<li>
<h6>Language:</h6>
<h5>English</h5>
</li>
<li>
<h6>Phone:</h6>
<h5>+918919454656</h5>
</li>
<li>
<h6>LinkedIn:</h6>
<h5>@bharathmogalapu</h5>
</li>
</ul>`

const aboutBtn = document.querySelector('.about__btn')
aboutBtn.addEventListener('click', () => {
resumeRight.innerHTML = aboutContent;
resumeRight.className = "resume__right about"
aboutBtn.classList.add("primary")
// remove classes from other buttons
skillsBtn.classList.remove('primary')
experienceBtn.classList.remove('primary')
educationBtn.classList.remove('primary')
})










// =================================== MIXITUP (projects section)
const containerEl = document.querySelector('.projects__container')
let mixer = mixitup(containerEl, {
animation: {
enable: false
}
})

mixer.filter('*')












// =================================== SWIPER
const swiper = new Swiper('.swiper', {
// Optional parameters
loop: false,
slidesPerView: 1,
spaceBetween: 30,
// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true
},
breakpoints: {
600: {
slidesPerView: 2
}, 1024: {
slidesPerView: 3
}
}
});





// =================================== THEME
const themeToggler = document.querySelector('.nav__theme-btn')
themeToggler.addEventListener('click', () => {
document.body.classList.toggle('dark-theme-variables')
if(document.body.classList == '') {
themeToggler.innerHTML = `<i class="uil uil-moon"></i>`
window.localStorage.setItem('portfolio-theme', '')
} else {
themeToggler.innerHTML = `<i class="uil uil-sun"></i>`
window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')
}
})

// use theme from local storage on page load
const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;