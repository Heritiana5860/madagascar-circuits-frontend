import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import faqItems from '../../components/faq/faqItems';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqItems.map(category => ({
    ...category,
    questions: category.questions.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Questions Fréquentes</h2>
      
      <div className="relative max-w-2xl mx-auto mb-12">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher dans les FAQ..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.questions.map((item, index) => {
                const itemKey = `${categoryIndex}-${index}`;
                return (
                  <div key={itemKey} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <button
                      className="w-full text-left flex justify-between items-start"
                      onClick={() => setOpenItem(openItem === itemKey ? null : itemKey)}
                    >
                      <span className="font-medium text-gray-700">{item.q}</span>
                      {openItem === itemKey ? (
                        <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      )}
                    </button>
                    {openItem === itemKey && (
                      <div className="mt-3 text-gray-600">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
