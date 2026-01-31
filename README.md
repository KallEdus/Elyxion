# 🏰 Elyxion: O Julgamento do Silêncio

Um site interativo e imersivo para explorar o universo de fantasia sombria de Elyxion, um mundo fragmentado por uma ruína cósmica onde memórias caminham e sombras falam.

## 🌟 Características Principais

### ✨ Interface Imersiva
- **Partículas animadas** no background para atmosfera mística
- **Design responsivo** que se adapta a todos os dispositivos
- **Paleta de cores temática** (dourado, marrom, preto) para fantasia sombria
- **Animações suaves** e transições elegantes

### 🎭 Seções Interativas
1. **Hero Section** com efeito de digitação no título
2. **Carrossel de Eras** - Explore as 7 eras da história de Elyxion
3. **Carrossel de Personagens** - Conheça os protagonistas e suas histórias
4. **Tríades Primordiais** - Descubra as três forças que regem o mundo
5. **Carrossel de Locais** - Visite 21 cidades e regiões importantes
6. **Modal do Prólogo** - Leia a história inicial do universo
7. **Popup Universal** - Sistema elegante para expandir conteúdos

### 🛠️ Tecnologias Utilizadas
- **HTML5** semântico e acessível
- **CSS3** com Flexbox, Grid e animações CSS
- **JavaScript** Vanilla (sem bibliotecas pesadas)
- **Particles.js** para efeitos de partículas
- **Font Awesome** para ícones
- **Google Fonts** (Segoe UI como padrão)

## 📁 Estrutura do Projeto

```
elyxion-website/
│
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS completos
├── script.js           # JavaScript com todas as funcionalidades
│
├── assets/             # (Opcional) Pasta para imagens/recursos
│   ├── images/
│   └── fonts/
│
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Instalação Local
1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Não é necessário servidor ou instalação adicional

### Hospedagem Online
1. Faça upload dos 3 arquivos principais para seu servidor web
2. Certifique-se de que as URLs do CDN estejam acessíveis
3. Acesse via navegador

### Personalização
```html
<!-- Para alterar imagens dos personagens -->
<img src="SUA_URL_AQUI.png" class="char-img" alt="Nome do Personagem">

<!-- Para adicionar novas eras ao carrossel -->
<div class="world-card era-card">
    <h3>Nome da Era</h3>
    <p>Descrição breve</p>
    <div class="era-expand">
        <!-- Conteúdo expandido -->
        <button class="close-era">Fechar</button>
    </div>
</div>
```

## 🔧 Funcionalidades JavaScript

### Sistema de Popup Universal
```javascript
// Todos os cards usam o mesmo sistema de popup
activatePopup(".era-card", ".era-expand");
activatePopup(".char-card", ".char-expand");
activatePopup(".triad-card", ".triad-expand");
activatePopup(".location-card", ".location-expand");
```

### Carrosséis Responsivos
- **Navegação por setas** com feedback visual
- **Rolagem suave** com `scroll-behavior: smooth`
- **Controle de visibilidade** das setas
- **Scroll horizontal** em dispositivos móveis

### Animações e Efeitos
- **Efeito typewriter** no título principal
- **Fade-in** ao rolar a página (Intersection Observer)
- **Navegação suave** entre seções
- **Hover effects** em todos os elementos interativos

## 🎨 Customização CSS

### Cores Principais
```css
:root {
    --primary-gold: #c9a86a;
    --dark-brown: #8b4513;
    --parchment: #e0d3b8;
    --dark-bg: #0a0a0a;
    --card-bg: rgba(20, 15, 10, 0.7);
}
```

### Breakpoints Responsivos
```css
/* Desktop: > 992px (default) */
/* Tablet: 768px - 992px */
/* Mobile: < 768px */
```

## 📱 Responsividade

O site é totalmente responsivo com:
- **Layout flexível** para desktop
- **Carrosséis horizontais** para tablet
- **Stack vertical** para mobile
- **Tipografia adaptativa**
- **Toque-friendly** para dispositivos móveis

## 🌐 Integrações Externas

### CDNs Utilizadas
```html
<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Particles.js -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

### Links Sociais
- WhatsApp
- Discord
- YouTube
- Instagram

## 🐛 Solução de Problemas

### Problemas Comuns
1. **Partículas não aparecem**
   - Verifique conexão com a internet (CDN do Particles.js)
   - Confira se o elemento `#particles-js` existe

2. **Carrosséis não funcionam**
   - Verifique console do navegador por erros JavaScript
   - Confira se os IDs dos elementos estão corretos

3. **Popup não abre**
   - Verifique se as classes `.popup-overlay` e `.popup-content` existem
   - Confira se não há conflitos de z-index

### Console de Desenvolvedor
Pressione `F12` para:
- Ver erros no Console
- Inspecionar elementos no Elements
- Testar responsividade no Device Toolbar

## 📄 Licença

© 2025 Elyxion: O Julgamento do Silêncio. Todos os direitos reservados.

Este projeto é para fins demonstrativos e de portfólio. As imagens utilizadas são de fontes públicas (Imgur, Unsplash) e os textos são criação original.

## 🤝 Contribuindo

Para contribuir com este projeto:
1. Faça um Fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **Discord:** @kallesus
- **WhatsApp:** +55 91 98123-9341
- **YouTube:** @karlossousa3832
- **Instagram:** @kall_edus

---

**Nota:** Este projeto é uma demonstração de habilidades em desenvolvimento web front-end, combinando design criativo com funcionalidades interativas avançadas usando apenas HTML, CSS e JavaScript vanilla.
