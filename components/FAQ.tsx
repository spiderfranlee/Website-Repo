
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
        <div className="text-gray-400 text-sm leading-relaxed font-medium space-y-4 pr-12">
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
      a: "Yes it does. But not as much as some people might like you to believe, as after a short period of time your body’s natural pain-killers (endorphins), kick in and make things much more manageable. How long these endorphins last usually defines your natural ‘limit’ as to how long a tattoo session you can handle (usually between 2-3 hours), after this time you will tend to become very uncomfortable. The pain of a tattoo is often likened to a mild burning sensation or a cat scratch. However, the real factor as to how much a tattoo hurts is really down to where you intend to get it. Any area directly over bone will be particularly sensitive; this includes ribs, feet, hands, head, and pelvis to name a few. If you are looking for a less painful spot, then you should consider an area protected by a large muscle; such as the fore-arm, upper-arm, shoulder, calf and thigh. That being said, everyone’s pain threshold varies, so there are no hard and fast answers to this question."
    },
    {
      q: "How long does a tattoo take?",
      a: "Tattooing is not a quick process, nor should it be rushed as you will be living with the results permanently. An averagely complex piece of work about the size of the back of your hand, usually takes about two hours to complete. Larger or more complex pieces can take tens of hours, and will require several sittings to complete. Usually appointments are made in multiples of hours, but some smaller pieces may only require a thirty minute appointment."
    },
    {
      q: "How much does it cost?",
      a: "When it comes to tattooing, you get what you pay for. Do not expect a good artist to come cheap, and if that’s the way you go, you could end up spending a great deal more further down the line, when you have to pay for a large cover-up or laser removal. Save your money until you can afford what you really want! Don’t settle, just because you are impatient to get some ink, this decision will be with you for a long time. At Skin Graphics prices are due to size & detail of the tattoo you wish for large pieces we are happy to do a payment plan with you where you can pay for the tattoo you really want gradually until you have paid for it."
    },
    {
      q: "Can I use numbing cream or pain killers?",
      a: (
        <>
          <p>You can use numbing cream, but very few tattoo studios will recommend it for several reasons. Firstly, it needs to be applied around thirty minutes before you sit for your tattoo and will only last for around thirty to forty-five minutes. This makes it very difficult to time the application of the cream. Secondly, if your tattoo is not finished before the cream wears off, then the pain will come back with a vengeance!</p>
          <p>Aspirin is the biggest problem as it thins the blood and reduces clotting, this will cause excessive bleeding during your tattoo. Ibuprofen based painkillers can give some pain relief during the process and will not hinder the tattoo in any way.</p>
          <p className="text-red-600 font-bold uppercase text-[10px] tracking-widest mt-4">HOWEVER... If in any doubt PLEASE seek advise from your own professional health practitioner.</p>
        </>
      )
    },
    {
      q: "Can tattoo’s be removed?",
      a: "They can. There are several options available: the cover-up, laser removal, or a combination of both. Laser removal can be used to reduce the density of the offending tattoo, so that a much more desirable (and often smaller) tattoo can be used to cover up the old design."
    },
    {
      q: "How do I decide on a design?",
      a: "Traditionally, you chose from 'Flash Art' on the walls. Today, we design custom work to your specifications. Your artist will be able to work with you to generate a tattoo that is personal and has more meaning. Bring any reference material you think is relevant; it helps both of you understand each other much easier."
    },
    {
      q: "How do I decide on a studio?",
      a: "Visit studios, talk to the tattoo artist, get a general feel for them. Is the studio clean and well presented? If a tattoo artist can’t keep their house in order, what other corners might they be cutting? The cleanliness of the studio will very much reflect their attitude towards their customer and their customer’s wellbeing."
    },
    {
      q: "Should I have a drink before my tattoo to steady my nerves?",
      a: "No. Alcohol thins your blood considerably, causing excessive bleeding while you are having the tattoo, which will have the effect of ‘washing out’ ink as it is being put in. Alcohol can have an effect for several days, so it is also not a good idea to have a tattoo after a night drinking."
    },
    {
      q: "What should I do on the day of my tattoo?",
      a: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Have something to eat and drink about an hour before your tattoo to prevent low blood sugar.</li>
          <li>Think about what you are going to wear—dress so that you can expose the area easily.</li>
          <li>Don't wear your Sunday best as ink can occasionally get on clothes.</li>
          <li>Shave the area if possible the morning prior.</li>
        </ul>
      )
    },
    {
      q: "Can I catch anything from getting a tattoo?",
      a: "If you have chosen your tattoo studio wisely, then the chances of catching anything are similar to a visit to the dentist. Everything will be either sterilised to medical standards or be disposable single use. Reputable tattooists will be certified in Infection control."
    }
  ];

  const piercingFaqs = [
    {
      q: "Does piercing hurt?",
      a: "Of course it does, but the real question is how much? The piercing itself is brief, but pain is relative to each person. Talking through any fears or concerns that you may have with your piercer will help."
    },
    {
      q: "How old do I have to be to have a piercing?",
      a: "If you are under 16 years old you need to have consent from your parent or guardian, they will also need to attend our studio with you. Genital piercings require you to be over 18. If you look under 25, be prepared to provide ID."
    },
    {
      q: "What should I do before having a piercing?",
      a: "Eat a good meal before getting pierced to keep your blood sugar steady. Don’t have a drink to steady your nerves. You should also be asked to complete a consent form."
    },
    {
      q: "What should happen immediately after my piercing?",
      a: "You should never feel rushed. Some people can feel shaky, so take the time that you need to feel comfortable. Tell your piercer if you feel unwell; don’t be embarrassed!"
    },
    {
      q: "Choosing the right Studio for you?",
      a: "Take the time to meet your piercer and look around. The studio should be registered with the local authority and have a fully operational ultra-sonic cleaner and autoclave."
    },
    {
      q: "Can I get an infection from being pierced?",
      a: "Potentially yes, but it is very rare if infection control principles are followed. Usually, infections are due to the person not following aftercare guidelines. Your piercer should be able to fully explain their sterilisation procedures."
    },
    {
      q: "Is there any pain relief that i can use?",
      a: (
        <>
          <p>Ibuprofen can be used as an anti-inflammatory. Your piercer may offer a freeze spray. Avoid aspirin as it thins the blood.</p>
          <p className="text-red-600 font-bold uppercase text-[10px] tracking-widest mt-4">HOWEVER... If in any doubt PLEASE seek advise from your own professional health practitioner.</p>
        </>
      )
    },
    {
      q: "Will my piercing bleed?",
      a: "Sometimes yes. A small amount of bleeding the first day or two is not uncommon. Bruising can also occur but isn't usually anything to worry about."
    },
    {
      q: "What can and can't I do during the healing period?",
      a: "Treat your new piercing like a wound. Avoid irritation and always wash your hands thoroughly with anti-bacterial soap before touching it."
    },
    {
      q: "How long before I can change my jewellery?",
      a: "Healing times vary. Changing jewellery too early re-opens the 'piercing wound'. Wait until your piercing is no longer tender to touch or sleep on."
    },
    {
      q: "Why start with titanium, stainless steel, or gold?",
      a: "Titanium and High-grade Surgical Stainless Steel give you the best chances of an infection and reaction-free piercing. They are virtually nickel-free and specially designed for the healing process."
    },
    {
      q: "How long should I wait before stretching my piercing?",
      a: "Ideally, wait at least three times as long as the advised healing period. Stretching takes time and patience to prevent scar tissue build-up."
    },
    {
      q: "Needle versus Gun?",
      a: "Using a needle is much safer and less painful. It slices through skin rather than forcing a blunt stud through. Needles promote quicker healing. Guns should only be used for ear lobes."
    },
    {
      q: "If I have a skin condition can I have a piercing?",
      a: "If you have a rash, burn, or broken skin, you must wait until it heals. Scar tissue can be pierced, but it must be completely healed (usually 1-2 months after removing old jewellery)."
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
          <div className="mb-12">
            <p className="text-gray-400 italic text-sm leading-relaxed mb-6">
              {activeTab === 'tattoo' 
                ? "I get asked lots of questions about tattoos and piercings, that's because for some there are lots of questions to ask right? I've put together some of the most often asked here for you to read at your own pace. If you are curious about getting a tattoo or would like to know more have a scroll through the list below, if there is something else you would like to know contact me."
                : "I get asked lots of questions about tattoos and piercings, that's because for some there are lots of questions to ask right? I've put together some of the most often asked here for you to read at your own pace. If you are curious about getting a Piercing or would like to know more have a scroll through the list below, if there is something else you would like to know contact me."
              }
            </p>
            <span className="text-xs font-black uppercase tracking-widest text-red-600">Thanks, Charlie</span>
          </div>

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
