//NAVIGATION BAR SECTION
 const bar=document.querySelector(".fa-bars")
 const hero=document.querySelector(".hero")
const menu=document.querySelector(".menu")
bar.addEventListener("click",()=>{
    menu.classList.toggle("show-menu")
    hero.classList.toggle("hero-resp")
    bar.classList.toggle("fa-times")
}) 


//TESTIMONIAL SECTION
let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    function showSlide(index) {
      testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === index ? 'block' : 'none';
      });
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      showSlide(currentSlide);
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % testimonials.length;
      showSlide(currentSlide);
    }

    function autoSlide() {
      nextSlide();
    }

    setInterval(autoSlide, 7000); // Auto-slide every 5 seconds

    showSlide(currentSlide);

    //FOUNDER SECTION 8 IN INDEX
        const title = document.querySelector(".title8");
        const content = document.querySelector(".para8");


        title.addEventListener("click", () => {
          if (content.style.display === 'none') {
        content.style.display = 'block';
        title.style.backgroundColor = '#47b475';
        title.style.color = '#ffffff';
        }
        else{
          content.style.display = 'none';
          title.style.backgroundColor = '#ffffff';
          title.style.color = '#666';
        }
      });