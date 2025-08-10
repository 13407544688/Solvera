const productsData = {
    zh: [
        { name: "智能手表", price: "¥299", img: "https://via.placeholder.com/200", desc: "多功能智能手表，支持健康监测" },
        { name: "无线耳机", price: "¥199", img: "https://via.placeholder.com/200", desc: "高音质无线蓝牙耳机" }
    ],
    en: [
        { name: "Smart Watch", price: "$45", img: "https://via.placeholder.com/200", desc: "Multi-functional smart watch with health tracking" },
        { name: "Wireless Earbuds", price: "$30", img: "https://via.placeholder.com/200", desc: "High-quality Bluetooth earbuds" }
    ],
    pt: [
        { name: "Relógio Inteligente", price: "R$150", img: "https://via.placeholder.com/200", desc: "Relógio inteligente multifuncional com monitoramento de saúde" },
        { name: "Fones sem fio", price: "R$100", img: "https://via.placeholder.com/200", desc: "Fones de ouvido Bluetooth de alta qualidade" }
    ]
};

function setLanguage(lang) {
    const translations = {
        zh: { title: "索尔维拉", subtitle: "连接世界的多语言社交平台" },
        en: { title: "SOLVERA", subtitle: "Connecting the world socially" },
        pt: { title: "SOLVERA", subtitle: "Conectando o mundo socialmente" }
    };

    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("subtitle").innerText = translations[lang].subtitle;

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    productsData[lang].forEach(p => {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
                <p>${p.desc}</p>
            </div>
        `;
    });
}

setLanguage("zh");
