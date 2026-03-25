document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
});

document.fonts.ready.then(() => {
    let note = SplitText.create("#intro-note", {
        type: "words",
        wordsClass: "word++"
    });
    let title = SplitText.create("#intro-title", {
        typre: "chars"
    })
    let infoText = SplitText.create("#info", {
        type: "words",
        wordsClass: "word++"
    })
    let fact = SplitText.create(".fact", {
        type: "chars"
    })
    gsap.from(note.words, {
        y: 100,
        opacity: 0,
        delay: 1,
        autoAlpha: 0,
        // stagger: 0.05
    })
    gsap.from(title.chars, {
        y: -100,
        opacity: 0,
        delay: 2.5
    })
    gsap.from(infoText.words, {
        scrollTrigger: {
            trigger: "#info",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            // end: "top 10%",
            toggleActions: "play none none reverse"
        },
        // x: -20,
        delay: 0,
        opacity: 0.2,
        stagger: 0.1
    })
    gsap.from(fact.chars, {
        scrollTrigger: {
            trigger: ".fact",
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
        },
        y: 20,
        delay: 0,
        opacity: 0,
        stagger: 0.1
    })
})


const intro = document.getElementById('intro');
const homepage = document.getElementById('homepage');
const body = document.body;

setTimeout(() => {
    intro.classList.add('fade-out');
    setTimeout(() => {
        intro.style.display = 'none';
        homepage.classList.add('visible');
        body.classList.remove('no-scroll');
        initParticles();
        initBubbles();
    }, 2000);
}, 5000);


function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = '-10px';
        p.style.animationDuration = (4 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 8) + 's';
        p.style.opacity = 0.3 + Math.random() * 0.6;
        p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
        container.appendChild(p);
    }
}


gsap.from("#startBtn", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: "#startBtn",
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 60%",
        // markers: true
    }
})


document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('ocean-view').scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('endRideBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



function initBubbles() {
    const container = document.getElementById('bubbles-container');
    container.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;';
    for (let i = 0; i < 20; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        const size = 4 + Math.random() * 20;
        b.style.width = size + 'px';
        b.style.height = size + 'px';
        b.style.left = Math.random() * 100 + '%';
        b.style.animationDuration = (5 + Math.random() * 10) + 's';
        b.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(b);
    }
}



(function addBolts() {
    const frame = document.getElementById('porthole-frame');
    const count = 12;
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * 360;
        const rad = angle * Math.PI / 180;
        const r = 49;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        const bolt = document.createElement('div');
        bolt.className = 'bolt';
        bolt.style.cssText = `left:calc(${x}% - 7px);top:calc(${y}% - 7px);position:absolute;z-index:20;`;
        frame.appendChild(bolt);
    }
})();


const OCEAN_ZONES = [
    {
        id: 'sunlight',
        name: 'Sunlight Zone',
        range: '0 — 200m',
        minDepth: 0,
        maxDepth: 200,
        bgFrom: '#1a6fa8',
        bgTo: '#0a4a7a',
        fish: [
            { emoji: '🐠', name: 'Clownfish', x: 20, y: 8, desc: 'Famous for its striking orange and white stripes and symbiotic relationship with sea anemones. Found in warm, shallow reef waters.', flipped: false },
            { emoji: '🐡', name: 'Pufferfish', x: 65, y: 18, desc: 'Can inflate itself to deter predators. Contains tetrodotoxin — one of the ocean\'s most potent toxins.', flipped: true },
            { emoji: '🦈', name: 'Reef Shark', x: 10, y: 30, desc: 'Patrols coral reefs and shallow coastal areas. Essential apex predator that keeps reef ecosystems in balance.', flipped: false },
            { emoji: '🐟', name: 'Atlantic Blue Tang', x: 70, y: 35, desc: 'Brilliant blue fish commonly found in Caribbean coral reefs. Uses a sharp spine near its tail for defense.', flipped: true },
            { emoji: '🐢', name: 'Sea Turtle', x: 40, y: 45, desc: 'Ancient mariners that navigate thousands of miles using Earth\'s magnetic field. Some species live over 100 years.', flipped: false },
        ],
        decor: [
            { emoji: '🪸', type: 'coral', x: 5, y: 85 },
            { emoji: '🌿', type: 'seaweed', x: 15, y: 80 },
            { emoji: '🪸', type: 'coral', x: 80, y: 88 },
            { emoji: '🌿', type: 'seaweed', x: 88, y: 82 },
            { emoji: '🪸', type: 'coral', x: 50, y: 90 },
        ]
    },
    {
        id: 'twilight',
        name: 'Twilight Zone',
        range: '200 — 1,000m',
        minDepth: 200,
        maxDepth: 1000,
        bgFrom: '#0a2a4a',
        bgTo: '#061828',
        fish: [
            { emoji: '🦑', name: 'Humboldt Squid', x: 25, y: 10, desc: 'Aggressive hunters that flash bioluminescent light to communicate. Can grow up to 2 metres in length.', flipped: false },
            { emoji: '🐙', name: 'Seven-arm Octopus', x: 60, y: 22, desc: 'The largest octopus species by mass. Uses intelligence and camouflage to ambush prey in dim twilight waters.', flipped: true },
            { emoji: '🐟', name: 'Lanternfish', x: 15, y: 38, desc: 'One of the most abundant fish on Earth. Produces bioluminescence along its belly to blend with faint light from above.', flipped: false },
            { emoji: '🦐', name: 'Mysid Shrimp', x: 72, y: 48, desc: 'Tiny crustaceans that form enormous swarms in the twilight zone, forming a critical link in the deep-sea food chain.', flipped: true },
        ],
        decor: [
            { emoji: '⭐', type: 'coral', x: 10, y: 85 },
            { emoji: '🪨', type: 'coral', x: 75, y: 88 },
        ]
    },
    {
        id: 'midnight',
        name: 'Midnight Zone',
        range: '1,000 — 4,000m',
        minDepth: 1000,
        maxDepth: 4000,
        bgFrom: '#020e1c',
        bgTo: '#010810',
        fish: [
            { emoji: '🐟', name: 'Anglerfish', x: 30, y: 15, desc: 'Uses a bioluminescent lure to attract prey in complete darkness. The female is far larger — males attach permanently to her body.', flipped: false },
            { emoji: '🦑', name: 'Vampire Squid', x: 60, y: 28, desc: 'Despite its name, it is neither squid nor octopus. It cloaks itself in a dark, webbed mantle that resembles a vampire\'s cape.', flipped: true },
            { emoji: '🐡', name: 'Barreleye Fish', x: 20, y: 45, desc: 'Has transparent, fluid-filled dome and barrel-shaped eyes that can rotate upward to spot prey above it in absolute darkness.', flipped: false },
            { emoji: '🦐', name: 'Dumbo Octopus', x: 68, y: 55, desc: 'Named for its ear-like fins that resemble Disney\'s Dumbo. The deepest known octopus, found up to 7,000 metres down.', flipped: true },
        ],
        decor: [
            { emoji: '🪨', type: 'coral', x: 5, y: 88 },
            { emoji: '🪨', type: 'coral', x: 82, y: 85 },
        ]
    },
    {
        id: 'abyssal',
        name: 'Abyssal Zone',
        range: '4,000 — 6,000m',
        minDepth: 4000,
        maxDepth: 6000,
        bgFrom: '#020a17',
        bgTo: '#010c10',
        fish: [
            { emoji: '🦀', name: 'Deep Sea Crab', x: 15, y: 50, desc: 'Small crustacean adapted to cold, high-pressure water.', flipped: false },
            { emoji: '🦐', name: 'Hydrothermal Shrimp', x: 70, y: 60, desc: 'Thrives near hydrothermal vents where they find food and warmth.', flipped: true }
        ],
        decor: [
            { emoji: '🪨', type: 'coral', x: 20, y: 88 },
            { emoji: '🌿', type: 'seaweed', x: 80, y: 86 }
        ]
    },
    {
        id: 'hadal',
        name: 'Hadal Zone',
        range: '6,000 — 11,000m',
        minDepth: 6000,
        maxDepth: 11000,
        bgFrom: '#010508',
        bgTo: '#000',
        fish: [
            { emoji: '🐟', name: 'Hadal Snailfish', x: 35, y: 20, desc: 'The deepest known fish on Earth, recorded at over 8,000 metres. Its body is adapted to crushing pressures that would destroy most life.', flipped: false },
            { emoji: '🦐', name: 'Amphipod', x: 55, y: 35, desc: 'Crustaceans that dominate hadal trenches. They accumulate pollutants from surface runoff, revealing just how connected our ocean truly is.', flipped: true },
            { emoji: '🐙', name: 'Sea Cucumber', x: 20, y: 55, desc: 'In the hadal zone, sea cucumbers can make up 90% of total biomass. They slowly vacuum the seafloor of organic particles.', flipped: false },
        ],
        decor: [
            { emoji: '🪨', type: 'coral', x: 8, y: 88 },
            { emoji: '🪨', type: 'coral', x: 70, y: 90 },
            { emoji: '🪨', type: 'coral', x: 45, y: 92 },
        ]
    }
];

gsap.from("#pressure-meter", {
    // x:-200,
    opacity: 0.2,
    scrollTrigger: {
        trigger: "#depth-meter",
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 60%",
        // markers: true
    }
})

gsap.from("#depth-meter", {
    // x:-200,
    opacity: 0.2,
    scrollTrigger: {
        trigger: "#depth-meter",
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 60%",
        // markers: true
    }
})

gsap.from("#zone-label", {
    x: 400,
    opacity: 0.2,
    scrollTrigger: {
        trigger: "#zone-label",
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 60%",
        // markers: true
    }
})


const canvas = document.getElementById('ocean-canvas');
const totalDepth = OCEAN_ZONES[OCEAN_ZONES.length - 1].maxDepth;
const TOTAL_CANVAS_VH = 1100;

canvas.style.height = TOTAL_CANVAS_VH + 'vh';
canvas.style.position = 'relative';

let currentTop = 0;
OCEAN_ZONES.forEach((zone) => {
    const depthSpan = zone.maxDepth - zone.minDepth;
    const zoneVH = (depthSpan / totalDepth) * TOTAL_CANVAS_VH;

    const zoneDiv = document.createElement('div');
    zoneDiv.id = zone.id;
    zoneDiv.style.cssText = `
    position: absolute;
    left: 0; right: 0;
    top: ${currentTop}vh;
    height: ${zoneVH}vh;
    background: linear-gradient(180deg, ${zone.bgFrom} 0%, ${zone.bgTo} 100%);
  `;
    currentTop += zoneVH;

    zone.decor.forEach(d => {
        const el = document.createElement('div');
        el.className = d.type;
        el.textContent = d.emoji;
        el.style.left = d.x + '%';
        el.style.top = d.y + '%';
        zoneDiv.appendChild(el);
    });

    zone.fish.forEach(f => {
        const fishEl = document.createElement('div');
        fishEl.className = 'fish' + (f.flipped ? ' flipped' : '');
        fishEl.style.left = f.x + '%';
        fishEl.style.top = f.y + '%';
        fishEl.innerHTML = `<span class="fish-emoji fish-swim" style="animation-duration:${2 + Math.random() * 2}s">${f.emoji}</span>`;
        fishEl.dataset.name = f.name;
        fishEl.dataset.desc = f.desc;
        fishEl.addEventListener('click', (e) => {
            e.stopPropagation();
            showFishInfo(f.name, f.desc);
        });
        zoneDiv.appendChild(fishEl);
    });

    canvas.appendChild(zoneDiv);
});

function showFishInfo(name, desc) {
    document.getElementById('fish-info-name').textContent = name;
    document.getElementById('fish-info-desc').textContent = desc;
    document.getElementById('fish-info').classList.add('visible');
}
document.getElementById('fish-info-close').addEventListener('click', () => {
    document.getElementById('fish-info').classList.remove('visible');
});


const oceanView = document.getElementById('ocean-view');
const oceanBg = document.getElementById('ocean-bg');
const depthVal = document.getElementById('depth-val');
const pressureVal = document.getElementById('pressure-val');
const depthFill = document.getElementById('depth-fill');
const pressureFill = document.getElementById('pressure-fill');
const zoneNameDisplay = document.getElementById('zone-name-display');
const zoneRangeDisplay = document.getElementById('zone-range-display');
const oceanCanvas = document.getElementById('ocean-canvas');

const MAX_DEPTH = 11000;
const MAX_PRESSURE = 1100;

const ZONE_BG_COLORS = [
    '#0d3d6b',
    '#062840',
    '#020e1c',
    '#010a12',
    '#000508'
];

window.addEventListener('scroll', onScroll);

function onScroll() {
    const rect = oceanView.getBoundingClientRect();
    const viewH = window.innerHeight;
    const totalScrollable = oceanView.offsetHeight - viewH;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

    const canvasH = oceanCanvas.offsetHeight;
    const portholeH = document.getElementById('ocean-inner').offsetHeight;
    const maxMove = canvasH - portholeH;
    oceanCanvas.style.top = (-progress * maxMove) + 'px';


    const depth = Math.round(progress * totalDepth);
    const pressure = Math.max(1, Math.round(1 + progress * MAX_PRESSURE));
    depthVal.textContent = depth.toLocaleString();
    pressureVal.textContent = pressure.toLocaleString();
    depthFill.style.width = (progress * 100) + '%';
    pressureFill.style.width = (progress * 100) + '%';

    const zone = OCEAN_ZONES.find(z => depth >= z.minDepth && depth < z.maxDepth) || OCEAN_ZONES[OCEAN_ZONES.length - 1];
    zoneNameDisplay.textContent = zone.name;
    zoneRangeDisplay.textContent = zone.range;

    const zoneBgIndex = OCEAN_ZONES.indexOf(zone);
    oceanBg.style.background = ZONE_BG_COLORS[zoneBgIndex] || ZONE_BG_COLORS[ZONE_BG_COLORS.length - 1];
}


onScroll();