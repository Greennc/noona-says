import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const mrPark = {
  name: "Mr. Park",
  korean_name: "박기사",
  role: "taxi driver",
  personality:
    "A Seoul taxi driver in his late 50s. Practical, observant, and warmer than he first seems. He has driven through every neighborhood in Seoul and has opinions about traffic, weather, late-night food, and which streets are impossible at rush hour. He is patient with learners, but speaks like a real driver: short, natural, and direct.",
  speaking_style:
    "Polite but efficient Korean. Uses service-context phrases and short questions. Speaks clearly, with occasional friendly small talk once the destination is understood. Keeps responses short so a beginner can keep up.",
  speech_level: "polite",
  region: "seoul",
  voice_id: "onyx",
  system_prompt: `You are Mr. Park (박기사), a Korean taxi driver in Seoul. You are speaking with Asha, a foreigner who is learning Korean. She is a beginner.

CRITICAL FORMAT RULES:
1. Respond in this exact JSON format:
{
  "korean": "Your response in Hangul",
  "romanization": "Your response in romanized Korean (Revised Romanization)",
  "english": "Direct English translation",
  "action": "Brief description of what you are doing physically, in English"
}

2. Use polite form (해요체) unless a standard taxi phrase is naturally shorter.

3. Speak like a real taxi driver: short, practical, and warm around the edges.

4. Your main job is to help Asha give a destination, confirm the address, answer simple route questions, and handle light small talk.

5. If Asha seems confused, rephrase more simply. Do not teach grammar directly; Noona handles corrections.

6. Keep responses short: usually one sentence, occasionally two.

7. Stay in character. Do not break the fourth wall.

The scene: It is just past midnight in Seoul. Asha gets into your taxi near Hongdae and wants to go to Yeonnam-dong. Rain has just stopped, the streets are shiny, and traffic is lighter than usual. Useful taxi phrases include 어디로 가세요? (Where are you going?), 주소 보여 주세요 (Please show me the address), 여기 맞아요? (Is this right here?), and 도착했어요 (We've arrived).`
};

const taxiScenario = (characterId) => ({
  title: "Inside the Taxi",
  description:
    "It is just past midnight near Hongdae. You get into Mr. Park's taxi, give him your destination in Yeonnam-dong, confirm the address, and survive a little friendly small talk about Seoul and the rain.",
  location: "Hongdae to Yeonnam-dong, Seoul",
  difficulty: "beginner",
  goal:
    "Tell the taxi driver where you want to go, confirm the destination, and answer one simple follow-up question politely.",
  target_vocab: [
    {
      korean: "택시",
      romanization: "taeksi",
      english: "taxi"
    },
    {
      korean: "홍대",
      romanization: "Hongdae",
      english: "Hongdae"
    },
    {
      korean: "연남동",
      romanization: "Yeonnam-dong",
      english: "Yeonnam-dong"
    },
    {
      korean: "가 주세요",
      romanization: "ga juseyo",
      english: "please go"
    },
    {
      korean: "여기로 가 주세요",
      romanization: "yeogiro ga juseyo",
      english: "please go here"
    },
    {
      korean: "주소",
      romanization: "juso",
      english: "address"
    },
    {
      korean: "맞아요",
      romanization: "majayo",
      english: "that's right / correct"
    },
    {
      korean: "얼마예요?",
      romanization: "eolmayeyo?",
      english: "how much is it?"
    }
  ],
  target_grammar: [
    {
      name: "destination_ro",
      korean: "장소 + 로/으로",
      description:
        "Use 로 or 으로 after a place to mean 'to/toward' that destination. Example: 연남동으로 가 주세요."
    },
    {
      name: "polite_request_go",
      korean: "가 주세요",
      description:
        "A polite request meaning 'please go.' Put the destination before it: 여기로 가 주세요."
    },
    {
      name: "confirmation_majayo",
      korean: "맞아요",
      description:
        "A simple confirmation meaning 'that's right' or 'correct' when the driver checks the address."
    }
  ],
  starting_character_id: characterId,
  opening_message_korean: "안녕하세요. 어디로 가세요?",
  opening_message_romanization: "Annyeonghaseyo. Eodiro gaseyo?",
  opening_message_english: "Hello. Where are you going?",
  cultural_notes:
    "In a Korean taxi, it is natural to give a neighborhood, station, or address right away. If pronunciation feels hard, showing the address on your phone is common and polite. 여기로 가 주세요 means 'Please go here' and works beautifully while pointing at a map. Taxi drivers may ask 여기 맞아요? to confirm the exact drop-off spot."
});

const taxiLesson = (scenarioId) => ({
  scenario_id: scenarioId,
  intro_text:
    "Asha-ya, this one is very Seoul: it is late, the street is shiny from rain, and you are getting into Mr. Park's taxi near Hongdae. Your job is simple and powerful: say where you want to go, confirm the address, and answer one tiny follow-up. We are not doing a speech. We are getting home.",
  vocab_items: [
    {
      korean: "택시",
      romanization: "taeksi",
      pronunciation: "Taek-si -> tek-shee",
      english: "taxi",
      noona_tip: "This sounds close to English, so let it be easy. Korean gives you gifts sometimes.",
      example_phrase: "택시 탔어요",
      example_phrase_romanization: "taeksi tasseoyo",
      example_phrase_english: "I took a taxi"
    },
    {
      korean: "연남동",
      romanization: "Yeonnam-dong",
      pronunciation: "Yeon-nam-dong -> yawn-nahm-dong",
      english: "Yeonnam-dong",
      noona_tip: "Neighborhood names are real survival Korean. You can say the place name clearly, then add 가 주세요.",
      example_phrase: "연남동으로 가 주세요",
      example_phrase_romanization: "Yeonnam-dong-euro ga juseyo",
      example_phrase_english: "Please go to Yeonnam-dong"
    },
    {
      korean: "여기로 가 주세요",
      romanization: "yeogiro ga juseyo",
      pronunciation: "Yeo-gi-ro ga ju-se-yo -> yuh-gee-roh gah joo-seh-yo",
      english: "Please go here",
      noona_tip: "This is the magic taxi phrase when you are showing your phone. Point at the map and say this. Beautiful. Efficient. Main character behavior.",
      example_phrase: "기사님, 여기로 가 주세요",
      example_phrase_romanization: "gisanim, yeogiro ga juseyo",
      example_phrase_english: "Driver, please go here"
    },
    {
      korean: "주소",
      romanization: "juso",
      pronunciation: "Ju-so -> joo-soh",
      english: "address",
      noona_tip: "If Mr. Park asks for the address, 주소 is the word you are listening for.",
      example_phrase: "주소 보여 드릴게요",
      example_phrase_romanization: "juso boyeo deurilgeyo",
      example_phrase_english: "I will show you the address"
    },
    {
      korean: "맞아요",
      romanization: "majayo",
      pronunciation: "Ma-ja-yo -> mah-jah-yo",
      english: "That's right / correct",
      noona_tip: "When the driver confirms the destination, this is your calm little yes. Not just yes - 'that's correct.'",
      example_phrase: "네, 맞아요",
      example_phrase_romanization: "ne, majayo",
      example_phrase_english: "Yes, that's right"
    },
    {
      korean: "얼마예요?",
      romanization: "eolmayeyo?",
      pronunciation: "Eol-ma-ye-yo -> uhl-mah-yeh-yo",
      english: "How much is it?",
      noona_tip: "Use this at the end if you need the fare repeated. In most taxis you can see it on the meter, but this is still a good phrase.",
      example_phrase: "기사님, 얼마예요?",
      example_phrase_romanization: "gisanim, eolmayeyo?",
      example_phrase_english: "Driver, how much is it?"
    }
  ],
  grammar_items: [
    {
      name: "Destination with 로/으로",
      korean: "장소 + 로/으로",
      explanation:
        "Use 로 or 으로 after a place to mean 'to' or 'toward.' If the place ends in a vowel, use 로. If it ends in a consonant, use 으로. Do not panic about the rule in the taxi. If you say 여기로 가 주세요, you are already winning.",
      example_korean: "연남동으로 가 주세요",
      example_romanization: "Yeonnam-dong-euro ga juseyo",
      example_pronunciation: "Yeon-nam-dong-eu-ro ga ju-se-yo -> yawn-nahm-dong-uh-roh gah joo-seh-yo",
      example_english: "Please go to Yeonnam-dong"
    },
    {
      name: "Polite request with 가 주세요",
      korean: "가 주세요",
      explanation:
        "가 주세요 means 'please go.' Put the place before it. It is polite, direct, and exactly the kind of phrase you want in a taxi.",
      example_korean: "여기로 가 주세요",
      example_romanization: "yeogiro ga juseyo",
      example_pronunciation: "Yeo-gi-ro ga ju-se-yo -> yuh-gee-roh gah joo-seh-yo",
      example_english: "Please go here"
    },
    {
      name: "Confirming with 맞아요",
      korean: "맞아요",
      explanation:
        "맞아요 means 'that's right' or 'correct.' If Mr. Park asks 여기 맞아요? you can answer 네, 맞아요.",
      example_korean: "네, 맞아요",
      example_romanization: "ne, majayo",
      example_pronunciation: "Ne, ma-ja-yo -> neh, mah-jah-yo",
      example_english: "Yes, that's right"
    }
  ],
  closing_text:
    "Your taxi survival kit is tiny and strong: 여기로 가 주세요, 네 맞아요, and maybe 얼마예요? if you need it. Keep your voice calm, show the address if needed, and let Mr. Park do the driving. 준비됐어? Let's step into the taxi."
});

async function getOrCreateMrPark() {
  const { data: existing, error: findError } = await supabase
    .from("kr_characters")
    .select("*")
    .eq("name", mrPark.name)
    .maybeSingle();
  if (findError) throw findError;
  if (existing) return existing;

  const { data, error } = await supabase
    .from("kr_characters")
    .insert(mrPark)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getOrCreateTaxiScenario(characterId) {
  const { data: existing, error: findError } = await supabase
    .from("kr_scenarios")
    .select("*")
    .eq("title", "Inside the Taxi")
    .maybeSingle();
  if (findError) throw findError;
  if (existing) return existing;

  const { data, error } = await supabase
    .from("kr_scenarios")
    .insert(taxiScenario(characterId))
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getOrCreateTaxiLesson(scenarioId) {
  const { data: existing, error: findError } = await supabase
    .from("kr_lessons")
    .select("*")
    .eq("scenario_id", scenarioId)
    .maybeSingle();
  if (findError) throw findError;
  if (existing) return existing;

  const { data, error } = await supabase
    .from("kr_lessons")
    .insert(taxiLesson(scenarioId))
    .select()
    .single();
  if (error) throw error;
  return data;
}

const character = await getOrCreateMrPark();
const scenario = await getOrCreateTaxiScenario(character.id);
const lesson = await getOrCreateTaxiLesson(scenario.id);

console.log(JSON.stringify({
  character: {
    id: character.id,
    name: character.name
  },
  scenario: {
    id: scenario.id,
    title: scenario.title,
    location: scenario.location
  },
  lesson: {
    id: lesson.id,
    scenario_id: lesson.scenario_id
  }
}, null, 2));
