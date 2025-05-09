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

// --------------------------------------------------------------------------------
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage = 1;

function updatePagination() {
  pages.forEach(page => {
    page.classList.remove('active');
    if (parseInt(page.dataset.page) === currentPage) {
      page.classList.add('active');
    }
  });

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === pages.length;
}

pages.forEach(page => {
  page.addEventListener('click', () => {
    currentPage = parseInt(page.dataset.page);
    updatePagination();
  });
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length) {
    currentPage++;
    updatePagination();
  }
});
// // pagination.js

// // نتأكد إن DOM جاهز قبل تشغيل الكود
// document.addEventListener('DOMContentLoaded', () => {
//     // جميع عناصر الصفحات
//     const pages = document.querySelectorAll('.page-content');
//     // جميع أزرار الأرقام
//     const btns  = document.querySelectorAll('.pagination .page');
//     // أزرار السابق والتالي
//     const prev  = document.getElementById('prev');
//     const next  = document.getElementById('next');
  
//     let current = 1;               // الصفحة الحالية
//     const total = pages.length;    // إجمالي عدد الصفحات
  
//     // دالة لإظهار الصفحة رقم n
//     function showPage(n) {
//       // أخفي كل الصفحات
//       pages.forEach(p => p.style.display = 'none');
//       // شيل active من كل الأزرار
//       btns.forEach(b => b.classList.remove('active'));
  
//       // أظهر الصفحة المطلوبة وأضف active للزر الموافق
//       const pageDiv = document.querySelector(`.page-content[data-page="${n}"]`);
//       pageDiv.style.display = 'block';
//       const btn = document.querySelector(`.pagination .page[data-page="${n}"]`);
//       btn.classList.add('active');
  
//       // حدِّث الصفحة الحالية وعطِّل الأزرار عند الحواف
//       current = n;
//       prev.disabled = (current === 1);
//       next.disabled = (current === total);
//     }
  
//     // ربط أزرار الأرقام
//     btns.forEach(btn => {
//       btn.addEventListener('click', () => showPage(Number(btn.dataset.page)));
//     });
  
//     // زر "Previous"
//     prev.addEventListener('click', () => {
//       if (current > 1) showPage(current - 1);
//     });
  
//     // زر "Next"
//     next.addEventListener('click', () => {
//       if (current < total) showPage(current + 1);
//     });
  
//     // عرض الصفحة الأولى عند التحميل
//     showPage(1);
//   });
document.addEventListener('DOMContentLoaded', () => {
  const pages = ['index.html', 'index_2.html', 'index_3.html'];

  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const pageBtns = document.querySelectorAll('.page');

  // تحديد الصفحة الحالية بناءً على الرابط
  const currentPath = window.location.pathname;
  const currentPageIndex = pages.findIndex(page => currentPath.includes(page));

  // التحقق قبل التنقل
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPageIndex < pages.length - 1) {
        window.location.href = pages[currentPageIndex + 1];
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPageIndex > 0) {
        window.location.href = pages[currentPageIndex - 1];
      }
    });
  }

  // لما يدوس على زرار برقم الصفحة
  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPage = parseInt(btn.dataset.page) - 1;
      if (pages[targetPage]) {
        window.location.href = pages[targetPage];
      }
    });
  });
});
