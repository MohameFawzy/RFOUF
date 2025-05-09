
document.getElementById("notification-bell").addEventListener("click", function () {
    this.classList.toggle("fa-bell");
    this.classList.toggle("fa-bell-slash");
  });
  

  document.getElementById("auto-sync").addEventListener("click", function () {
    this.classList.toggle("fa-sync");
    this.classList.toggle("fa-sync-alt");
    this.classList.toggle("active");
  });
  

  document.getElementById("privacy-mode").addEventListener("click", function () {
    this.classList.toggle("fa-user-secret");
    this.classList.toggle("fa-user-lock");
    this.classList.toggle("active");
  });
  // side bar animation code
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}
  setTimeout(() => {
    document.querySelector(".footer").classList.add("visible");
  }, 1000);
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


  