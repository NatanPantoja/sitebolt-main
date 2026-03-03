// ==========================================
// --- ANIMAÇÃO: MÚLTIPLOS DINHEIROS BATENDO ASAS ---
// ==========================================

if (document.querySelector(".ghost-money")) {
  // 1. Anima TODAS as asas de uma vez usando a classe
  gsap.to(".wingLeft", {
    rotation: -40,
    transformOrigin: "right center",
    duration: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.to(".wingRight", {
    rotation: 40,
    transformOrigin: "left center",
    duration: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // 2. Faz cada nota voar em momentos diferentes (Efeito cascata)
  gsap.utils.toArray(".ghost-money").forEach((money, index) => {
    // O delay cria o atraso para não subirem todas grudadas
    let flyTL = gsap.timeline({ repeat: -1, delay: index * 1.5 });

    flyTL
      .fromTo(
        money,
        { y: 50, x: 0, opacity: 0, rotation: 0 },
        {
          y: -200,
          x: -30,
          opacity: 0.15,
          rotation: -10,
          duration: 2.5,
          ease: "sine.out",
        }, // Aparece levemente (15%)
      )
      .to(money, {
        y: -800,
        x: -80,
        opacity: 0,
        rotation: -20,
        duration: 3.5,
        ease: "power1.in", // Foge e some
      });
  });

  // 2. Trajetória de voo (Sobe, aparece como fantasma, e some no topo)
  let flyTL = gsap.timeline({ repeat: -1 });

  flyTL
    .fromTo(
      "#ghost-money",
      { y: 50, x: 0, opacity: 0, rotation: 0 },
      {
        y: -200,
        x: -30,
        opacity: 0.15,
        rotation: -10,
        duration: 2,
        ease: "sine.out",
      }, // Aparece levemente (15%)
    )
    .to("#ghost-money", {
      y: -600,
      x: -80,
      opacity: 0,
      rotation: -20,
      duration: 3,
      ease: "power1.in", // Foge e some
    });
}
