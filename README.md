#  Charades App

A simple, fun, and colorful web app for playing **Charades** with randomized easy, medium, and hard words—perfect for parties, classrooms, or family game night.

Built with **Next.js**, **React**, and a sprinkle of motion magic .

**Live Demo**: [https://friday-charades.vercel.app/](https://friday-charades.vercel.app/)

---

##  Features

-  **Random Word Generator**  
  Instantly get a new set of easy, medium, and hard charades words.

- ⏱ **30-Second Countdown Timer**  
  Tap “Start” and begin acting! The screen becomes a full-screen countdown until time’s up.

-  **Magic Sound on Play**  
  Adds fun and delight when starting a round.

-  **Bouncy, Styled UI**  
  Uses custom components and smooth transitions for a playful experience.

---

##  Tech Stack

- **Next.js / React**
- **TypeScript**
- **Tailwind CSS**
- **CSS Modules**
- **Custom Components** (`<BouncyText />`, `<Word />`)
- **Google Fonts (Fredoka)**

---

##  How to Use

1. Clone the repo and run the dev server:
   ```bash
   npm install
   npm run dev
   ```

2. Open your browser to `http://localhost:3000`

3. Hit **PLAY** to shuffle words  
   Hit **START** to launch a full-screen 30-second countdown

---

##  Word Lists

Words are stored in local JSON files:

- `/data/easy-charades.json`
- `/data/medium-charades.json`
- `/data/hard-charades.json`

Each file should look like:
```json
{
  "words": ["apple", "jump", "whistle", ...]
}
```

---

##  To Do / Wishlist

-  Voice countdown or buzzer
-  Mobile-friendly refinements
-  Add custom word list input
- ⏳ Difficulty-based timers
-  Multiplayer/team mode

---

##  Ideal For

- Kids and families
- ESL learning
- Icebreakers and classrooms
- House parties or sleepovers

---

##  File Highlights

| File                     | Purpose                            |
|--------------------------|-------------------------------------|
| `page.tsx`               | Main logic and component rendering |
| `Word.tsx`               | Color-coded word display           |
| `BouncyText.tsx`         | Animated title component           |
| `page.module.css`        | Button and layout styles           |
| `/sounds/magic.mp3`      | Chime sound on play                |

