# Portfólio - Weslley Batista

Um portfólio pessoal moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **ESLint** - Linting e formatação de código

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página inicial
│   ├── components/
│   │   ├── Header.tsx           # Header com navegação
│   │   ├── Footer.tsx           # Footer do site
│   │   ├── Hero.tsx             # Seção inicial
│   │   ├── About.tsx            # Sobre mim
│   │   ├── Experience.tsx       # Experiências profissionais
│   │   ├── Projects.tsx         # Projetos realizados
│   │   ├── Technologies.tsx     # Tecnologias e ferramentas
│   │   └── Contact.tsx          # Formulário de contato
│   ├── lib/
│   │   └── data.ts              # Dados do portfólio
│   └── types/
│       └── index.ts             # Tipos TypeScript
├── public/
│   └── images/                  # Imagens do portfólio
└── package.json                 # Dependências
```

## 🎨 Funcionalidades

### Design Responsivo
- Layout totalmente responsivo para desktop, tablet e mobile
- Design moderno com gradientes sutis e sombras
- Paleta de cores consistente e acessível

### Animações e Interações
- Animações de entrada suaves com Framer Motion
- Microinterações nos botões e cards
- Hover effects e transições fluidas
- Scroll animations

### Seções do Portfólio

1. **Hero** - Apresentação pessoal com foto e headline
2. **Sobre Mim** - Biografia, habilidades e informações pessoais
3. **Experiências** - Timeline das experiências profissionais
4. **Projetos** - Cards dos projetos com links para GitHub e demo
5. **Tecnologias** - Grade organizada por categorias
6. **Contato** - Formulário funcional e links para redes sociais

### Acessibilidade
- Atributos ARIA apropriados
- Navegação por teclado
- Contraste de cores adequado
- Textos alternativos para imagens

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/weslleybatista/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Personalização

### Dados Pessoais
Edite o arquivo `src/lib/data.ts` para personalizar:
- Informações pessoais
- Experiências profissionais
- Projetos
- Tecnologias
- Links das redes sociais

### Estilos
- Cores: Edite `tailwind.config.js`
- Componentes: Modifique `src/app/globals.css`
- Layout: Ajuste os componentes em `src/components/`

### Imagens
Adicione suas imagens em `public/images/`:
- `avatar.jpg` - Foto de perfil
- `project1.jpg`, `project2.jpg`, etc. - Screenshots dos projetos

### Formulário de Contato
O portfólio inclui um formulário de contato funcional usando EmailJS:

1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/)
2. Configure um provedor de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Adicione as variáveis de ambiente no arquivo `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Para instruções detalhadas, consulte `EMAILJS_SETUP.md`.

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: até 767px

## 🎯 Performance

- **Next.js Image Optimization** - Imagens otimizadas automaticamente
- **Lazy Loading** - Componentes carregados sob demanda
- **Bundle Splitting** - Código dividido para melhor performance
- **CSS Optimization** - Tailwind CSS purgado em produção

## 🚀 Deploy

O projeto está pronto para deploy em qualquer plataforma que suporte Next.js:

- **Vercel** (recomendado)
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

---

**Desenvolvido com ❤️ por Weslley Batista**
