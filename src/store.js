import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     email: "mpaccione1991@gmail.com",
     password: "rspaccio",
     ttsExpiry: "Not Purchased",
     login: true,
     currentWord: 0,
     correct: 0,
     incorrect: 0,
     skipped: 0,
     currentList: "Top 1,000 Words",
     language: "ru-RU",
     languages: {
       "Afrikaans": [
         ["South Africa", "af-ZA"]
       ],
       "Arabic" : [
         ["Algeria","ar-DZ"],
         ["Bahrain","ar-BH"],
         ["Egypt","ar-EG"],
         ["Israel","ar-IL"],
         ["Iraq","ar-IQ"],
         ["Jordan","ar-JO"],
         ["Kuwait","ar-KW"],
         ["Lebanon","ar-LB"],
         ["Morocco","ar-MA"],
         ["Oman","ar-OM"],
         ["Palestinian Territory","ar-PS"],
         ["Qatar","ar-QA"],
         ["Saudi Arabia","ar-SA"],
         ["Tunisia","ar-TN"],
         ["UAE","ar-AE"]
       ],
       "Basque": [
         ["Spain", "eu-ES"]
       ],
       "Bulgarian": [
         ["Bulgaria", "bg-BG"]
       ],
       "Catalan": [
         ["Spain", "ca-ES"]
       ],
       "Chinese Mandarin": [
         ["China (Simp.)", "cmn-Hans-CN"],
         ["Hong Kong SAR (Trad.)", "cmn-Hans-HK"],
         ["Taiwan (Trad.)", "cmn-Hant-TW"]
       ],
       "Chinese Cantonese": [
         ["Hong Kong", "yue-Hant-HK"]
       ],
       "Croatian": [
         ["Croatia", "hr_HR"]
       ],
       "Czech": [
         ["Czech Republic", "cs-CZ"]
       ],
       "Danish": [
         ["Denmark", "da-DK"]
       ],
       "English": [
         ["Australia", "en-AU"],
         ["Canada", "en-CA"],
         ["India", "en-IN"],
         ["Ireland", "en-IE"],
         ["New Zealand", "en-NZ"],
         ["Philippines", "en-PH"],
         ["South Africa", "en-ZA"],
         ["United Kingdom", "en-GB"],
         ["United States", "en-US"]
       ],
       "Farsi": [
         ["Iran", "fa-IR"]
       ],
       "French": [
         ["France", "fr-FR"]
       ],
       "Filipino": [
         ["Philippines", "fil-PH"]
       ],
       "Galician": [
         ["Spain", "gl-ES"]
       ],
       "German": [
         ["Germany", "de-DE"]
       ],
       "Greek": [
         ["Greece", "el-GR"]
       ],
       "Finnish": [
         ["Finland", "fi-FI"]
       ],
       "Hebrew" :[
         ["Israel", "he-IL"]
       ],
       "Hindi": [
         ["India", "hi-IN"]
       ],
       "Hungarian": [
         ["Hungary", "hu-HU"]
       ],
       "Indonesian": [
         ["Indonesia", "id-ID"]
       ],
       "Icelandic": [
         ["Iceland", "is-IS"]
       ],
       "Italian": [
         ["Italy", "it-IT"],
         ["Switzerland", "it-CH"]
       ],
       "Japanese": [
         ["Japan", "ja-JP"]
       ],
       "Korean": [
         ["Korea", "ko-KR"]
       ],
       "Lithuanian": [
         ["Lithuania", "lt-LT"]
       ],
       "Malaysian": [
         ["Malaysia", "ms-MY"]
       ],
       "Dutch": [
         ["Netherlands", "nl-NL"]
       ],
       "Norwegian": [
         ["Norway", "nb-NO"]
       ],
       "Polish": [
         ["Poland", "pl-PL"]
       ],
       "Portuguese": [
         ["Brazil", "pt-BR"],
         ["Portugal", "pt-PT"]
       ],
       "Romanian": [
         ["Romania", "ro-RO"]
       ],
       "Russian": [
         ["Russia", "ru-RU"]
       ],
       "Serbian": [
         ["Serbia", "sr-RS"]
       ],
       "Slovak": [
         ["Slovakia", "sk-SK"]
       ],
       "Slovenian": [
         ["Slovenia", "sl-SI"]
       ], // Need BG For Those Below
       "Spanish": [
         ["Argentina", "es-AR"],
         ["Bolivia", "es-BO"],
         ["Chile", "es-CL"],
         ["Colombia", "es-CO"],
         ["Costa Rica", "es-CR"],
         ["Dominican Republic", "es-DO"],
         ["Ecuador", "es-EC"],
         ["El Salvador", "es-SV"],
         ["Guatemala", "es-GT"],
         ["Honduras", "es-HN"],
         ["México", "es-MX"],
         ["Nicaragua", "es-NI"],
         ["Panamá", "es-PA"],
         ["Paraguay", "es-PY"],
         ["Perú", "es-PE"],
         ["Puerto Rico", "es-PR"],
         ["Spain", "es-ES"],
         ["Uruguay", "es-UY"],
         ["United States", "es-US"],
         ["Venezuela", "es-VE"]
       ],
       "Swedish": [
         ["Sweden", "sv-SE"]
       ],
       "Thai": [
         ["Thailand", "th-TH"]
       ],
       "Turkish": [
         ["Turkey", "tr-TR"]
       ],
       "Ukrainian": [
         ["Ukraine", "uk-UA"]
       ],
       "Vietnamese": [
         ["Viet Nam", "vi-VN"]
       ],
       "Zulu": [
         ["South Africa", "zu-ZA"]
       ]
     },
     wordList: [
      {
        title: "Top 1,000 Words",
        id: 0,
        words: [
          ["и", "and, though"],
          ["в", "in, at"],
          ["не", "not"],
          ["он", "he"],
          ["на", "on, in, at, to"],
          ["я", "i"],
          ["что", "what, that, why"],
          ["тот", "that"],
          ["быть", "to be"],
          ["с", "with, and, from, of"],
          ["а", "while, and, but"],
          ["весь", "all, everything"],
          ["это", "that, this, it"],
          ["как", "how, what, as , like"],
          ["она", "she"],
          ["они", "they"],
          ["к", "to, for, by"],
          ["у", "by, with, of"],
          ["ты", "you, thou"],
          ["из", "from, of, in"],
          ["мы", "we"],
          ["за", "behind, over, at, after"],
          ["вы", "you"],
          ["так", "so, thus, then"],
          ["же", "and, as, for, but, same"],
          ["от", "from, of, for"],
          ["сказать", "to say, to speak"],
          ["зтот", "this"],
          ["который", "which, who, that"],
          ["мочь", "be able"],
          ["человек", "man, person"],
          ["о", "of, about, against"],
          ["один", "one, some, alone"],
          ["ещё", "stil, yet"],
          ["бы", "would"],
          ["такой", "such, so, some"],
          ["только", "only, merely, but"],
          ["себя", "myself, himself, herself"],
          ["своё", "one's own, my, our"],
          ["какой", "what, which, how"],
          ["когда", "when, while, as"],
          ["уже", "already, by now"],
          ["для", "for, to"],
          ["вот", "here, there, this is, that's"],
          ["кто", "who, that, some"],
          ["говорить", "to say, to tell, to speak"],
          ["год", "year"],
          ["знать", "to know, be aware"],
          ["мой", "my, mine"],
          ["до", "to, up to, about, before"],
          ["или", "or"],
          ["если", "if"],
          ["время", "time, season"],
          ["рука", "hand, arm"],
          ["самый", "most, the very, the same"],
          ["ни", "not a, not, neither, nor"],
          ["стать", "to become, begin, come"],
          ["большой", "bug, large, important"],
          ["даже", "even"],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""]
        ]
      }
    ]
  },
  getters: {
  	allWords(state){
      for (var i = 0; i < state.wordList.length; i++) {
        if (state.wordList[i].title == state.currentList){
          return state.wordList[i].words;
        }
      }
  	},
  	currentWordCount(state){
  		return state.currentWord;
  	},
  	currentWord(state){
      for (var i = 0; i < state.wordList.length; i++) {
        if (state.wordList[i].title == state.currentList){
          return state.wordList[i].words[state.currentWord][0];
        }
      }
  	},
  	currentMeaning(state){
      for (var i = 0; i < state.wordList.length; i++) {
        if (state.wordList[i].title == state.currentList){
          return state.wordList[i].words[state.currentWord][1];
        }
      }
  	},
     previousWord(state){
          if (state.currentWord != 0) {
               for (var i = 0; i < state.wordList.length; i++) {
                    if (state.wordList[i].title == state.currentList){
                         return state.wordList[i].words[state.currentWord - 1][0];
                    }
               }
          } else {
               return false;
          }
     },
     previousMeaning(state){
          if (state.currentWord != 0) {
               for (var i = 0; i < state.wordList.length; i++) {
                    if (state.wordList[i].title == state.currentList){
                         return state.wordList[i].words[state.currentWord - 1][1];
                    }
               }
          } else {
               return false;
          }
     },
     nextWord(state){
          console.log(state.currentWord+" | "+state.wordList[0].words.length);
          if (state.currentWord != state.wordList[0].words.length) {
               for (var i = 0; i < state.wordList.length; i++) {
                    if (state.wordList[i].title == state.currentList){
                         return state.wordList[i].words[state.currentWord + 1][0];
                    }
               }
          } else {
               return false;
          }
     },
     nextMeaning(state){
          if (state.currentWord != state.wordList.length) {
               for (var i = 0; i < state.wordList.length; i++) {
                    if (state.wordList[i].title == state.currentList){
                         return state.wordList[i].words[state.currentWord + 1][1];
                    }
               }
          } else {
               return false;
          }
     },
  	lastWord(state){
      for (var i = 0; i < state.wordList.length; i++) {
        if (state.wordList[i]["title"] == state.currentList){
          return state.wordList[i]["words"][state.wordList[i]["words"].length-1];
        }
      }
  	},
  	duplicateEmptyCheck(state){
  		if (state.words.length >= 2) {
  			if (state.words[state.words.length-2][0] == 0 
  				|| state.words[state.words.length-2][1] == 0) {
				return true;
			}
  		} else {
  			return false;
  		}
  	},
    languageCategories(state){
      let arr = [];
      for (var category in state.languages){
           arr.push(category);
      }
      console.log(arr);
      return arr;
    },
  	currentLang(state){
  		return state.language;
  	},
  	correctCount(state){
  		return state.correct;
  	},
  	incorrectCount(state){
  		return state.incorrect;
  	},
    wordLists(state){
        return state.wordList;
    },
    currentListTitle(state){
        return state.currentList;
    },
    email(state){
        return state.email;
    },
    password(state){
        return state.password;
    },
    ttsExpiry(state){
        return state.ttsExpiry;
    }
  },
  mutations: {
  	login(state){
  		state.login = true;
  	},
  	addEmptyWord(state){
      for (var i = 0; i < state.wordLists.length; i++) {
        if (state.wordLists[i]["title"] == state.currentListTitle){
          state.wordLists[i]["words"].push(["",""]);
        }
      }
  	},
  	updateWord(state, payload){
  		// Index, Word, Meaning
      for (var i = 0; i < state.wordLists.length; i++) {
        if (state.wordLists[i]["title"] == state.currentListTitle){
          state.wordLists[i]["words"][payload["index"]][0] = payload["word"];
          state.wordLists[i]["words"][payload["index"]][1] = payload["meaning"];
        }
      }
  	},
  	addCorrect(state){
  		state.correct++;
  		state.currentWord++;
  	},
  	addIncorrect(state){
  		state.incorrect++;
  		state.currentWord++;
  	},
  	setCorrect(state, payload){
  		state.correct = payload;
  	},
  	setIncorrect(state, payload){
  		state.incorrect = payload;
  	},
  	setCurrentWord(state, payload){
  		state.currentWord = payload;
  	},
    setCurrentList(state, payload){
      state.currentList = payload;
    },
  	addSkip(state){
  		state.skipped++;
  		state.currentWord++;
  	},
  	updateLang(state, payload){
  		state.language = payload;
  	},
    addList(state, payload){
      state.wordList.push({
        "title": payload,
        "id": state.wordList.length, // id = index for now
        "words": [
          ["", ""]
        ]
      });
      state.currentList = payload;
      console.log(state.wordList);
    }
  	// removeLastWord(state){
  	// 	state.words.pop();
  	// }
  },
  actions: {
  	
  }
})
