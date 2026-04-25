const categories = {
    "Programming/Development": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ],
    "UI/UX Design": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ],
    "Marketing": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ],
    "Product and Project Management": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ],
    "Business and Finance": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ],
    "Sales and Growth": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ],
    "Events and Community": [
        "Guides and Tutorials",
        "Tools and Softwares",
        "FAQs and Basics",
        "Common Mistakes/Issues"
    ]
};

const subcategoryMap = {
    "Guides and Tutorials": "guide",
    "Tools and Softwares": "tool",
    "FAQs and Basics": "faq",
    "Common Mistakes/Issues": "error"
};

let currentCategory = "all";
let currentFilter = "all";
let searchQuery = "";

function getTypeFromSubcategory(subcategory) {
    return subcategoryMap[subcategory] || "guide";
}

function filterResources() {
    return resources.filter(resource => {
        const matchesCategory = currentCategory === "all" || resource.category === currentCategory;
        const matchesFilter = currentFilter === "all" || getTypeFromSubcategory(resource.subcategory) === currentFilter;
        const matchesSearch = searchQuery === "" || 
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesFilter && matchesSearch;
    });
}

function renderResources() {
    const filtered = filterResources();
    const list = document.getElementById("resourcesList");
    const count = document.getElementById("resultsCount");
    
    count.textContent = `${filtered.length} ресурс${filtered.length === 1 ? '' : 'а'}`;
    
    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <h3>Няма намерени ресурси</h3>
                <p>Опитай с друга търсичка или филтри</p>
            </div>
        `;
        return;
    }
    
    list.innerHTML = filtered.map(resource => {
        const type = getTypeFromSubcategory(resource.subcategory);
        const typeLabels = {
            guide: "Tutorial",
            tool: "Tool",
            faq: "FAQ",
            error: "Error"
        };
        
        return `
            <div class="resource-card">
                <div class="resource-meta">
                    <span class="resource-category">${resource.category}</span>
                    <span class="resource-type ${type}">${typeLabels[type]}</span>
                </div>
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-title">
                    ${resource.title}
                </a>
                <p class="resource-description">${resource.description}</p>
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-url">
                    Отвори →
                </a>
            </div>
        `;
    }).join("");
}

function init() {
    renderResources();
    
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderResources();
        });
    });
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            renderResources();
        });
    });
    
    let searchTimeout;
    document.getElementById("searchInput").addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim();
            renderResources();
        }, 150);
    });
}

document.addEventListener("DOMContentLoaded", init);