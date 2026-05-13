# 🛋️ Linho Almofadas — Site Oficial

Site da **Linho Almofadas** — almofadas, salsichões de linho e decoração de alto padrão.
Fundada por **Vinicius Martins** | WhatsApp: **(11) 95861-0426**

---

## 💰 Preços

| Produto | Preço |
|---|---|
| Almofadas de linho | **R$ 49,90** / unidade |
| Salsichão em linho | **R$ 59,90** / unidade |
| Capas de almofada | **R$ 49,90** / unidade |
| Kit 3 almofadas | **R$ 127,90** / kit |

---

## 📁 Estrutura

```
linho-almofadas/
├── index.html       ← Página Inicial
├── produtos.html    ← Catálogo (almofadas, salsichões, capas, kits)
├── sobre.html       ← História e fundador
├── contato.html     ← WhatsApp, formulário e FAQ
├── css/styles.css   ← Estilos (paleta laranja/terracota)
├── js/main.js       ← JS (menu, filtros, formulário→WhatsApp)
├── images/favicon.svg
└── README.md
```

---

## 🚀 Publicar no GitHub Pages

**1. Criar repositório**
- Acesse [github.com](https://github.com) → **New repository**
- Nome: `linho-almofadas` | Visibilidade: **Public** → Create

**2. Enviar arquivos**
- Clique em **"uploading an existing file"**
- Arraste toda a pasta do projeto → **Commit changes**

**3. Ativar GitHub Pages**
- Repositório → **Settings** → **Pages**
- Source: `main` / `/ (root)` → **Save**
- Aguarde ~2 min

**4. Seu site estará em:**
```
https://SEU_USUARIO.github.io/linho-almofadas/
```

---

## 🖼️ Trocar por Fotos Reais

1. Coloque as fotos em `/images/` (ex: `almofada-bege.jpg`)
2. Em `produtos.html`, substitua cada URL do Unsplash:
```html
<!-- de: -->
<img src="https://images.unsplash.com/photo-...?w=700&q=80" alt="..."/>
<!-- para: -->
<img src="images/almofada-bege.jpg" alt="Almofada Linho Natural Bege" loading="lazy"/>
```
**Tamanho ideal dos produtos:** 800×800 px (quadrado)

---

## 🎨 Mudar Cores

Edite as variáveis no topo de `css/styles.css`:
```css
:root {
  --orange:   #E8621A;  /* laranja principal */
  --charcoal: #1E1A16;  /* texto escuro */
}
```

---

## 📞 Contato

WhatsApp: [(11) 95861-0426](https://wa.me/5511958610426) | São Paulo, SP
