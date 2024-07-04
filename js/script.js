document.addEventListener('DOMContentLoaded', () => {
    const students = document.querySelectorAll('.student');
    const sidebar = document.getElementById('sidebar');
    const graduateName = document.getElementById('graduateName');
    const graduateDetails = document.getElementById('graduateDetails');
    const graduateAchievements = document.getElementById('graduateAchievements');
    const graduateFacebook = document.getElementById('graduateFacebook');
    
    students.forEach(student => {
        student.addEventListener('click', () => {
            // Close the sidebar if it's already open
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
            
            // Add a small delay to ensure the sidebar closes before opening again
            setTimeout(() => {
                const name = student.querySelector('.name').innerText;
                let details = student.querySelector('img').dataset.details;
                const achievements = JSON.parse(student.dataset.achievements);
                const facebook = student.dataset.facebook;
                
                // Check if details are provided, otherwise set to "Graduated"
                if (!details) {
                    details = "Graduated";
                }
                
                graduateName.innerText = name;
                graduateDetails.innerText = details;
                graduateAchievements.innerHTML = achievements.map(achievement => `<li>${achievement}</li>`).join('');
                graduateFacebook.innerHTML = `<a href="${facebook}" target="_blank"><i class='bx bxl-facebook fbicon'></i></a>`;
                
                sidebar.classList.add('open');
            }, 300);
        });
    });
    
    // Close sidebar function
    window.closeSidebar = () => {
        sidebar.classList.remove('open');
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const students = document.querySelectorAll('.student img');
    
    function showImages() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        students.forEach(student => {
            const rect = student.getBoundingClientRect();
            const elemTop = rect.top + scrollTop;

            if (scrollTop + windowHeight > elemTop) {
                student.classList.add('show');
            }
        });
    }

    // Show images that are already in the viewport on page load
    showImages();

    // Add a scroll event listener to show images as they come into view
    window.addEventListener('scroll', showImages);
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutImg = document.querySelector('.about-img');
    const aboutContent = document.querySelector('.about-content');

    function showElements() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        const imgRect = aboutImg.getBoundingClientRect();
        const contentRect = aboutContent.getBoundingClientRect();

        if (scrollTop + windowHeight > imgRect.top + scrollTop) {
            aboutImg.classList.add('show');
        }

        if (scrollTop + windowHeight > contentRect.top + scrollTop) {
            aboutContent.classList.add('show');
        }
    }

    // Show elements that are already in the viewport on page load
    showElements();

    // Add a scroll event listener to show elements as they come into view
    window.addEventListener('scroll', showElements);
});




//contact

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.querySelector('a[href="#contact"]');
    const socialMediaIcons = document.querySelectorAll('.social-media i');

    // Function to animate the contact section and highlight social media icons
    function animateContact() {
        // Add animation class to the contact section
        document.getElementById('contact').classList.add('animate-contact');

        // Highlight social media icons
        socialMediaIcons.forEach(icon => {
            icon.classList.add('highlight-social-media');
        });

        // Remove animation and highlight classes after a delay
        setTimeout(() => {
            document.getElementById('contact').classList.remove('animate-contact');
            socialMediaIcons.forEach(icon => {
                icon.classList.remove('highlight-social-media');
            });
        }, 2000); // Adjust the delay (in milliseconds) as needed
    }

    // Add click event listener to the contact link
    contactLink.addEventListener('click', () => {
        // Smooth scroll to the contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

        // Call the animateContact function after a delay
        setTimeout(animateContact, 1000); // Adjust the delay (in milliseconds) as needed
    });
});
