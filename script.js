function chedder()
{
    document.getElementById("pepperjackinfo").style.display = "none";
    document.getElementById("cheesepic").src = "https://solidstarts.com/wp-content/uploads/Cheddar-for-Babies-scaled.jpg";
    document.getElementById("chedderinfo").style.display = 'block';
    gsap.from('#chedderinfo', {x: "-100%", duration: 2, ease: "elastic"})
};
function pepper_jack()
{
    document.getElementById("chedderinfo").style.display = "none";
    document.getElementById("cheesepic").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Du3HfBCNyYl_ZisodEvgAWRGme51D2YjxQ&usqp=CAU";
    document.getElementById("pepperjackinfo").style.display = 'block';
    gsap.from('#pepperjackinfo', {x: "-100%", duration: 2, ease: "elastic"})
};
gsap.from("#title", {duration: 2, rotation: 720,})
gsap.from("#subtitle", { duration: 2.5, opacity: 0, delay: 2})
gsap.from("#cheesepic", {duration: 2, delay: 3, x: "-275%", ease: "elastic"})
