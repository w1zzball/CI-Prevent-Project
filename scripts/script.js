//update copyright year
document.getElementById('copyright').innerHTML = `&copy; ${new Date().getFullYear()}.`;

//update contact form after user submits
function submitUpdate(){
    alert('Thank you for your submission');
}
function submitUpdate() {
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML = `
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <h2 class="my-4">Message Submitted</h2>
                    <p class="lead">We'll be in touch</p>
                </div>
            </div>
        </div>
    `;
}

// handle collapsing navbar on mobile view
document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Add click handler to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if navbar is expanded (mobile view)
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});