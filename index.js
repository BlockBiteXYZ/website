const title = document.getElementById("title");

const typewriterTitle = new Typewriter(title, {
  loop: false,
  delay: 250,
  cursor: "▍",
});

const subtitle = document.getElementById("subtitle");
const typewriterSubtitle = new Typewriter(subtitle, {
  loop: false,
  delay: 100,
  cursor: "",
});


const contactUs = document.getElementById("contact-us");
const typewriterContactUs = new Typewriter(contactUs, {
  loop: false,
  delay: 100,
  cursor: "",
});

typewriterTitle.pauseFor(500).typeString("BB").pauseFor(1500).deleteChars(1).typeString("lockBite").callFunction(() => {
  typewriterSubtitle.pauseFor(250).typeString("We do blockchain stuff").callFunction(() => {
    typewriterContactUs.pauseFor(250).typeString('<a href="mailto:contact@blockbite.xyz">Contact us</a>').start()
  }).start();
}).start();
