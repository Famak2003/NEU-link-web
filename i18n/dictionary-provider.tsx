'use client';

import { createContext, useContext } from 'react';

const DictionaryContext = createContext<Record<string, string> | null>(null);

export function DictionaryProvider({
    dictionary,
    children,
}: {
    dictionary: Record<string, string>;
    children: React.ReactNode;
}) {
    return (
        <DictionaryContext.Provider value={dictionary}>
            {children}
        </DictionaryContext.Provider>
    );
}

export function useDictionary() {
    const dictionary = useContext(DictionaryContext);
    if (!dictionary) {
        throw new Error('useDictionary must be used within DictionaryProvider');
    }
    return dictionary;
}