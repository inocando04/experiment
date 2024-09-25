let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


function showSidebar(){
    const sidebar = document.querySelector('nav');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    sidebar.style.transform = 'translateX(0)';  
    sidebar.style.transition = 'transform 0.3s ease';  
    
}

function hideSidebar(){
    const sidebar = document.querySelector('nav');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    sidebar.style.transform = 'translateX(30rem)';  
    sidebar.style.transition = 'transform 0.3s ease'; 
}