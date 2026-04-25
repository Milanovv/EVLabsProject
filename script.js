/* =====================================================
   SKILLPATH - Main JavaScript
   ===================================================== */

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

const categoryColors = {
    "Programming/Development": "cyan",
    "UI/UX Design": "purple",
    "Marketing": "orange",
    "Product and Project Management": "indigo",
    "Business and Finance": "green",
    "Sales and Growth": "pink",
    "Events and Community": "gold"
};

let currentCategory = "all";
let currentFilter = "all";
let currentSubcategory = "all";
let searchQuery = "";
let isLoggedIn = false;
let userData = {
    savedResources: [],
    recentlyViewed: [],
    subscriptions: { premium: false }
};

function getTypeFromSubcategory(subcategory) {
    return subcategoryMap[subcategory] || "guide";
}

function getCategoryColor(category) {
    return categoryColors[category] || "indigo";
}

function calculateCategoryCounts() {
    const counts = {};
    resources.forEach(r => {
        counts[r.category] = (counts[r.category] || 0) + 1;
    });
    counts["all"] = resources.length;
    return counts;
}

function filterResources(options = {}) {
    const { category, filter, subcategory, search, trending, newResources } = options;
    
    return resources.filter(resource => {
        const matchesCategory = !category || category === "all" || resource.category === category;
        const matchesFilter = !filter || filter === "all" || getTypeFromSubcategory(resource.subcategory) === filter;
        const matchesSubcategory = !subcategory || subcategory === "all" || resource.subcategory === subcategory;
        const matchesSearch = !search || search === "" || 
            resource.title.toLowerCase().includes(search.toLowerCase()) ||
            resource.description.toLowerCase().includes(search.toLowerCase()) ||
            resource.category.toLowerCase().includes(search.toLowerCase()) ||
            resource.subcategory.toLowerCase().includes(search.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
        const matchesTrending = !trending || resource.isTrending;
        const matchesNew = !newResources || resource.isNew;
        
        return matchesCategory && matchesFilter && matchesSubcategory && matchesSearch && matchesTrending && matchesNew;
    });
}

function getPlural(n) {
    if (n === 1) return "";
    if (n >= 2 && n <= 4) return "а";
    return "а";
}

function getCategoryDisplayName(category) {
    const displayNames = {
        "all": "Всички категории",
        "Programming/Development": "Programming/Development",
        "UI/UX Design": "UI/UX Design",
        "Marketing": "Marketing",
        "Product and Project Management": "Product & Project Management",
        "Business and Finance": "Business and Finance",
        "Sales and Growth": "Sales and Growth",
        "Events and Community": "Events and Community"
    };
    return displayNames[category] || category;
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
}

function renderResourceCard(resource, index = 0) {
    const colorClass = getCategoryColor(resource.category);
    const type = getTypeFromSubcategory(resource.subcategory);
    
    const badges = [];
    if (resource.isTrending) badges.push(`<span class="card-badge trending">Trending</span>`);
    if (resource.isNew) badges.push(`<span class="card-badge new">New</span>`);
    if (resource.isPremium) badges.push(`<span class="card-badge premium">Premium</span>`);
    
    return `
        <article class="resource-card ${colorClass}" style="animation-delay: ${index * 50}ms" data-id="${resource.id}">
            <div class="resource-meta">
                <span class="resource-category-tag">${resource.category}</span>
                <span class="resource-type-badge ${type}">${typeLabels[type]}</span>
            </div>
            <h3 class="resource-title">${resource.title}</h3>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-tags">
                ${resource.tags.slice(0, 4).map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
            </div>
            <div class="resource-footer">
                <a href="resource.html?id=${resource.id}" class="resource-link">
                    Прегледай
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
                <div class="resource-rating">
                    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ${resource.rating}
                </div>
            </div>
        </article>
    `;
}

function renderResourceCards(resourcesList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const count = document.getElementById("resultsCount");
    if (count) {
        count.textContent = `${resourcesList.length} ресурс${getPlural(resourcesList.length)}`;
    }
    
    if (resourcesList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3 class="empty-state-title">Няма намерени ресурси</h3>
                <p class="empty-state-text">Опитай с друга търсичка или филтри</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = resourcesList.map((r, i) => renderResourceCard(r, i)).join('');
}

function renderCategoryCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const counts = calculateCategoryCounts();
    
    container.innerHTML = categories.map(cat => `
        <a href="category.html?cat=${encodeURIComponent(cat.name)}" class="category-card" style="--accent-color: ${cat.color}">
            <span class="category-icon">${cat.icon}</span>
            <h3 class="category-name">${cat.name}</h3>
            <p class="category-description">${cat.description}</p>
            <span class="category-count">${counts[cat.name] || 0} ресурса</span>
        </a>
    `).join('');
}

function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    
    let searchTimeout;
    searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim();
            handleSearch();
        }, 150);
    });
    
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

function initCategoryNav() {
    document.querySelectorAll(".nav-item[data-category]").forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.dataset.category;
            if (category === "all") {
                window.location.href = "index.html";
            } else {
                window.location.href = `category.html?cat=${encodeURIComponent(category)}`;
            }
        });
    });
}

function initFilters() {
    document.querySelectorAll(".filter-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            handleSearch();
        });
    });
}

function initSubcategoryTabs() {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentSubcategory = tab.dataset.subcategory;
            handleSearch();
        });
    });
}

function handleSearch() {
    const category = new URLSearchParams(window.location.search).get("cat") || currentCategory;
    const subcategory = new URLSearchParams(window.location.search).get("subcat") || currentSubcategory;
    const search = new URLSearchParams(window.location.search).get("q") || searchQuery;
    
    const filtered = filterResources({
        category: category !== "all" ? decodeURIComponent(category) : "all",
        filter: currentFilter,
        subcategory: subcategory !== "all" ? decodeURIComponent(subcategory) : "all",
        search: search !== "" ? decodeURIComponent(search) : searchQuery
    });
    
    renderResourceCards(filtered, "resourcesGrid");
    updateResultsInfo(filtered.length, category);
}

function updateResultsInfo(count, category) {
    const countEl = document.getElementById("resultsCount");
    const categoryEl = document.getElementById("currentCategory");
    
    if (countEl) {
        countEl.textContent = `${count} ресурс${getPlural(count)}`;
    }
    if (categoryEl) {
        categoryEl.textContent = getCategoryDisplayName(category);
    }
}

function initSidebarCounts() {
    const counts = calculateCategoryCounts();
    document.querySelectorAll(".nav-item[data-category]").forEach(btn => {
        const category = btn.dataset.category;
        const countEl = btn.querySelector(".nav-count");
        if (countEl && counts[category] !== undefined) {
            countEl.textContent = counts[category];
        }
    });
}

function initLogin() {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const profileBtn = document.getElementById("profileBtn");
    
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            showAuthModal("login");
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            showAuthModal("signup");
        });
    }
    
    if (profileBtn) {
        profileBtn.addEventListener("click", () => {
            if (isLoggedIn) {
                window.location.href = "dashboard.html";
            }
        });
    }
    
    updateAuthUI();
}

function showAuthModal(mode) {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${mode === "login" ? "Вход" : "Регистрация"}</h2>
            <form class="auth-form">
                <div class="form-group">
                    <label class="form-label">Имейл</label>
                    <input type="email" class="form-input" placeholder="email@example.com" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Парола</label>
                    <input type="password" class="form-input" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn btn-primary w-full">
                    ${mode === "login" ? "Вход" : "Регистрация"}
                </button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
    });
    
    modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.remove();
    });
    
    modal.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        isLoggedIn = true;
        updateAuthUI();
        modal.remove();
    });
}

function updateAuthUI() {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const profileBtn = document.getElementById("profileBtn");
    
    if (isLoggedIn) {
        if (loginBtn) loginBtn.classList.add("hidden");
        if (signupBtn) signupBtn.classList.add("hidden");
        if (profileBtn) profileBtn.classList.remove("hidden");
    } else {
        if (loginBtn) loginBtn.classList.remove("hidden");
        if (signupBtn) signupBtn.classList.remove("hidden");
        if (profileBtn) profileBtn.classList.add("hidden");
    }
}

function getResourceById(id) {
    return resources.find(r => r.id === parseInt(id));
}

function getRelatedResources(resource, limit = 4) {
    return resources
        .filter(r => r.category === resource.category && r.id !== resource.id)
        .slice(0, limit);
}

function handleSaveResource(resourceId) {
    if (!userData.savedResources.includes(resourceId)) {
        userData.savedResources.push(resourceId);
    }
    renderSavedItems();
}

function handleRemoveSaved(resourceId) {
    userData.savedResources = userData.savedResources.filter(id => id !== resourceId);
    renderSavedItems();
}

function renderSavedItems() {
    const container = document.getElementById("savedItems");
    if (!container) return;
    
    if (userData.savedResources.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p class="text-muted">Все още нямаш запазени ресурси</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = userData.savedResources.map(id => {
        const resource = getResourceById(id);
        if (!resource) return "";
        return `
            <div class="saved-item" data-id="${resource.id}">
                <span class="saved-item-icon">📄</span>
                <div class="saved-item-content">
                    <div class="saved-item-title">${resource.title}</div>
                    <div class="saved-item-meta">${resource.category}</div>
                </div>
                <button class="btn btn-ghost btn-sm" onclick="handleRemoveSaved(${resource.id})">
                    ✕
                </button>
            </div>
        `;
    }).join('');
}

function initPage() {
    initSearch();
    initCategoryNav();
    initFilters();
    initSubcategoryTabs();
    initSidebarCounts();
    initLogin();
}

document.addEventListener("DOMContentLoaded", initPage);