export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who is the employer of Dementor in Azkaban?",
    image:
      // "https://images.unsplash.com/photo-1642201855395-1c8b44e6e42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Azkaban.jpg",
    answers: [
      "British Ministry of Divine Health",
      "British Ministry of Magic",
      "Trick question: nothing!",
      "International Confederation of Wizards",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The Triwizard Tournament, where Harry Potter encounters a Boggart who transforms into a Dementor, is a friendly competition between the three largest European schools of wizardry. Which one isn't?",
    image: "https://pbs.twimg.com/profile_images/417750076337844224/i0cK3mYB.jpeg",
    answers: ["Beauxbatons Academy of Magic", "Durmstrang Institute", "Hogwarts School of Witchcraft and Wizardry", "Ilvermorny School of Witchcraft and Wizardry"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What is the name of defensive charm that used to repel a Dementor?",
    image:
      // "https://images.unsplash.com/photo-1591439346018-9d5df732ab7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Daniel-Radcliffe-as-Harry-Potter-Casting-a-Spell.jpg",      
    answers: ["Expecto Patronum", "Arresto Momentum", "Bombarda Maxima", "Lacarnum Inflamari"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "The act of Dementor sucking out a person's soul?",
    image: "https://live.staticflickr.com/7620/16576186724_3b07b96dd0_b.jpg",
    answers: ["Dementor's Bliss", "Dementor's Touch", "Dementor's Kiss", "Dementor's Slap"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Who is British Minister for Magic, the leader of British Ministry of Magic, that banned the use of Dementors to guard Azkaban, and made sure they would not be used to torment the opponents of the Ministry?",
    image: "https://orlandoparkstop.com/wp-content/uploads/2020/05/Ministry.JPG.jpg",
    answers: ["Cornelius Fudge", "Rufus Scrimgeour", "Pius Thicknesse", "Kingsley Shacklebolt"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
