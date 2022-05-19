import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import { Project } from './components/Project';
import { QueryClient, QueryClientProvider } from 'react-query';


const container: Element = document.querySelector('#root') as Element;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render((
    <QueryClientProvider client={queryClient}>
        <Project />
    </QueryClientProvider>

))
