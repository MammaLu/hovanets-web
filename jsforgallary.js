function toggleMenu() {
    const navbarList = document.querySelector('.navbar-list');
    const burgerMenuIcon = document.querySelector('.burger-menu img');
    const menuItems = document.querySelectorAll('.navbar-list ul li');

    navbarList.classList.toggle('active');

    if (navbarList.classList.contains('active')) {
        burgerMenuIcon.src = 'images/burger-open.svg';
        menuItems.forEach((item, index) => {
            item.style.animation = `slide-in 0.5s forwards ${index * 0.1}s`;
        });
    } else {
        burgerMenuIcon.src = 'images/burger-closed.svg';
        menuItems.forEach((item) => {
            item.style.animation = '';
        });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // Video Slider
    const videoContainer = document.querySelector('.videocontainer');
    const videoItems = document.querySelectorAll('.video-item');
    const videoTotalItems = videoItems.length;
    let videoCurrentIndex = 0;

    function updateVideoSlider() {
        if (window.innerWidth > 768) {
            videoContainer.style.transition = 'transform 0.3s ease';
            videoContainer.style.transform = `translateX(-${videoCurrentIndex * 50}%)`;
        } else {
            videoContainer.style.transform = 'none'; // Disable sliding on mobile
        }
    }

    function moveToNextVideo() {
        videoCurrentIndex = (videoCurrentIndex + 1) % videoTotalItems;
        updateVideoSlider();
    }

    function moveToPrevVideo() {
        videoCurrentIndex = (videoCurrentIndex - 1 + videoTotalItems) % videoTotalItems;
        updateVideoSlider();
    }

    document.querySelector('.video-arrow-left').addEventListener('click', moveToPrevVideo);
    document.querySelector('.video-arrow-right').addEventListener('click', moveToNextVideo);

    window.addEventListener('resize', function () {
        updateVideoSlider();
    });

    // Initialize the slider
    updateVideoSlider();
});

document.addEventListener('DOMContentLoaded', function () {
    // Gallery Slider
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item img');
    const totalItems = items.length;
    let currentIndex = 0;

    function updateGallery() {
        gallery.style.transition = 'transform 0.3s ease';
        gallery.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    function moveToNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateGallery();
    }

    function moveToPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateGallery();
    }

    function openPreview(index) {
        if (window.innerWidth <= 768) return; // No preview on mobile

        const modal = document.getElementById('preview-modal');
        const previewImage = modal.querySelector('.preview-image');
        currentIndex = index;
        previewImage.src = items[currentIndex].src;
        modal.style.display = 'flex';

        const previewArrowLeft = modal.querySelector('.preview-arrow-left');
        const previewArrowRight = modal.querySelector('.preview-arrow-right');
        const closePreview = modal.querySelector('.close-preview');

        closePreview.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        previewArrowLeft.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            previewImage.src = items[currentIndex].src;
        });

        previewArrowRight.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            previewImage.src = items[currentIndex].src;
        });
    }

    items.forEach((item, index) => {
        if (window.innerWidth > 768) {
            item.addEventListener('click', () => openPreview(index));
        }
    });

    document.querySelector('.arrow-left').addEventListener('click', moveToPrev);
    document.querySelector('.arrow-right').addEventListener('click', moveToNext);

    if (window.innerWidth <= 768) {
        items.forEach(item => {
            item.classList.remove('active');
        });
        items[currentIndex].classList.add('active');
    } else {
        updateGallery();
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            items.forEach(item => {
                item.classList.remove('active');
            });
            items[currentIndex].classList.add('active');
        } else {
            items.forEach(item => {
                item.classList.remove('active');
            });
            updateGallery();
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item img');
    const totalItems = items.length;
    let currentIndex = 0;

    function updateGallery() {
        gallery.style.transition = 'transform 0.3s ease';
        gallery.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    function moveToNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateGallery();
    }

    function moveToPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateGallery();
    }

    function openPreview(index) {
        if (window.innerWidth <= 768) return; // No preview on mobile

        const modal = document.getElementById('preview-modal');
        const previewImage = modal.querySelector('.preview-image');
        currentIndex = index;
        previewImage.src = items[currentIndex].src;
        modal.style.display = 'flex';

        const previewArrowLeft = modal.querySelector('.preview-arrow-left');
        const previewArrowRight = modal.querySelector('.preview-arrow-right');
        const closePreview = modal.querySelector('.close-preview');

        closePreview.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        previewArrowLeft.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            previewImage.src = items[currentIndex].src;
        });

        previewArrowRight.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            previewImage.src = items[currentIndex].src;
        });
    }

    items.forEach((item, index) => {
        if (window.innerWidth > 768) {
            item.addEventListener('click', () => openPreview(index));
        }
    });

    document.querySelector('.arrow-left').addEventListener('click', moveToPrev);
    document.querySelector('.arrow-right').addEventListener('click', moveToNext);

    if (window.innerWidth <= 768) {
        items.forEach(item => {
            item.classList.remove('active');
        });
        items[currentIndex].classList.add('active');
    } else {
        updateGallery();
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            items.forEach(item => {
                item.classList.remove('active');
            });
            items[currentIndex].classList.add('active');
        } else {
            items.forEach(item => {
                item.classList.remove('active');
            });
            updateGallery();
        }
    });
});
