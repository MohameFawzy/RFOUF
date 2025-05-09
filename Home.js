// searck bar code
function toggleSearch() {
    var searchBox = document.getElementById("search-box");
    searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
}

document.getElementById("search-icon").addEventListener("click", function () {
    document.getElementById("search-container").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animation");
    
    function handleScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const isVisible = position < windowHeight - 100 && position > 0;
            
            if (isVisible) {
                el.classList.add("active");
            } else {
                el.classList.remove("active"); 
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});
// Dynamic text 
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const texts = ["RFOUF", "Explore Books", "Read Anytime"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        textElement.textContent = currentText.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(typeEffect, isDeleting ? 80 : 150);
    }
    
    setTimeout(typeEffect, 500);
});




// كود الغاء الfooter ف اول الصفحه

let lastScrollY = window.scrollY;

document.addEventListener("scroll", function () {
    const footer = document.querySelector("footer");
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    
    // إذا كان المستخدم قريب من نهاية الصفحة، نظهر الفوتر
    if (scrollPosition >= pageHeight - 50) {
        footer.classList.add("show");
        footer.classList.remove("hide");
    }
    // إذا كان المستخدم يقوم بالتمرير للأعلى، نخفي الفوتر بتأثير fade-out
    else if (window.scrollY < lastScrollY) {
        footer.classList.add("hide");
        footer.classList.remove("show");
    }
    
    lastScrollY = window.scrollY;
});

//  side bar animation code 
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}


    document.querySelectorAll("#sidebar li").forEach(function(li) {
        li.addEventListener("click", function(e) {
            if (e.target.tagName.toLowerCase() !== 'a') {
                const link = li.querySelector("a");
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
