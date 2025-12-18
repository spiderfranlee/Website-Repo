
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type, FunctionDeclaration, GenerateContentResponse } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBookingAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm the Skin Graphics Booking Assistant. I can help you schedule a call or book a tattoo/piercing consultation. To start, could you tell me your name?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Tool Declaration
  const sendEmailBookingTool: FunctionDeclaration = {
    name: 'send_email_booking',
    parameters: {
      type: Type.OBJECT,
      properties: {
        owner_email: { type: Type.STRING, description: "Must be: franny.lee@gmail.com" },
        customer_name: { type: Type.STRING },
        customer_email: { type: Type.STRING },
        customer_phone: { type: Type.STRING },
        details: { type: Type.STRING, description: "Service type and date/time" }
      },
      required: ["owner_email", "customer_name", "customer_email", "customer_phone", "details"]
    },
    description: 'Dispatches booking request to the studio manager'
  };

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Role: Skin Graphics Booking Assistant.
Recipient: Always set owner_email to franny.lee@gmail.com.
Protocol:
1. Greet professionally.
2. Collect: Name, Email, Phone Number, Service (Tattoo/Piercing), and Date/Time for the consultation/call.
3. Confirmation: You MUST explicitly repeat the Name, Email, and Phone back to the user for confirmation.
4. Tool: Call 'send_email_booking' only AFTER confirmation.
5. Post-Tool: Inform them Franny Lee has been notified and will reply within 24-48 hours to confirm the scheduling.`,
          tools: [{ functionDeclarations: [sendEmailBookingTool] }]
        }
      });
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    initChat();

    try {
      let response: GenerateContentResponse = await chatRef.current.sendMessage({ message: userText });
      
      // Handle Function Calls (Tool)
      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const fc of response.functionCalls) {
          if (fc.name === 'send_email_booking') {
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbxH-Z4jj3ZdSlt-bHVjfUKaC2sGXqXZYYOhNlHCfC-sNYeinTGbANJA-uvWpE65BlMS4A/exec';
            
            const payload = {
              functionCall: {
                name: fc.name,
                args: fc.args
              }
            };

            fetch(scriptUrl, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });

            // Feed success back to AI
            response = await chatRef.current.sendMessage({
              message: `The scheduling request for ${fc.args.customer_name} has been successfully sent to franny.lee@gmail.com. Continue to confirm this with the user.`
            });
          }
        }
      }

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I've processed your request." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting. Please try again or call us directly at 01 6853737." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[150] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass w-[350px] sm:w-[400px] h-[500px] rounded-[2rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden mb-6 animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-zinc-900 p-6 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-red-600 animate-pulse opacity-20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Booking Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Online Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-red-600 text-white font-bold' 
                    : 'bg-white/5 text-gray-300 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl flex gap-1">
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-6 bg-zinc-950/50 border-t border-white/5 flex gap-3">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-red-600 transition-all text-white placeholder:text-white/20"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-red-600 hover:bg-white hover:text-black text-white p-3 rounded-xl transition-all disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-4 bg-white text-black p-2 pr-6 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-2xl border-4 border-black/20"
      >
        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Book Today?</span>
          <span className="text-sm font-black uppercase tracking-tighter">Schedule Consultation</span>
        </div>
      </button>
    </div>
  );
};

export default ChatBookingAgent;
