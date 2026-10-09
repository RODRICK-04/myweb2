console.log("JavaScript is connected successfully!");

// Dark and light appearance switch
function changeAppearance() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = " Light Mode";
    } else {
        button.textContent = " Dark Mode";
    }
}
/* Photo gallery */
const galleryPhotos = [
    {
        src: "images/picture1.jpg",
        alt: "A photo of me",
        caption: "A photo of me."
    },
    {
        src: "images/picture2.jpg",
        alt: "A night view of me at school",
        caption: "A night view of my photo at school."
    },
    {
        src: "images/picture4.png",
        alt: "A morning photo of me",
        caption: "A morning view of my photo."
    }
];

let currentPhoto = 0;

function showPhoto(index) {
    currentPhoto = (index + galleryPhotos.length) % galleryPhotos.length;

    const image = document.getElementById("galleryImage");
    const caption = document.getElementById("galleryCaption");

    image.src = galleryPhotos[currentPhoto].src;
    image.alt = galleryPhotos[currentPhoto].alt;
    caption.textContent = galleryPhotos[currentPhoto].caption;
}

function nextPhoto() {
    showPhoto(currentPhoto + 1);
}

function previousPhoto() {
    showPhoto(currentPhoto - 1);
}
/* Contact form validation and message preview */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const topic = document.getElementById("topic").value.trim();
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("formFeedback");
        const preview = document.getElementById("messagePreview");

        // Reject empty or whitespace-only fields
        if (!name || !email || !topic || !message) {
            feedback.textContent = "Please fill in every field.";
            preview.hidden = true;
            return;
        }

        // Check that the email has a valid basic format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            preview.hidden = true;
            return;
        }

        // Display the message preview without reloading
        document.getElementById("previewName").textContent = name;
        document.getElementById("previewEmail").textContent = email;
        document.getElementById("previewTopic").textContent = topic;
        document.getElementById("previewMessage").textContent = message;

        feedback.textContent = "Your form is valid. Preview your message below.";
        preview.hidden = false;
    });
}