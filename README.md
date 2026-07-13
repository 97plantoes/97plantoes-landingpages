# 97plantões — Landing Pages

Catálogo navegável de dez direções de landing page para apresentação interna. Use a barra flutuante no rodapé para trocar a versão sem abrir outra página.

As variantes usam o parâmetro de URL ?v=nome-da-versão, o que preserva a navegação em hospedagem estática, incluindo GitHub Pages.

## Desenvolvimento

    npm install
    npm run dev

## Publicação no GitHub Pages

O workflow em [deploy.yml](.github/workflows/deploy.yml) publica automaticamente cada push em master.

No GitHub, abra **Settings → Pages** e confirme **GitHub Actions** como fonte de implantação. O projeto usa URLs relativas, portanto funciona tanto em domínio próprio quanto em https://conta.github.io/repositorio/.
