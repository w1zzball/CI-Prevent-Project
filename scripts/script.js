// Image lookup for both lists
const firstListImages = {
    collapse1: {
        src: './assets/images/accordion/collapse1.webp',
        alt: 'Person withdrawing from social interactions'
    },
    collapse2: {
        src: './assets/images/accordion/collapse2.webp',
        alt: 'Person showing hostile behavior'
    },
    collapse3: {
        src: './assets/images/accordion/collapse3.webp',
        alt: 'Person repeating rehearsed phrases'
    },
    collapse4: {
        src: './assets/images/accordion/collapse4.webp',
        alt: 'Person being secretive about views'
    },
    collapse5: {
        src: './assets/images/accordion/collapse5.webp',
        alt: 'Person displaying anger'
    },
    collapse6: {
        src: './assets/images/accordion/collapse6.webp',
        alt: 'An isolated figure looking at a laptop'
    }
};

const secondListImages = {
    collapse7: {
        src: './assets/images/accordion/collapse7.webp',
        alt: 'Person using extremist language'
    },
    collapse8: {
        src: './assets/images/accordion/collapse8.webp',
        alt: 'Person expressing extremist values'
    },
    collapse9: {
        src: './assets/images/accordion/collapse9.webp',
        alt: 'Support'
    },
    collapse10: {
        src: './assets/images/accordion/collapse10.webp',
        alt: 'Support'
    },
    collapse11: {
        src: './assets/images/accordion/collapse11.webp',
        alt: 'Support'
    },
    collapse12: {
        src: './assets/images/accordion/collapse12.webp',
        alt: 'Support'
    },
    collapse13: {
        src: './assets/images/accordion/collapse13.webp',
        alt: 'Support'
    }
};

//update copyright year
document.getElementById('copyright').innerHTML = `&copy; ${new Date().getFullYear()}.`;

//update contact form after user submits
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
document.addEventListener('DOMContentLoaded', function () {
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

    // Handle accordion behavior for list items and toggle buttons
    const listGroups = document.querySelectorAll('.list-group');
    
    listGroups.forEach(listGroup => {
        const collapseElements = listGroup.querySelectorAll('.collapse');
        const toggleBtn = listGroup.previousElementSibling.querySelector('.toggle-all');
        
        // Initialize button state
        toggleBtn.textContent = 'Expand All';
        
        // Add toggle all button handler
        toggleBtn.addEventListener('click', () => {
            const currentState = toggleBtn.textContent;
            const isExpanding = currentState === 'Expand All';
            
            collapseElements.forEach(collapse => {
                const bsCollapse = new bootstrap.Collapse(collapse, {toggle: false});
                if (isExpanding) {
                    bsCollapse.show();
                } else {
                    bsCollapse.hide();
                }
            });
            
            toggleBtn.textContent = isExpanding ? 'Collapse All' : 'Expand All';
        });

        // Add individual collapse handlers
        collapseElements.forEach(collapse => {
            collapse.addEventListener('show.bs.collapse', () => {
                collapseElements.forEach(other => {
                    if (other !== collapse && other.classList.contains('show')) {
                        bootstrap.Collapse.getInstance(other).hide();
                    }
                });
                //dynamically set image based on collapse id from lookup tables
                if(collapse.id in firstListImages) {
                    document.getElementById('image1').src = firstListImages[collapse.id].src;
                    document.getElementById('image1').alt = firstListImages[collapse.id].alt;
                }
                else if(collapse.id in secondListImages) {
                    document.getElementById('image2').src = secondListImages[collapse.id].src;
                    document.getElementById('image2').alt = secondListImages[collapse.id].alt;
                }
                else {
                    console.log('Image not found');
                }
            });
        });
    });
});

