# Configuração do EmailJS para Formulário de Contato

## Passos para configurar o envio de emails:

### 1. Criar conta no EmailJS
- Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
- Crie uma conta gratuita

### 2. Configurar provedor de email
- Vá para "Email Services" no dashboard
- Adicione seu provedor de email (Gmail, Outlook, etc.)
- Configure as credenciais

### 3. Criar template de email
- Vá para "Email Templates"
- Crie um novo template com as seguintes variáveis:
  - `{{from_name}}` - Nome do remetente
  - `{{from_email}}` - Email do remetente
  - `{{message}}` - Mensagem
  - `{{to_name}}` - Seu nome

### 4. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 5. Como encontrar as IDs:
- **Service ID**: Na seção "Email Services"
- **Template ID**: Na seção "Email Templates"
- **Public Key**: Na seção "Account" > "General"

### Template de exemplo:
```
Assunto: Nova mensagem do portfólio - {{from_name}}

Olá {{to_name}},

Você recebeu uma nova mensagem através do seu portfólio:

De: {{from_name}} ({{from_email}})

Mensagem:
{{message}}

Atenciosamente,
Sistema de Portfólio
```
