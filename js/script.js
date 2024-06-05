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
