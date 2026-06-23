// ================================
// START EXPERIENCE
// ================================

const letterText = `
 PATTU ❤️

From the moment you entered my life,
everything became brighter and more beautiful.

I love the way you care for me, the way you laugh, 

and even the little things you do without realizing how special they are. 

You are the reason behind so many of my smiles and the person 

I think about before I sleep and after I wake up. 

Every heartbeat of mine carries a little piece of my love for you

Thank you for being the wonderful person you are.

You are one of the most precious blessings in my life.

Every memory with you is a treasure I hold close to my heart.


Once again Happy Birthday My Princess ❤️

Forever Yours,
Kirubakar ❤️
`;

let index = 0;

function startExperience() {

    document.querySelector(".hero").style.display = "none";

    document.getElementById("mainContent").style.display = "block";

    startTyping();

    startMusic();

}

// ================================
// TYPEWRITER EFFECT
// ================================

function startTyping() {

    const target = document.getElementById("typewriter");

    function type() {

        if (index < letterText.length) {

            target.innerHTML += letterText.charAt(index);

            index++;

            setTimeout(type, 30);

        }

    }

    type();

}

// ================================
// MUSIC
// ================================

function startMusic() {

    const music = document.getElementById("bgMusic");

    if (music) {

        music.play().catch(() => {
            console.log("Music waiting for user interaction");
        });

    }

}

// ================================
// GIFT BOX
// ================================

function openGift(){

document.getElementById(
"giftContent"
).style.display = "block";

document.getElementById(
"giftMessage"
).innerHTML = `

<h2 style="color:gold;">
For My ALAGI ❤️
</h2>







`

launchFireworks();

}

// ================================
// FIREWORKS
// ================================

const canvas =
document.getElementById("fireworks");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});

const fireworks = [];

class Firework {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.particles = [];

        for (let i = 0; i < 80; i++) {

            this.particles.push({

                x: x,
                y: y,

                angle:
                Math.random() * Math.PI * 2,

                speed:
                Math.random() * 5 + 2,

                radius:
                Math.random() * 3 + 1,

                alpha: 1

            });

        }

    }

    update() {

        this.particles.forEach(p => {

            p.x +=
            Math.cos(p.angle) * p.speed;

            p.y +=
            Math.sin(p.angle) * p.speed;

            p.alpha -= 0.01;

        });

    }

    draw() {

        this.particles.forEach(p => {

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            `rgba(255,215,0,${p.alpha})`;

            ctx.fill();

        });

    }

}

function launchFireworks() {

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            fireworks.push(

                new Firework(

                    Math.random() *
                    canvas.width,

                    Math.random() *
                    canvas.height/2

                )

            );

        },i*500);

    }

}

function animateFireworks() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    fireworks.forEach(f => {

        f.update();

        f.draw();

    });

    requestAnimationFrame(
        animateFireworks
    );

}

animateFireworks();

// ================================
// REASON CARDS ANIMATION
// ================================

const reasons =
document.querySelectorAll(".reason");

reasons.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform =
        "scale(1.08)";

        setTimeout(()=>{

            card.style.transform =
            "scale(1)";

        },300);

    });

});

// ================================
// SCROLL REVEAL
// ================================

const sections =
document.querySelectorAll(".section");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    observer.observe(section);

});

// ================================
// GOLD PARTICLES
// ================================

function createParticle(){

    const particle =
    document.createElement("div");

    particle.style.position = "fixed";

    particle.style.width = "3px";

    particle.style.height = "3px";

    particle.style.background = "gold";

    particle.style.left =
    Math.random()*100+"vw";

    particle.style.top =
    "100vh";

    particle.style.borderRadius =
    "50%";

    particle.style.opacity = ".5";

    particle.style.pointerEvents =
    "none";

    particle.style.zIndex = "999";

    document.body.appendChild(
        particle
    );

    let pos = 100;

    const interval =
    setInterval(()=>{

        pos--;

        particle.style.top =
        pos + "vh";

        if(pos < -10){

            clearInterval(interval);

            particle.remove();

        }

    },50);

}

setInterval(createParticle,300);