const translations = {
    zh: {
        home: "首页",
        products: "产品展示",
        contact: "联系我们",
        heroTitle: "智能出行，选择索尔维拉",
        heroSubtitle: "为未来提供清洁、智能、高效的电动车解决方案",
        bike1: "索尔维拉 电动车 A1",
        bike2: "索尔维拉 电动车 B2",
        bike3: "索尔维拉 电动车 C3",
        contactInfo: "电话：即将公布 | 邮箱：即将公布"
    },
    en: {
        home: "Home",
        products: "Products",
        contact: "Contact Us",
        heroTitle: "Smart Mobility, Choose Solvera",
        heroSubtitle: "Providing clean, smart, and efficient EV solutions for the future",
        bike1: "Solvera Electric Bike A1",
        bike2: "Solvera Electric Bike B2",
        bike3: "Solvera Electric Bike C3",
        contactInfo: "Phone: Coming Soon | Email: Coming Soon"
    },
    pt: {
        home: "Início",
        products: "Produtos",
        contact: "Contate-Nos",
        heroTitle: "Mobilidade Inteligente, Escolha Solvera",
        heroSubtitle: "Oferecendo soluções limpas, inteligentes e eficientes para o futuro",
        bike1: "Solvera Bicicleta Elétrica A1",
        bike2: "Solvera Bicicleta Elétrica B2",
        bike3: "Solvera Bicicleta Elétrica C3",
        contactInfo: "Telefone: Em breve | Email: Em breve"
    }
};

document.getElementById("languageSwitcher").addEventListener("change", function() {
    const lang = this.value;
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[lang][key];
    });
});
