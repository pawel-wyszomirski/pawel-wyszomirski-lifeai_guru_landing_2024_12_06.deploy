import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Clock, 
  Shield, 
  Sparkles,
  Send,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const faqData = [
  {
    category: "Gwarancja i wsparcie",
    questions: [
      {
        question: "Czy jest gwarancja zwrotu?",
        answer: "Tak, masz 30 dni na przetestowanie kursu. Jeśli z jakiegokolwiek powodu nie będziesz zadowolony/a, zwrócimy Ci pieniądze bez żadnych pytań. Wystarczy mail.",
        icon: Shield
      },
      {
        question: "Jakie wsparcie otrzymam?",
        answer: "Masz dostęp do zamkniętej grupy na Discordzie, gdzie możesz zadawać pytania i otrzymywać wsparcie od społeczności i mentorów. Odpowiadamy zwykle w ciągu 24h.",
        icon: MessageCircle
      }
    ]
  },
  {
    category: "Podstawowe",
    questions: [
      {
        question: "Czy potrzebuję doświadczenia z AI?",
        answer: "Nie, kurs jest zaprojektowany tak, żeby każdy mógł zacząć od zera. Przeprowadzimy Cię krok po kroku przez podstawy, aż do zaawansowanych zastosowań AI w rozwoju osobistym.",
        icon: Sparkles
      },
      {
        question: "Ile czasu dziennie muszę poświęcić?",
        answer: "Minimum to 30-45 minut dziennie. Materiały są podzielone na małe fragmenty, które możesz przerabiać w swoim tempie. Każdego dnia otrzymasz też 'Quick Win' - zadanie, które zajmie Ci maksymalnie 15 minut, a da konkretny rezultat.",
        icon: Clock
      },
      {
        question: "Jak długo mam dostęp do kursu?",
        answer: "Otrzymujesz dożywotni dostęp do materiałów kursu i wszystkich przyszłych aktualizacji. Możesz wracać do treści kiedy chcesz i ile razy chcesz.",
        icon: Shield
      }
    ]
  },
  {
    category: "Techniczne",
    questions: [
      {
        question: "Jakie narzędzia będą potrzebne?",
        answer: "Podstawowym narzędziem jest ChatGPT (darmowa wersja). Pokażemy Ci też inne przydatne narzędzia, ale większość z nich ma darmowe wersje wystarczające do nauki.",
        icon: Sparkles
      },
      {
        question: "Czy materiały mogę pobrać na dysk?",
        answer: "Tak, wszystkie materiały tekstowe i ćwiczenia możesz pobrać w formacie PDF. Materiały wideo są dostępne do oglądania online w panelu kursu.",
        icon: HelpCircle
      }
    ]
  }
];

const FAQAccordion = ({ question, answer, icon: Icon, isOpen, onClick }) => (
  <div className="border-b border-gray-700 last:border-0">
    <button
      className="w-full py-4 flex items-start justify-between text-left transition-colors hover:text-blue-400"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
        <span className="font-medium">{question}</span>
      </div>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 flex-shrink-0" />
      )}
    </button>
    
    {isOpen && (
      <div className="pb-4 text-gray-400 pl-8 pr-4 animate-slideDown">
        {answer}
      </div>
    )}
  </div>
);

const AskQuestion = () => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xbjnkzrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, question })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setQuestion('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
        Nie znalazłeś/aś odpowiedzi?
      </h3>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Twój email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          required
        />
        
        <textarea
          placeholder="Twoje pytanie..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={3}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
          required
        />
        
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
        >
          <Send className="w-4 h-4 mr-2" />
          {status === 'sending' ? 'Wysyłanie...' : 'Wyślij pytanie'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center">
            Dziękujemy za pytanie! Odpowiemy najszybciej jak to możliwe.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">
            Wystąpił błąd. Spróbuj ponownie później lub skontaktuj się przez Messenger.
          </p>
        )}
      </form>
    </div>
  );
};

const FAQSection = () => {
  const [openQuestions, setOpenQuestions] = useState({});
  const [activeCategory, setActiveCategory] = useState("Gwarancja i wsparcie");

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]: !prev[`${categoryIndex}-${questionIndex}`]
    }));
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-gray-400">
            Znajdź odpowiedzi na najczęstsze pytania o kurs
          </p>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {faqData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                ${activeCategory === category.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-750'
                }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="bg-gray-800 rounded-lg p-6">
          {faqData
            .find(cat => cat.category === activeCategory)
            ?.questions.map((item, questionIdx) => (
              <FAQAccordion
                key={questionIdx}
                {...item}
                isOpen={openQuestions[`${activeCategory}-${questionIdx}`]}
                onClick={() => toggleQuestion(activeCategory, questionIdx)}
              />
            ))}
        </div>

        {/* Ask Question Form */}
        <AskQuestion />

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Nadal masz wątpliwości? Skontaktuj się z nami!
          </p>
          <div className="flex items-center justify-center">
            <a 
              href="https://m.me/391717047349920"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Napisz na Messenger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;