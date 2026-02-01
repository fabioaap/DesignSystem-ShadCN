# 🚀 Deploy do Storybook - Guia de Solução de Problemas

## ⚙️ Configuração Obrigatória

### 1. Habilitar GitHub Pages

1. Vá em **Settings** → **Pages**
2. **Source:** Selecione "GitHub Actions"
3. **CLIQUE EM SAVE** ✅

### 2. Verificar Permissões

1. **Settings** → **Actions** → **General**
2. **Workflow permissions:** "Read and write permissions"
3. **Allow GitHub Actions to create and approve pull requests:** ✅
4. **SAVE**

## 🔧 Como Fazer Deploy

### Automático
- Faça push na branch `main`
- Aguarde 2-3 minutos
- Acesse: https://fabioaap.github.io/DesignSystem-ShadCN/

### Manual
- Actions → Deploy Storybook
- "Run workflow" → main → "Run workflow"
- Aguarde 2-3 minutos

## 🐛 Troubleshooting

### Workflow não executa

**Causa:** Permissões ou configuração incorreta

**Solução:**
1. Verificar Settings → Pages → Source: "GitHub Actions"
2. Verificar Settings → Actions → Permissions
3. Executar workflow "Check Permissions"
4. Ver logs para diagnosticar

### Build falha

**Causa:** Erro no código ou dependências

**Solução:**
```bash
# Testar localmente
pnpm install
pnpm build-storybook

# Se falhar localmente, corrigir código
# Se funcionar localmente, verificar logs do Actions
```

### Deploy falha

**Causa:** GitHub Pages não configurado ou sem permissões

**Solução:**
1. Executar workflow alternativo "Deploy via Branch"
2. Settings → Pages → Source: "Deploy from a branch"
3. Branch: `gh-pages` → Save

## 📋 Workflows Disponíveis

### 1. Deploy Storybook (Principal)
- Arquivo: `.github/workflows/deploy-storybook.yml`
- Deploy direto via GitHub Actions para GitHub Pages
- **Requer:** GitHub Pages configurado para "GitHub Actions"

### 2. Deploy via Branch (Alternativo)
- Arquivo: `.github/workflows/deploy-storybook-branch.yml`
- Deploy via branch `gh-pages`
- **Requer:** GitHub Pages configurado para "Deploy from a branch"
- Use se o método principal não funcionar

### 3. Check Permissions (Diagnóstico)
- Arquivo: `.github/workflows/check-permissions.yml`
- Verifica permissões e configurações
- Útil para diagnosticar problemas

## 🔍 Diagnóstico Avançado

### Verificar Actions habilitadas:
1. Settings → Actions → General
2. Allow all actions
3. Read and write permissions

### Verificar branch protection:
1. Settings → Branches
2. Verificar se `main` não tem restrições que bloqueiam workflows

### Verificar GitHub Pages:
1. Settings → Pages
2. Deve estar habilitado e configurado

### Limpar cache:
1. Actions → Caches → Delete all
2. Tentar executar workflow novamente

### Recriar workflow:
1. Deletar `.github/workflows/deploy-storybook.yml`
2. Fazer commit
3. Criar novamente
4. Fazer commit

## 📞 Suporte

Se nada funcionar:
1. ✅ Verificar logs em Actions
2. ✅ Executar "Check Permissions"
3. ✅ Tentar workflow alternativo "Deploy via Branch"
4. ✅ Verificar todas as configurações acima
5. ✅ Verificar se há erros no build local com `pnpm build-storybook`

## ✨ Critérios de Sucesso

- [ ] Workflow executa quando clicado "Run workflow"
- [ ] Build completa sem erros
- [ ] Deploy para GitHub Pages funciona
- [ ] URL acessível após deploy: https://fabioaap.github.io/DesignSystem-ShadCN/
- [ ] Storybook carrega corretamente no navegador

## 🎯 Diferenças entre os Workflows

| Aspecto | Deploy Storybook | Deploy via Branch |
|---------|------------------|-------------------|
| Método | GitHub Actions | Branch gh-pages |
| Configuração Pages | "GitHub Actions" | "Deploy from a branch" |
| Complexidade | Menor | Menor |
| Confiabilidade | Alta (se configurado) | Alta (backup) |
| Uso recomendado | Primário | Alternativo/Backup |

## 🔐 Permissões Necessárias

### Deploy Storybook (Principal)
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

### Deploy via Branch (Alternativo)
```yaml
permissions:
  contents: write
```

## 📝 Checklist de Verificação

Antes de relatar um problema, verifique:

- [ ] GitHub Pages está habilitado (Settings → Pages)
- [ ] Source está configurado corretamente para o workflow escolhido
- [ ] Workflow permissions estão corretas (Settings → Actions → General)
- [ ] Build funciona localmente (`pnpm build-storybook`)
- [ ] Não há erros de sintaxe nos arquivos de workflow
- [ ] Branch `main` não tem proteções que bloqueiam workflows
- [ ] Actions estão habilitadas no repositório

## 🆘 Situações Comuns

### "Workflow não aparece na lista"
- Verifique se o arquivo está em `.github/workflows/`
- Verifique a sintaxe YAML (use um validador online)
- Faça push do arquivo para a branch `main`

### "Deploy funciona mas site não carrega"
- Verifique o path do artifact: deve ser `storybook-static`
- Verifique se o build gerou arquivos em `storybook-static/`
- Aguarde 2-3 minutos para propagação do GitHub Pages

### "Permissão negada"
- Verifique Settings → Actions → General → Workflow permissions
- Certifique-se que está em "Read and write permissions"
- Verifique se o token GITHUB_TOKEN tem permissões corretas

---

**Desenvolvido com ❤️ - Deploy automatizado via GitHub Actions**
