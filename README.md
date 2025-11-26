# Projeto de Treinamento - JavaScript e HTML

Este projeto contém exemplos práticos de fundamentos de JavaScript e integração com APIs usando HTML.

## 📁 Estrutura do Projeto

```
├── index.html        # Interface HTML principal
├── app.js           # Lógica de consumo da API
└── fundamentos.js   # Exemplos de fundamentos JavaScript
```

## 🎯 Conteúdo

### fundamentos.js
Exemplos de conceitos básicos de JavaScript:
- **Tipos de dados**: number, string, boolean, null, undefined, object, array
- **Variáveis**: `let` e `const`
- **Operadores**: operadores de comparação
- **Estruturas de controle**: `if/else`
- **Arrays**: manipulação e iteração
- **Loops**: `for`
- **Operações com arrays**: push, unshift, pop, shift

### app.js
Aplicação prática com integração de API:
- Consumo de API REST (GET e POST)
- Manipulação do DOM
- Event listeners
- Async/await
- Fetch API
- Tratamento de erros

### index.html
Interface web com:
- Botão para carregar lista de usuários
- Formulário para criar novos usuários
- Área de exibição de resultados

## 🚀 Como Usar

1. Clone o repositório
2. Certifique-se de ter uma API rodando em `http://localhost:3000/users`
3. Abra o arquivo `index.html` em um navegador

### Para testar os fundamentos:
```bash
node fundamentos.js
```

## 🔧 Requisitos

- Navegador web moderno
- Node.js (para executar fundamentos.js)
- API backend rodando na porta 3000 (para funcionalidades do app.js)

## 📦 Instalação do Node.js

### Windows
1. Acesse o site oficial: [https://nodejs.org](https://nodejs.org)
2. Baixe a versão LTS (recomendada) ou Current
3. Execute o instalador (.msi)
4. Siga o assistente de instalação (mantenha as opções padrão)
5. Verifique a instalação abrindo o PowerShell ou CMD e executando:
   ```bash
   node --version
   npm --version
   ```

### Linux (Ubuntu/Debian)
```bash
# Atualizar repositórios
sudo apt update

# Instalar Node.js e npm
sudo apt install nodejs npm

# Verificar instalação
node --version
npm --version
```

### macOS
**Usando Homebrew:**
```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js
brew install node

# Verificar instalação
node --version
npm --version
```

**Ou baixando do site oficial:**
1. Acesse [https://nodejs.org](https://nodejs.org)
2. Baixe o instalador para macOS
3. Execute o pacote (.pkg) e siga as instruções


## 📝 Funcionalidades

- ✅ Carregar lista de usuários da API
- ✅ Criar novos usuários via formulário

---


