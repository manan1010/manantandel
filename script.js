// --- Custom Cursor Logic ---
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

document.querySelectorAll('a, button, input[type="submit"]').forEach(el => {
    el.addEventListener('mouseover', () => cursor.classList.add('hover'));
    el.addEventListener('mouseout', () => cursor.classList.remove('hover'));
});


document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.custom-cursor');
    // Only initialize custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });

        document.querySelectorAll('a, button, input[type="submit"]').forEach(el => {
            el.addEventListener('mouseover', () => cursor.classList.add('hover'));
            el.addEventListener('mouseout', () => cursor.classList.remove('hover'));
        });
    }


    // --- PROJECT CAROUSEL LOGIC ---
    const carousel = document.getElementById('project-carousel');
    const carouselTrack = document.querySelector('.carousel-track');

    if (carouselTrack) {
        const slides = Array.from(carouselTrack.children);
        const nextButton = document.getElementById('next-btn');
        const prevButton = document.getElementById('prev-btn');
        const projectDetails = document.querySelectorAll('.project-detail');

        const updateProjectDetails = (activeSlide) => {
            // Hide all details first
            projectDetails.forEach(detail => detail.classList.remove('active'));

            // Get the ID to show
            const projectId = activeSlide.dataset.project;
            const activeDetail = document.getElementById(projectId);

            if (activeDetail) {
                activeDetail.classList.add('active');
            }
        };

        const setSlideStatus = () => {
            let activeSlide = document.querySelector('.carousel-slide[data-status="active"]');
            if (!activeSlide) {
                slides[0].dataset.status = 'active';
                activeSlide = slides[0];
            }
            let activeIndex = slides.indexOf(activeSlide);

            slides.forEach((slide) => {
                slide.dataset.status = 'inactive';
            });

            const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
            const nextIndex = (activeIndex + 1) % slides.length;

            slides[activeIndex].dataset.status = 'active';
            slides[prevIndex].dataset.status = 'prev';
            slides[nextIndex].dataset.status = 'next';

            updateProjectDetails(activeSlide);
        };

        const moveToNextSlide = () => {
            let activeSlide = document.querySelector('.carousel-slide[data-status="active"]');
            let activeIndex = slides.indexOf(activeSlide);
            const nextIndex = (activeIndex + 1) % slides.length;

            activeSlide.dataset.status = 'unknown';
            slides[nextIndex].dataset.status = 'active';
            setSlideStatus();
        };

        const moveToPrevSlide = () => {
            let activeSlide = document.querySelector('.carousel-slide[data-status="active"]');
            let activeIndex = slides.indexOf(activeSlide);
            const prevIndex = (activeIndex - 1 + slides.length) % slides.length;

            activeSlide.dataset.status = 'unknown';
            slides[prevIndex].dataset.status = 'active';
            setSlideStatus();
        };

        nextButton.addEventListener('click', moveToNextSlide);
        prevButton.addEventListener('click', moveToPrevSlide);

        // Initialize carousel
        setSlideStatus();
    }




    // --- SKILLS RADAR CHARTS LOGIC ---
    const chartFontColor = '#A9A9A9'; // A light gray for readability
    const chartGridColor = 'rgba(255, 255, 255, 0.1)';

    const chartOptions = {
        scales: {
            r: {
                angleLines: { color: chartGridColor },
                grid: { color: chartGridColor },
                pointLabels: {
                    color: chartFontColor,
                    font: { size: 14, family: "'Palanquin', sans-serif" }
                },
                ticks: {
                    color: chartFontColor,
                    backdropColor: 'rgba(0, 0, 0, 0.5)',
                    stepSize: 2,
                    font: { size: 12 }
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend
            }
        }
    };

    // 1. Technical Skills Chart
    const technicalSkillsCtx = document.getElementById('technicalSkillsChart');
    if (technicalSkillsCtx) {
        new Chart(technicalSkillsCtx, {
            type: 'radar',
            data: {
                labels: ['AI/ML Solutions', 'IoT Solutions', 'Machine Vision', 'Graphic Design', 'Video Editing'],
                datasets: [{
                    label: 'Proficiency',
                    data: [9, 9.5, 8.5, 7.5, 6.5],
                    fill: true,
                    backgroundColor: 'rgba(251, 191, 36, 0.2)',
                    borderColor: '#FBBF24',
                    pointBackgroundColor: '#FBBF24',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#FBBF24'
                }]
            },
            options: chartOptions
        });
    }

    // 2. Languages Chart
    const languagesCtx = document.getElementById('languagesChart');
    if (languagesCtx) {
        new Chart(languagesCtx, {
            type: 'radar',
            data: {
                labels: ['Python', 'HTML/CSS', 'JavaScript', 'SQL', 'C'],
                datasets: [{
                    label: 'Proficiency',
                    data: [9, 9, 6, 5, 8],
                    fill: true,
                    backgroundColor: 'rgba(251, 191, 36, 0.2)',
                    borderColor: '#FBBF24',
                    pointBackgroundColor: '#FBBF24',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#FBBF24'
                }]
            },
            options: chartOptions
        });
    }

    // 3. Soft Skills Chart
    const softSkillsCtx = document.getElementById('softSkillsChart');
    if (softSkillsCtx) {
        new Chart(softSkillsCtx, {
            type: 'radar',
            data: {
                labels: ['Leadership', 'Event Handling', 'Communication', 'Problem-Solving', 'Teamwork'],
                datasets: [{
                    label: 'Proficiency',
                    data: [9, 9, 8.5, 9, 9.5],
                    fill: true,
                    backgroundColor: 'rgba(251, 191, 36, 0.2)',
                    borderColor: '#FBBF24',
                    pointBackgroundColor: '#FBBF24',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#FBBF24'
                }]
            },
            options: chartOptions
        });
    }


    // --- Typing Animation for Hero Name ---
    const nameHeading = document.getElementById('name-heading');
    const nameToType = "Manan Tandel";
    const typingSpeed = 150; // Milliseconds per character

    // Clear the placeholder and add the cursor
    if(nameHeading) {
        nameHeading.innerHTML = '<span id="typed-text"></span><span class="blinking-cursor"></span>';
        const typedTextSpan = document.getElementById('typed-text');
        
        let charIndex = 0;
        function typeChar() {
            if (charIndex < nameToType.length) {
                typedTextSpan.textContent += nameToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            }
        }
        // Start the animation shortly after the page loads
        setTimeout(typeChar, 500);
    }

    // --- PAGE NAVIGATION LOGIC ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mainPage = document.getElementById('main-page');
    const resumePage = document.getElementById('resume-page');
    const projectsPage = document.getElementById('projects-page');
    const mobileMenu = document.getElementById('mobile-menu');

    function showPage(targetId) {
        pages.forEach(p => p.classList.remove('active'));
        window.scrollTo(0, 0);

        if (targetId.includes('resume-page')) {
            resumePage.classList.add('active');
        } else if (targetId.includes('projects-page')) {
            projectsPage.classList.add('active');
        } else {
            mainPage.classList.add('active');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
        
        // Update active state for all nav links (desktop and mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }

    // Desktop navigation
    document.querySelectorAll('header .hidden.md\\:flex .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            showPage(targetId);
        });
    });

    // Mobile navigation
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            showPage(targetId);
            mobileMenu.classList.add('hidden'); // Hide the menu after clicking a link
        });
    });

    // --- Mobile Menu Toggle ---
    document.getElementById('menu-btn').addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });


    // --- Resume Download Button ---
    // Ensure there is at least one download button before adding the listener
    const downloadButtons = document.querySelectorAll('.resume-download-btn');
    if(downloadButtons.length > 0) {
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const resumeUrl = 'https://drive.google.com/file/d/1qAkATXZyMM5oxOTs2NhkUhCTDqjzkhhB/view?usp=sharing'; 
                if (resumeUrl === '#') {
                    alert('Resume PDF path not configured yet.');
                    return;
                }
                const a = document.createElement('a');
                a.href = resumeUrl;
                a.download = 'Manan_Tandel_Resume.pdf'; // You can customize the downloaded file name
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        });
    }
});









