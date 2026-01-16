import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-sm md:text-base font-black uppercase tracking-widest transition-colors ${isOpen ? 'text-red-600' : 'text-white group-hover:text-red-600'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all ${isOpen ? 'bg-red-600 border-red-600 rotate-45' : 'group-hover:border-red-600'}`}>
          <span className="text-xl">+</span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="text-gray-400 text-sm leading-relaxed font-medium space-y-4 pr-12 whitespace-pre-wrap">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tattoo' | 'piercing'>('tattoo');

  const tattooFaqs = [
    {
      q: "Does It Hurt?",
      a: "Yes it does. But not as much as some people might like you to believe, as after a short period of time your body’s natural pain-killers (endorphins), kick in and make things much more manageable. How long these endorphins last usually defines your natural ‘limit’ as to how long a tattoo session you can handle (usually between 2-3 hours), after this time you will tend to become very uncomfortable. The pain of a tattoo is often likened to a mild burning sensation or a cat scratch."
    },
    {
      q: "How much does it cost?",
      a: "When it comes to tattooing, you get what you pay for. Do not expect a good artist to come cheap, and if that’s the way you go, you could end up spending a great deal more further down the line, when you have to pay for a large cover-up or laser removal."
    }
  ];

  const piercingFaqs = [
    {
      q: "Does piercing hurt?",
      a: "Of course it does, but the real question is how much? Often thinking about or waiting to have your piercing will increase your anxiety and fear about the process. The piercing itself is brief, but pain is relative to each person."
    },
    {
      q: "What can I do to help my piercer?",
      a: `Be honest about any health concerns, your piercer is a professional and has a responsibility under data protection to work in a confidential manner. Be honest if you do not like the position your piercer has suggested for your piercing. It is your piercing, take the time to look at where the potential piercing will be sited, for example with facial piercing smile/frown/pout etc. with body piercings stretch and twist etc. Keep calm, try and relax, take a deep breath and slowly let it out as the piercing takes place. Tensing up can cause some difficulties with piercing certain areas e.g. Nipples. Follow the aftercare advice given to you by your piercer; whilst friends and relatives can be well meaning and may consider themselves an expert because they also have a piercing your piercer is in the best position to advise you.

If you have any other questions that we haven’t answered here, please feel free to contact us.`
    }
  ];

  return (
    <section id="faq" className="py-24 px-8 lg:px-24 bg-black relative scroll-mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600">Got Questions?</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Everything You Need to Know</h3>
          
          <div className="flex justify-center gap-8 pt-10">
            <button 
              onClick={() => setActiveTab('tattoo')}
              className={`text-[11px] font-black uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${activeTab === 'tattoo' ? 'border-red-600 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
            >
              Tattoo FAQ
            </button>
            <button 
              onClick={() => setActiveTab('piercing')}
              className={`text-[11px] font-black uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${activeTab === 'piercing' ? 'border-red-600 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
            >
              Piercing FAQ
            </button>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="space-y-0">
            {activeTab === 'tattoo' 
              ? tattooFaqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)
              : piercingFaqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)
            }
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Still have a question?</p>
            <a href="#contact-section" className="inline-block py-4 px-10 bg-red-600 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full shadow-lg">
              Ask Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;