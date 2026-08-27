const sisters = {

    sonali: {
        name: "Sonali Di",
        image: "images/sonali.jpg",

        message:
            "Happy Raksha Bandhan, Sonali Di! Wishing you lots of happiness, good health and success. Keep smiling and always stay the same. Have a wonderful Raksha Bandhan! 🎀",

        surprise:
            "Hey Sonali Di! This little surprise is specially for you. Hope you like it! Wishing you a very Happy Raksha Bandhan. Keep smiling and enjoy your day! ❤️"
    },


    bristi: {
        name: "Bristi",
        image: "images/bristi.jpg",

        message:
            "Happy Raksha Bandhan, Bristi! Wishing you a happy and successful life. Keep doing your best, keep smiling and enjoy every moment. Have a great Raksha Bandhan! 💕",

        surprise:
            "Hey Bristi! Here's a small Raksha Bandhan surprise for you. Hope it makes you smile! Have a fantastic day and a very Happy Raksha Bandhan! 🎁"
    },


    nandita: {
        name: "Nandita (Manu)",
        image: "images/nandita.jpg",

        message:
            "Happy Raksha Bandhan, Manu! Wishing you lots of happiness, success and good moments ahead. Keep smiling, keep learning and always do your best. Have a great day! 🌸",

        surprise:
            "Hey Manu! This little surprise is just for you. Hope you enjoy it! Keep smiling and have an amazing Raksha Bandhan! 🎀"
    },


    sagarika: {
        name: "Sagarika Di",
        image: "images/sagarika.jpg",

        message:
            "Happy Raksha Bandhan, Sagarika Di! Wishing you happiness, success and many wonderful moments. Stay happy, keep smiling and have a great day! 🌷",

        surprise:
            "Hey Sagarika Di! Here's a little surprise for Raksha Bandhan. Hope you like it! Wishing you a wonderful day and a very Happy Raksha Bandhan! 💖"
    }

};

/* =========================
   ELEMENTS
========================= */

const sisterButtons =
    document.querySelectorAll(".sister-btn");

const sisterImage =
    document.getElementById("sisterImage");

const sisterName =
    document.getElementById("sisterName");

const sisterMessage =
    document.getElementById("sisterMessage");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const shareBtn =
    document.getElementById("shareBtn");

const modal =
    document.getElementById("surpriseModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalMessage =
    document.getElementById("modalMessage");

const closeModal =
    document.getElementById("closeModal");

const modalCloseButton =
    document.getElementById("modalCloseButton");

const music =
    document.getElementById("bgMusic");

const floatingContainer =
    document.getElementById("floatingElements");


let currentSister = "sonali";


/* =========================
   CHANGE SISTER
========================= */

function changeSister(key) {

    const sister = sisters[key];

    if (!sister) {
        return;
    }

    currentSister = key;


    sisterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.sister === key
        );

    });


    sisterImage.style.opacity = "0";

    sisterImage.style.transform =
        "scale(0.92)";


    setTimeout(() => {

        sisterImage.src =
            sister.image;

        sisterImage.alt =
            sister.name;

        sisterName.textContent =
            sister.name;

        sisterMessage.textContent =
            sister.message;


        sisterImage.onload = () => {

            sisterImage.style.opacity = "1";

            sisterImage.style.transform =
                "scale(1)";

        };

    }, 200);

}


/* =========================
   SISTER BUTTONS
========================= */

sisterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            changeSister(
                button.dataset.sister
            );

        }
    );

});


/* =========================
   SURPRISE
========================= */

surpriseBtn.addEventListener(
    "click",
    () => {

        const sister =
            sisters[currentSister];


        /* Start music after user interaction */

        if (music) {

            music.play().catch(
                () => {}
            );

        }


        modalTitle.textContent =
            `For You, ${sister.name} ❤️`;

        modalMessage.textContent =
            sister.surprise;


        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        createConfetti();

        createHeartBurst();

    }
);


/* =========================
   CLOSE MODAL
========================= */

function closeSurprise() {

    modal.classList.remove(
        "show"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


closeModal.addEventListener(
    "click",
    closeSurprise
);


modalCloseButton.addEventListener(
    "click",
    closeSurprise
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeSurprise
    );


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeSurprise();

        }

    }
);


/* =========================
   WHATSAPP SHARE
========================= */

shareBtn.addEventListener(
    "click",
    async () => {

        const sister =
            sisters[currentSister];


        const text =
            `🎀 Happy Raksha Bandhan, ${sister.name}! ❤️\n\n${sister.message}\n\n— Sibam Kundu`;


        if (
            navigator.share
        ) {

            try {

                await navigator.share({

                    title:
                        "Happy Raksha Bandhan ❤️",

                    text:
                        text,

                    url:
                        window.location.href

                });

            }

            catch (error) {

                console.log(
                    "Share cancelled"
                );

            }

        }

        else {

            const whatsappUrl =
                `https://wa.me/?text=${encodeURIComponent(text + "\n\n" + window.location.href)}`;

            window.open(
                whatsappUrl,
                "_blank"
            );

        }

    }
);


/* =========================
   FLOATING HEARTS / FLOWERS
========================= */

const floatingSymbols = [

    "💖",
    "💕",
    "🌸",
    "✨",
    "🌷",
    "💗"

];


function createFloatingElement() {

    const element =
        document.createElement("span");


    element.className =
        "floating";


    element.textContent =
        floatingSymbols[
            Math.floor(
                Math.random() *
                floatingSymbols.length
            )
        ];


    element.style.left =
        Math.random() * 100 + "%";


    element.style.fontSize =
        (12 + Math.random() * 18)
        + "px";


    element.style.animationDuration =
        (6 + Math.random() * 7)
        + "s";


    floatingContainer.appendChild(
        element
    );


    setTimeout(
        () => element.remove(),
        14000
    );

}


setInterval(
    createFloatingElement,
    900
);


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💝"
    ];


    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            (14 + Math.random() * 20)
            + "px";

        heart.style.zIndex =
            "250";

        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            220;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        heart.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    900 +
                    Math.random() * 500,

                easing:
                    "cubic-bezier(.17,.67,.83,.67)"

            }

        );


        setTimeout(
            () => heart.remove(),
            1500
        );

    }

}


/* =========================
   CONFETTI
========================= */

const canvas =
    document.getElementById(
        "confettiCanvas"
    );

const ctx =
    canvas.getContext("2d");


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();


function createConfetti() {

    const pieces = [];

    const count = 120;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        pieces.push({

            x:
                Math.random() *
                canvas.width,

            y:
                -20 -
                Math.random() *
                canvas.height *
                0.3,

            size:
                5 +
                Math.random() *
                8,

            speed:
                3 +
                Math.random() *
                4,

            rotation:
                Math.random() * 360,

            rotationSpeed:
                -5 +
                Math.random() * 10,

            color: [

                "#ff4f81",
                "#ffd166",
                "#ff8fab",
                "#9b5de5",
                "#06d6a0"

            ][
                Math.floor(
                    Math.random() * 5
                )
            ]

        });

    }


    let frame;


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.y +=
                piece.speed;

            piece.rotation +=
                piece.rotationSpeed;


            ctx.save();


            ctx.translate(
                piece.x,
                piece.y
            );


            ctx.rotate(
                piece.rotation *
                Math.PI /
                180
            );


            ctx.fillStyle =
                piece.color;


            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size
            );


            ctx.restore();

        });


        const stillVisible =
            pieces.some(
                piece =>
                    piece.y <
                    canvas.height + 30
            );


        if (stillVisible) {

            frame =
                requestAnimationFrame(
                    animate
                );

        }

        else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }


    cancelAnimationFrame(
        frame
    );


    animate();

}


/* =========================
   INITIAL STATE
========================= */

changeSister(
    "sonali"
);