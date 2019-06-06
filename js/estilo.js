function funcaoBotao() { /* FUNÇÃO CRIADA PARA ABERTURA DO MENU LATERAL */
    let links = document.getElementById("logo-links");
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}