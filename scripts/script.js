

//update copywrite year
document.getElementById('copywrite').innerHTML = `&copy; ${new Date().getFullYear()}.`;

function submitUpdate(){
    alert('Thank you for your submission');
    // document.getElementById('form').reset();
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