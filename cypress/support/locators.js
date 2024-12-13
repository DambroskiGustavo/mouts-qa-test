const locators = {
    LOGIN: {
        EMAIL: '[data-testid="email"]',
        PASSWORD: '[data-testid="senha"]',
        BTN_LOGIN: '[data-testid="entrar"]',
    },

    MENU: {
        HOME: '[data-testid=home]',
        REGISTER_USERS: '[data-testid="cadastrar-usuarios"]',
        USER_LIST: '[data-testid="listar-usuarios"]',
        REGISTER_PRODUCTS: '[data-testid="cadastrar-produtos"]',
        PRODUCTS_LIST: '[data-testid="listar-produtos"]',
        REPORTS: '[data-testid="link-relatorios"]',
        BTN_LOGOUT: '[data-testid="logout"]'
    },

    USERS: {
        NAME: '[data-testid="nome"]',
        EMAIL: '[data-testid="email"]',
        PASSWORD: '[data-testid="password"]',
        ADM_CHECK: '[data-testid="checkbox"]',
        BTN_USER_REGISTER: '[data-testid="cadastrarUsuario"]'
    },

    PRODUCTS: {
        PRD_NAME: '[data-testid="nome"]',
        PRD_PRICE: '[data-testid="preco"]',
        PRD_DESCRIPTION: '[data-testid="descricao"]',
        PRD_QUANTITY: '[data-testid="quantity"]',
        PRD_IMAGE: '[data-testid="imagem"]',
        PRD_BTN_SAVE_CONFIRM: '[data-testid="cadastarProdutos"]'

    }

}

export default locators;