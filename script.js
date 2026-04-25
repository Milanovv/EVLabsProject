const subcategoryMap = {
    "Guides and Tutorials": "guide",
    "Tools and Softwares": "tool",
    "FAQs and Basics": "faq",
    "Common Mistakes/Issues": "error"
};

const typeLabels = {
    guide: "Tutorial",
    tool: "Tool",
    faq: "FAQ",
    error: "Issue"
};

const categoryCounts = {};

let currentCategory = "all";
let currentFilter = "all";
let currentView = "grid";
let searchQuery = "";

function getTypeFromSubcategory(subcategory) {
    return subcategoryMap[subcategory] || "guide";
}

function calculateCategoryCounts() {
    resources.forEach(r => {
        categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
    });
    categoryCounts["all"] = resources.length;
}

function updateSidebarCounts() {
    document.querySelectorAll(".nav-item").forEach(btn => {
        const category = btn.dataset.category;
        const countEl = btn.querySelector(".nav-count");
        if (countEl && categoryCounts[category] !== undefined) {
            countEl.textContent = categoryCounts[category];
        }
    });
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

function getCategoryDisplayName(category) {
    const names = {
        "all": "Всички категории",
        "Programming/Development": "Programming/Development",
        "UI/UX Design": "UI/UX Design",
        "Marketing": "Marketing",
        "Product and Project Management": "Product & Project Management",
        "Business and Finance": "Business and Finance",
        "Sales and Growth": "Sales and Growth",
        "Events and Community": "Events and Community"
    };
    return names[category] || category;
}

function renderResources() {
    const filtered = filterResources();
    const grid = document.getElementById("resourcesGrid");
    const count = document.getElementById("resultsCount");
    const categoryLabel = document.getElementById("currentCategory");
    
    count.textContent = `${filtered.length} ресурс${getPlural(filtered.length)}`;
    categoryLabel.textContent = getCategoryDisplayName(currentCategory);
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3>Няма намерени ресурси</h3>
                <p>Опитай с друга търсичка или филтри</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map((resource, index) => {
        const type = getTypeFromSubcategory(resource.subcategory);
        
        return `
            <article class="resource-card" style="animation-delay: ${index * 50}ms">
                <div class="resource-header">
                    <span class="resource-category">${resource.category}</span>
                    <span class="resource-type-badge ${type}">${typeLabels[type]}</span>
                </div>
                <h3 class="resource-title">${resource.title}</h3>
                <p class="resource-description">${resource.description}</p>
                <div class="resource-footer">
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
                        Прегледай
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                    <button class="resource-action" title="Запази в отметки">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

function getPlural(n) {
    const words = ["", "а", "а"];
    if (n === 1) return words[0];
    if (n >= 2 && n <= 4) return words[1];
    return words[2];
}

function init() {
    calculateCategoryCounts();
    renderResources();
    updateSidebarCounts();
    
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderResources();
        });
    });
    
    document.querySelectorAll(".filter-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            renderResources();
        });
    });
    
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentView = btn.dataset.view;
            const grid = document.getElementById("resourcesGrid");
            grid.className = `resources-grid view-${currentView}`;
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
    
    document.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
            e.preventDefault();
            document.getElementById("searchInput").focus();
        }
    });
}

document.addEventListener("DOMContentLoaded", init);