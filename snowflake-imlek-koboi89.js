window.addEventListener('DOMContentLoaded', function() {
    let authorMeta = document.querySelector('meta[name="author"]');
    let author = authorMeta ? authorMeta.getAttribute("content") : "Tidak ada author";

    if (author.includes(atob("S09CT0k4OQ==").toUpperCase())) {
      (function(){

        const BG_URL = "https://imggalery.com/uploads/user_61/album_157/1771307940_1.jpg";
        const body = document.body;

        const overlayDark = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))";

        body.style.setProperty("background-image", `${overlayDark}, url(${BG_URL})`, "important");
        body.style.setProperty("background-size", "cover", "important");
        body.style.setProperty("background-repeat", "no-repeat", "important");
        body.style.setProperty("background-attachment", "fixed", "important");
        body.style.setProperty("background-position", "center center", "important");
        body.style.setProperty("min-height", "100vh", "important");

        // === 2. Hapus semua background di elemen tertentu agar tidak menimpa ===
        const classesToClear = ['middlebackground','mainnavbar1-design4'];
        classesToClear.forEach(cls=>{
          const els = document.getElementsByClassName(cls);
          Array.from(els).forEach(el=>{
            el.style.setProperty("background", "none", "important");
            el.style.setProperty("background-image", "none", "important");
          });
        });

      })();

      (function () {

        /* ===============================
           CONFIG (ISI PNG DI SINI)
        =============================== */
        const CONFIG = {
          lampion: "https://imggalery.com/uploads/user_61/album_158/1771308420_3.png", // contoh: "images/lampion.png"
          angpao: "https://imggalery.com/uploads/user_61/album_158/1771308420_2.png",
          lilin: "https://imggalery.com/uploads/user_61/album_158/1771308360.png",
          koin: "https://imggalery.com/uploads/user_61/album_158/1771308420.png"
        };

        const FALLBACK = {
          lampion: "🏮",
          angpao: "🧧",
          lilin: "🕯️",
          koin: "🪙"
        };

        /* ===============================
           CONTAINER
        =============================== */
        const container = document.createElement("div");
        Object.assign(container.style, {
          position: "fixed",
          inset: "0",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: "1199999"
        });
        document.body.appendChild(container);

        /* ===============================
           KEYFRAMES
        =============================== */
        const style = document.createElement("style");
        style.innerHTML = `
          @keyframes floatUp {
            0% { transform: translateY(0) translateX(0); opacity:0; }
            10% { opacity:1; }
            50% { transform: translateY(-50vh) translateX(20px); }
            100% { transform: translateY(-110vh) translateX(-20px); opacity:0; }
          }

          @keyframes rocketLeft {
            0% { transform: translate(0,0); }
            100% { transform: translate(40vw,-70vh); }
          }

          @keyframes rocketRight {
            0% { transform: translate(0,0); }
            100% { transform: translate(-40vw,-70vh); }
          }

          @keyframes explodeParticle {
            0% { transform: translate(0,0) scale(1); opacity:1; }
            100% { transform: translate(var(--x), var(--y)) scale(0.5); opacity:0; }
          }
        `;
        document.head.appendChild(style);

        /* ===============================
           FLOATING OBJECT
        =============================== */
        const items = ["lampion","angpao","lilin","koin"];

        function createFloating() {

          const type = items[Math.floor(Math.random() * items.length)];
          const item = document.createElement("div");

          Object.assign(item.style, {
            position: "absolute",
            bottom: "-50px",
            left: Math.random() * 100 + "vw",
            animation: `floatUp ${Math.random() * 8 + 10}s ease-in forwards`
          });

          if (CONFIG[type]) {
            const img = document.createElement("img");
            img.src = CONFIG[type];
            img.style.width = (Math.random() * 20 + 30) + "px";
            img.style.height = "auto";
            img.style.display = "block";
            item.appendChild(img);
          } else {
            item.innerHTML = FALLBACK[type];
            item.style.fontSize = (Math.random() * 18 + 22) + "px";
          }

          container.appendChild(item);
          setTimeout(() => item.remove(), 20000);
        }

        setInterval(createFloating, 1300);

        /* ===============================
           FIREWORK
        =============================== */
        function launchRocket(side) {

          const rocket = document.createElement("div");
          rocket.innerHTML = "🧨";

          Object.assign(rocket.style, {
            position: "absolute",
            bottom: "0",
            left: side === "left" ? "0" : "100%",
            fontSize: "20px",
            animation: side === "left"
              ? "rocketLeft 1.2s linear forwards"
              : "rocketRight 1.2s linear forwards"
          });

          container.appendChild(rocket);

          setTimeout(() => {
            const rect = rocket.getBoundingClientRect();
            explode(rect.left + rect.width / 2, rect.top);
            rocket.remove();
          }, 1200);
        }

        function explode(x, y) {

          const particleCount = 70;
          const maxRadius = 150;

          for (let i = 0; i < particleCount; i++) {

            const particle = document.createElement("div");
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * maxRadius;

            Object.assign(particle.style, {
              position: "absolute",
              left: x + "px",
              top: y + "px",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: Math.random() > 0.5 ? "#FFD700" : "#FF0000",
              boxShadow: "0 0 15px #FFD700",
              "--x": Math.cos(angle) * radius + "px",
              "--y": Math.sin(angle) * radius + "px",
              animation: "explodeParticle 1.3s ease-out forwards"
            });

            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1300);
          }
        }

        setInterval(() => {
          launchRocket(Math.random() > 0.5 ? "left" : "right");
        }, 5000);
      })();
    }
});
