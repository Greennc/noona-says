import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const eomma = {
  name: "Eomma",
  korean_name: "이모",
  role: "host mother",
  personality:
    "A warm Korean host mother in Mapo-gu. She is generous, practical, and impossible to outfeed. She notices everything, refills rice before anyone asks, and shows affection through side dishes. She is kind to learners, but speaks naturally and expects the conversation to keep moving around the table.",
  speaking_style:
    "Warm polite Korean. Uses everyday home and food phrases. Encouraging but direct, with gentle pressure to eat more. Keeps sentences short enough for a beginner to follow.",
  speech_level: "polite",
  region: "seoul",
  voice_id: "shimmer",
  system_prompt: `You are Eomma (이모), a Korean host mother in Mapo-gu, Seoul. You are speaking with Asha, a foreigner who is learning Korean. She is a beginner.

CRITICAL FORMAT RULES:
1. Respond in this exact JSON format:
{
  "korean": "Your response in Hangul",
  "romanization": "Your response in romanized Korean (Revised Romanization)",
  "english": "Direct English translation",
  "action": "Brief description of what you are doing physically, in English"
}

2. Use polite Korean, but sound natural at a family dinner table.

3. You are warm and hospitable. You offer food, ask if Asha likes it, and gently encourage her to eat more.

4. If Asha seems confused, simplify your Korean on the next turn. Do not teach grammar directly; Noona handles corrections.

5. Keep responses short: usually one sentence, occasionally two.

6. Stay in character. Do not break the fourth wall.

The scene: Asha is at your home in Mapo-gu for dinner. You have set out rice, soup, kimchi, and several banchan. Asha should practice complimenting food, accepting a little more, and politely declining when she is full. Useful phrases include 맛있어요 (It's delicious), 조금만 주세요 (Please give me just a little), 괜찮아요 (It's okay / no thank you), and 배불러요 (I'm full).`
};

const familyScenario = (characterId) => ({
  title: "Dinner at Host Family's",
  description:
    "You are sitting at Eomma's dinner table in Mapo-gu. There are three side dishes you do not recognize, your rice bowl keeps refilling, and your mission is to compliment the food, accept a little more, and politely decline when you are full.",
  location: "Mapo-gu, Seoul",
  difficulty: "intermediate",
  goal:
    "Compliment the food, respond when Eomma offers more, and politely say you are full without sounding rude.",
  target_vocab: [
    {
      korean: "밥",
      romanization: "bap",
      english: "rice / meal"
    },
    {
      korean: "반찬",
      romanization: "banchan",
      english: "side dishes"
    },
    {
      korean: "맛있어요",
      romanization: "masisseoyo",
      english: "it is delicious"
    },
    {
      korean: "더 주세요",
      romanization: "deo juseyo",
      english: "please give me more"
    },
    {
      korean: "조금만 주세요",
      romanization: "jogeumman juseyo",
      english: "please give me just a little"
    },
    {
      korean: "괜찮아요",
      romanization: "gwaenchanayo",
      english: "it is okay / no thank you"
    },
    {
      korean: "배불러요",
      romanization: "baebulleoyo",
      english: "I am full"
    },
    {
      korean: "잘 먹었습니다",
      romanization: "jal meogeosseumnida",
      english: "thank you for the meal"
    }
  ],
  target_grammar: [
    {
      name: "polite adjective ending",
      korean: "맛있어요 / 배불러요",
      description:
        "Use the polite 요 ending to describe how something is: delicious, okay, or full."
    },
    {
      name: "soft limiting with 조금만",
      korean: "조금만",
      description:
        "조금만 means 'just a little' and softens your request when someone offers more food."
    },
    {
      name: "polite refusal",
      korean: "괜찮아요",
      description:
        "괜찮아요 can politely mean 'I am okay' or 'no thank you' when declining more food."
    }
  ],
  starting_character_id: characterId,
  opening_message_korean: "어서 와요! 밥 많이 먹어요.",
  opening_message_romanization: "Eoseo wayo! Bap mani meogeoyo.",
  opening_message_english: "Welcome! Eat lots.",
  cultural_notes:
    "At a Korean family dinner, offering more food is often a way to show care. A warm compliment like 맛있어요 goes a long way. If you are full, 괜찮아요 or 배불러요 can work, especially with 감사합니다. Saying 잘 먹었습니다 after the meal is a polite way to show gratitude."
});

const familyLesson = (scenarioId) => ({
  scenario_id: scenarioId,
  intro_text:
    "Asha-ya, this scene is peak Korean home dinner: Eomma has cooked, the table is full, and somehow your rice bowl is never empty. Your job is not to be perfect. Your job is to be warm: say the food is delicious, accept a little if you want, and politely tap out when you are full.",
  vocab_items: [
    {
      korean: "밥",
      romanization: "bap",
      pronunciation: "Bap -> bahp",
      english: "rice / meal",
      noona_tip: "밥 can mean rice, but also the whole meal. Very small word, very big cultural energy.",
      example_phrase: "밥 먹어요",
      example_phrase_romanization: "bap meogeoyo",
      example_phrase_english: "Eat a meal"
    },
    {
      korean: "반찬",
      romanization: "banchan",
      pronunciation: "Ban-chan -> bahn-chahn",
      english: "side dishes",
      noona_tip: "These are the little dishes around the rice and soup. If you do not know what one is, smile and try a tiny bit.",
      example_phrase: "반찬 맛있어요",
      example_phrase_romanization: "banchan masisseoyo",
      example_phrase_english: "The side dishes are delicious"
    },
    {
      korean: "맛있어요",
      romanization: "masisseoyo",
      pronunciation: "Ma-sit-sseo-yo -> mah-shee-saw-yo",
      english: "it is delicious",
      noona_tip: "This is your dinner-table superpower. Say it once and everyone relaxes.",
      example_phrase: "정말 맛있어요",
      example_phrase_romanization: "jeongmal masisseoyo",
      example_phrase_english: "It is really delicious"
    },
    {
      korean: "더 주세요",
      romanization: "deo juseyo",
      pronunciation: "Deo ju-se-yo -> duh joo-seh-yo",
      english: "please give me more",
      noona_tip: "Use this when you actually want more. Powerful phrase. Use responsibly around Eomma.",
      example_phrase: "김치 더 주세요",
      example_phrase_romanization: "gimchi deo juseyo",
      example_phrase_english: "Please give me more kimchi"
    },
    {
      korean: "조금만 주세요",
      romanization: "jogeumman juseyo",
      pronunciation: "Jo-geum-man ju-se-yo -> joh-geum-mahn joo-seh-yo",
      english: "please give me just a little",
      noona_tip: "This is perfect when you want to be polite but do not want a mountain of rice.",
      example_phrase: "조금만 주세요",
      example_phrase_romanization: "jogeumman juseyo",
      example_phrase_english: "Please give me just a little"
    },
    {
      korean: "괜찮아요",
      romanization: "gwaenchanayo",
      pronunciation: "Gwaen-cha-na-yo -> gwen-chah-nah-yo",
      english: "it is okay / no thank you",
      noona_tip: "Soft and useful. With a smile, this can gently mean 'I'm okay, thank you.'",
      example_phrase: "괜찮아요, 감사합니다",
      example_phrase_romanization: "gwaenchanayo, gamsahamnida",
      example_phrase_english: "I'm okay, thank you"
    },
    {
      korean: "배불러요",
      romanization: "baebulleoyo",
      pronunciation: "Bae-bul-leo-yo -> beh-bool-luh-yo",
      english: "I am full",
      noona_tip: "Say this when you are truly done. Add 감사합니다 to make it warmer.",
      example_phrase: "배불러요, 감사합니다",
      example_phrase_romanization: "baebulleoyo, gamsahamnida",
      example_phrase_english: "I'm full, thank you"
    },
    {
      korean: "잘 먹었습니다",
      romanization: "jal meogeosseumnida",
      pronunciation: "Jal meo-geo-sseum-ni-da -> jahl muh-guh-sseum-nee-dah",
      english: "thank you for the meal",
      noona_tip: "Say this after eating. It literally means 'I ate well,' and it lands beautifully.",
      example_phrase: "잘 먹었습니다!",
      example_phrase_romanization: "jal meogeosseumnida!",
      example_phrase_english: "Thank you for the meal!"
    }
  ],
  grammar_items: [
    {
      name: "Polite describing with 요",
      korean: "맛있어요 / 배불러요",
      explanation:
        "The 요 ending makes everyday statements polite. 맛있어요 means 'it is delicious' and 배불러요 means 'I am full.' Both are short, useful, and dinner-table approved.",
      example_korean: "정말 맛있어요",
      example_romanization: "jeongmal masisseoyo",
      example_pronunciation: "Jeong-mal ma-sit-sseo-yo -> jung-mahl mah-shee-saw-yo",
      example_english: "It is really delicious"
    },
    {
      name: "Just a little with 조금만",
      korean: "조금만",
      explanation:
        "조금 means 'a little' and 만 means 'only.' Together, 조금만 means 'just a little.' It is a lifesaver when someone is lovingly overfeeding you.",
      example_korean: "조금만 주세요",
      example_romanization: "jogeumman juseyo",
      example_pronunciation: "Jo-geum-man ju-se-yo -> joh-geum-mahn joo-seh-yo",
      example_english: "Please give me just a little"
    },
    {
      name: "Soft refusal with 괜찮아요",
      korean: "괜찮아요",
      explanation:
        "괜찮아요 literally means 'it is okay,' but in context it can politely decline an offer. Add 감사합니다 if you want to sound extra warm.",
      example_korean: "괜찮아요, 감사합니다",
      example_romanization: "gwaenchanayo, gamsahamnida",
      example_pronunciation: "Gwaen-cha-na-yo, gam-sa-ham-ni-da -> gwen-chah-nah-yo, gahm-sah-hahm-nee-dah",
      example_english: "I'm okay, thank you"
    }
  ],
  closing_text:
    "You have everything you need: 맛있어요 to compliment, 조금만 주세요 to control the rice situation, and 배불러요 when you are done. Smile, be warm, and remember: Eomma offering more food means you are being cared for. 준비됐어? Let's sit down."
});

async function getOrCreateEomma() {
  const { data: existing, error: findError } = await supabase
    .from("kr_characters")
    .select("*")
    .eq("name", eomma.name)
    .maybeSingle();
  if (findError) throw findError;
  if (existing) return existing;

  const { data, error } = await supabase
    .from("kr_characters")
    .insert(eomma)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getOrCreateFamilyScenario(characterId) {
  const { data: existing, error: findError } = await supabase
    .from("kr_scenarios")
    .select("*")
    .eq("title", "Dinner at Host Family's")
    .maybeSingle();
  if (findError) throw findError;
  if (existing) return existing;

  const { data, error } = await supabase
    .from("kr_scenarios")
    .insert(familyScenario(characterId))
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getOrCreateFamilyLesson(scenarioId) {
  const { data: existing, error: findError } = await supabase
    .from("kr_lessons")
    .select("*")
    .eq("scenario_id", scenarioId)
    .maybeSingle();
  if (findError) throw findError;
  if (existing) return existing;

  const { data, error } = await supabase
    .from("kr_lessons")
    .insert(familyLesson(scenarioId))
    .select()
    .single();
  if (error) throw error;
  return data;
}

const character = await getOrCreateEomma();
const scenario = await getOrCreateFamilyScenario(character.id);
const lesson = await getOrCreateFamilyLesson(scenario.id);

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
