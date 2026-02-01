# Contribuindo para o DesignSystem-ShadCN

Obrigado por considerar contribuir com nosso Design System! 🎉

## Como Contribuir

### Reportando Bugs

Se você encontrou um bug:

1. Verifique se já não existe uma issue aberta sobre o problema
2. Abra uma nova issue incluindo:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots se aplicável
   - Versão do Node.js e navegador

### Sugerindo Melhorias

Para sugerir novos componentes ou funcionalidades:

1. Abra uma issue descrevendo a melhoria
2. Explique o caso de uso
3. Se possível, forneça exemplos ou mockups

### Pull Requests

1. Faça fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript
- Siga as convenções do ESLint configurado
- Adicione stories do Storybook para novos componentes
- Documente props e variantes
- Adicione testes quando aplicável

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Executar em modo de desenvolvimento
pnpm dev

# Executar Storybook
pnpm storybook

# Executar linting
pnpm lint
```

## Estrutura de Componentes

Ao adicionar novos componentes:

1. Crie o componente em `src/components/ui/`
2. Adicione o arquivo de stories `.stories.tsx`
3. Documente props e variantes
4. Atualize o README se necessário

## Código de Conduta

Seja respeitoso e inclusivo em todas as interações.

---

Obrigado pela sua contribuição! ❤️
