// script.js
const sidebar = document.getElementById('sidebar');
const trigger = document.getElementById('trigger');

// لما الماوس يدخل على منطقة trigger، نظهر الـ sidebar
trigger.addEventListener('mouseenter', () => {
  sidebar.style.left = '0';
});

// لما الماوس يسيب الـ sidebar، نخفيه تاني
sidebar.addEventListener('mouseleave', () => {
  sidebar.style.left = '-250px';
});


<script>
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
</script>
