// INICIO DEL APARATO DE PRUEBA [apps/cl-main/specs/index.spec.tsx]
import React from 'react';
import { render, screen } from '@testing-library/react'; // Biblioteca padrão para testes de UI em React
import '@testing-library/jest-dom'; // Para matchers adicionais como .toBeInTheDocument()
import Page from '../src/app/page'; // Importando o componente da página principal

// Descreve o conjunto de testes para o componente Page (landing page de cl-main)
describe('Landing Page para cl-main (@luxe-global/cl-main)', () => {
  // Teste 1: Verificar se o componente renderiza sem erros
  it('deve renderizar o componente da página sem falhas', () => {
    const { baseElement } = render(<Page />);
    // Verifica se o elemento base do componente foi renderizado no DOM
    expect(baseElement).toBeInTheDocument();
  });

  // Teste 2: Verificar se a mensagem de boas-vindas principal está presente
  it('deve exibir a mensagem de boas-vindas principal corretamente', () => {
    render(<Page />);
    // Procura por um elemento h1 que contenha o texto "Hello there" (case-insensitive)
    const headingElement = screen.getByRole('heading', {
      name: /Hello there/i,
      level: 1, // Garante que é um h1
    });
    expect(headingElement).toBeInTheDocument();

    // Procura por um elemento que contenha o nome do projeto/app (conforme o template do Nx)
    // O texto exato pode variar um pouco dependendo da versão do Nx ou se foi customizado.
    // Usaremos uma regex para flexibilidade.
    const appNameWelcome = screen.getByText(
      /Welcome @luxe-global\/cl-main 👋/i
    );
    expect(appNameWelcome).toBeInTheDocument();
  });

  // Teste 3: Verificar a presença da seção "hero" e seu conteúdo básico
  it('deve renderizar a seção "hero" com título e link', () => {
    render(<Page />);
    const heroSection = document.getElementById('hero');
    expect(heroSection).toBeInTheDocument();

    // Dentro da seção hero, esperamos um título h2
    // getByRole dentro de um escopo específico (within)
    const heroTitle = screen.getByRole('heading', {
      name: /You're up and running/i,
      level: 2,
    });
    expect(heroTitle).toBeInTheDocument();

    // E um link "What's next?"
    const heroLink = screen.getByRole('link', { name: /What's next?/i });
    expect(heroLink).toBeInTheDocument();
    expect(heroLink).toHaveAttribute('href', '#commands');
  });

  // Teste 4: Verificar a presença da seção de materiais de aprendizado
  it('deve renderizar a seção "Learning materials" com pelo menos um link', () => {
    render(<Page />);
    const learningSection = document.getElementById('learning-materials');
    expect(learningSection).toBeInTheDocument();

    const docLink = screen.getByRole('link', { name: /Documentation/i });
    expect(docLink).toBeInTheDocument();
    expect(docLink).toHaveAttribute(
      'href',
      'https://nx.dev/getting-started/intro?utm_source=nx-project'
    );
  });

  // Teste 5: (Exemplo de teste para uma futura funcionalidade específica da landing page)
  // Suponha que adicionaremos um botão "Explorar Agências no Chile"
  // it('deveria ter um botão "Explorar Agências no Chile" (funcionalidade futura)', () => {
  //   render(<Page />);
  //   // Quando o botão for adicionado, este teste passaria:
  //   // const exploreButton = screen.getByRole('button', { name: /Explorar Agências no Chile/i });
  //   // expect(exploreButton).toBeInTheDocument();
  // });
});
// FIN DEL APARATO DE PRUEBA [apps/cl-main/specs/index.spec.tsx]
