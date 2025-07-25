
import img1 from "@/public/images/img1.png";
import img2 from "@/public/images/img2.png";
import img3 from "@/public/images/img3.png";

// ___________________________________________________________________________________________________\\

export const topArtists = {
  day: ["SZA", "Tyla", "Frank Ocean"],
  month: ["Drake", "Burna Boy", "Ariana Grande"],
  year: ["Kendrick Lamar", "Doja Cat", "J. Cole"],
};


export const topSongs = [
  {artist: "Beyonce", songTitle: "Halo"},
  {artist: "Coldplay", songTitle: "Yellow"},
  {artist: "Sabrina Carpenter", songTitle: "Lie To Girls"}
]

export const albumCovers = [
  {
    image: img1,
    title: "Album 1",
    artist: "Artist One",
    description: "Top songs from today",
  },
  {
    image: img2,
    title: "Album 2",
    artist: "Artist Two",
    description: "Top songs this month",
  },
  {
    image: img3,
    title: "Album 3",
    artist: "Artist Three",
    description: "Top songs this year",
  },
]

// ________________________________________________________________________________________________________\\

type TarotCard = {
  name: string;
  meaning: string;
}

export function drawCard(songTitle: string, tarotCards: TarotCard[]): TarotCard | null {
  // Normalize and split song title into keywords
  const stopWords = new Set(["the", "and", "of", "in", "a", "to", "for", "on", "with", "at", "by"]);
  const songKeywords = songTitle
    .toLowerCase()
    .split(/\W+/)
    .filter(word => word && !stopWords.has(word));

  // Preprocess tarot cards meanings into keyword arrays
  const cardsWithKeywords = tarotCards.map(card => {
    const meaningKeywords = card.meaning
      .toLowerCase()
      .split(/[\W,]+/)
      .filter((word: string) => word && !stopWords.has(word));
    return { ...card, meaningKeywords };
  });

  let bestMatch: TarotCard | null = null;
  let highestScore = 0;

  for (const card of cardsWithKeywords) {
    // Count matches between songKeywords and meaningKeywords
    const score = songKeywords.reduce((count, word) => {
      return card.meaningKeywords.includes(word) ? count + 1 : count;
    }, 0);

    if (score > highestScore) {
      highestScore = score;
      bestMatch = card;
    }
  }

  return bestMatch;
}


// export function drawCard(songMeaning: string, tarotCards: any[]) {
//   // 1. Normalize text: lowercase and split words
//   const songWords = songMeaning.toLowerCase().split(/\W+/);

//   // 2. Score each tarot card by counting overlapping words
//   const scores = tarotCards.map((card: { meaning: string; }) => {
//     const cardWords = card.meaning.toLowerCase().split(/\W+/);
//     // count how many words overlap
//     const matches = cardWords.filter((word: any) => songWords.includes(word));
//     return { card, score: matches.length };
//   });

//   // 3. Sort by score descending
//   scores.sort((a: { score: number; }, b: { score: number; }) => b.score - a.score);

//   // 4. Return the highest scoring card(s)
//   return scores.filter((s: { score: any; }) => s.score === scores[0].score).map((s: { card: any; }) => s.card);
// }


// export function drawCard() {
//   const index = Math.floor(Math.random() * tarotCards.length);
//   return tarotCards[index];
// }
