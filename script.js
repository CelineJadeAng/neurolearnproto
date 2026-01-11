/* script.js - Merged Logic with Sync & Chatbot Features */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // PART 1: MOODLE DASHBOARD LOGIC (ACCORDIONS)
    // ==========================================

    // 1. SELECT ALL TOPIC HEADERS
    const headers = document.querySelectorAll('.topic-header');
    
    if (headers.length > 0) {
        headers.forEach(header => {
            header.addEventListener('click', function() {
                const body = this.nextElementSibling;
                const chevron = this.querySelector('.chevron');

                if (body.classList.contains('open')) {
                    body.classList.remove('open');
                    chevron.classList.remove('rotate');
                } else {
                    body.classList.add('open');
                    chevron.classList.add('rotate');
                }
            });
        });
    }

    // 2. HANDLE "COLLAPSE ALL" / "EXPAND ALL"
    const collapseLink = document.querySelector('.collapse-link');
    if (collapseLink) {
        collapseLink.addEventListener('click', function(e) {
            e.preventDefault();
            const allBodies = document.querySelectorAll('.topic-body');
            const allChevrons = document.querySelectorAll('.chevron');
            
            const isExpanded = document.querySelector('.topic-body.open');

            if (isExpanded) {
                allBodies.forEach(b => b.classList.remove('open'));
                allChevrons.forEach(c => c.classList.remove('rotate'));
                this.innerText = "Expand all";
            } else {
                allBodies.forEach(b => b.classList.add('open'));
                allChevrons.forEach(c => c.classList.add('rotate'));
                this.innerText = "Collapse all";
            }
        });
    }

    // ==========================================
    // PART 2: SYNC LOGIC (CHECKING LOCALSTORAGE)
    // ==========================================

    // A. Check if on Moodle Dashboard (dashboard.html)
    if (window.location.pathname.includes('dashboard.html')) {
        const syncStatus = localStorage.getItem('neuro_progress');
        if (syncStatus === '100') {
            const ltiLink = document.querySelector('.lti-link-row');
            // If the link exists, append a "Grade" badge
            if (ltiLink && !document.querySelector('.grade-badge')) {
                const badge = document.createElement('div');
                badge.className = 'grade-badge';
                badge.innerHTML = '✅ Grade: 100/100';
                badge.style.cssText = "margin-left: auto; background: #d1fae5; color: #065f46; padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: bold;";
                ltiLink.appendChild(badge);
            }
        }
    }

    // B. Check if on NeuroLearn Dashboard (neurolearn.html)
    if (window.location.pathname.includes('neurolearn.html')) {
        const syncStatus = localStorage.getItem('neuro_progress');
        
        // Update the Neuroscience Card if completed
        if (syncStatus === '100') {
            const neuroCard = document.getElementById('deck-neuroscience');
            if (neuroCard) {
                // Update progress bar visuals
                const fill = neuroCard.querySelector('.progress-fill');
                if(fill) fill.style.width = '100%';
                
                const percentText = neuroCard.querySelector('.progress-labels span:last-child');
                if(percentText) percentText.innerText = '100%';
                
                const statsText = neuroCard.querySelector('.card-stats span:last-child');
                if(statsText) {
                    statsText.innerHTML = '<i class="far fa-check-circle"></i> 5/5 mastered';
                    statsText.classList.add('green-text');
                }
            }
        }

        // Check if a NEW deck was generated
        const newDeckCreated = localStorage.getItem('new_deck_created');
        if (newDeckCreated === 'true') {
            const genDeck = document.getElementById('deck-generated');
            if(genDeck) genDeck.style.display = 'block'; // Show hidden deck
        }
    }

    // ==========================================
    // PART 3: FLASHCARD PAGE INITIALIZATION
    // ==========================================
    if (document.getElementById('main-flashcard')) {
        // Determine which deck to load based on filename
        if (window.location.pathname.includes('flashcard-generated.html')) {
            loadCard(0, generatedFlashcardData); // Load JS Deck
        } else {
            loadCard(0, flashcardData); // Load Neuro Deck
        }
    }
});


// ==========================================
// PART 4: NAVIGATION & LOGIN FUNCTIONS
// ==========================================

function fakeLogin(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-primary');
    if(btn) {
        btn.innerText = "Logging in...";
        btn.style.opacity = "0.8";
    }
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1000);
}

function launchApp() {
  
    window.open("neurolearn.html", "_blank");
}

// Used in Modal Logic
function openGenerator() { document.getElementById('generator-modal').style.display = 'flex'; }
function closeGenerator() { document.getElementById('generator-modal').style.display = 'none'; }

function runGeneration() {
    const btn = document.querySelector('.btn-generate-modal');
    if(btn) {
        btn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Generating Assessment...`;
        btn.style.opacity = "0.8";
    }
    
    setTimeout(() => {
        // OLD: window.location.href = 'flashcard-generated.html';
        
        // NEW: Go to Assessment Page first
        window.location.href = 'assessment.html'; 
    }, 1500);
}

// Used in Course Dashboard
function generateAndLaunch() {
    const btn = document.querySelector('.btn-launch-course');
    if(btn) {
        btn.innerHTML = `<span>⚙️ Generating Content...</span>`;
        btn.style.opacity = "0.8";
    }
    setTimeout(() => {
        window.location.href = 'flashcard-study.html'; 
    }, 1500);
}

/* Update this specific function in script.js */

function finishAssessment() {
    // Save flag
    localStorage.setItem('new_deck_created', 'true');
    localStorage.setItem('assessed_difficulty', 'Hard'); 

    // CHECK FORMAT SELECTION
    // We need to grab the value from the modal dropdown. 
    // Since the modal might be closed, we usually save this state earlier, 
    // but for the prototype, we can check the element directly if it still exists in DOM.
    const formatSelect = document.getElementById('gen-format-select');
    const format = formatSelect ? formatSelect.value : 'flashcard'; // Default to flashcard

    if (format === 'quiz') {
        window.location.href = 'quiz.html';
    } else {
        window.location.href = 'flashcard-generated.html';
    }
}
// ==========================================
// PART 5: FLASHCARD ENGINE
// ==========================================

// Deck 1: Neuroscience (Default)
const flashcardData = [
    { question: "What is the primary function of a dendrite?", answer: "Dendrites receive synaptic inputs from axons.", difficulty: "Medium", tags: ["Neuron"], aiExplanation: "Think of dendrites like antennae catching signals." },
    { question: "What is the Myelin Sheath?", answer: "Insulating layer that speeds up electrical impulses.", difficulty: "Easy", tags: ["Structure"], aiExplanation: "Like rubber coating on a wire." },
    { question: "Define Action Potential.", answer: "Rapid voltage change across a membrane.", difficulty: "Hard", tags: ["Physiology"], aiExplanation: "The neuron 'firing' an electrical signal." },
    { question: "What is a Synapse?", answer: "Junction between two nerve cells.", difficulty: "Medium", tags: ["Communication"], aiExplanation: "The gap where chemical signals are exchanged." },
    { question: "Function of Glial Cells?", answer: "Support and protect neurons.", difficulty: "Medium", tags: ["Support"], aiExplanation: "The pit crew for the neuron race cars." }
];

// Deck 2: JavaScript (Generated)
const generatedFlashcardData = [
    { question: "What is a Promise?", answer: "An object representing the eventual completion or failure of an async operation.", difficulty: "Hard", tags: ["JS", "Async"], aiExplanation: "It's like ordering food. You get a buzzer (Promise) that rings when the food is ready (Resolved)." },
    { question: "What is Scope?", answer: "The current context of execution dealing with accessibility of variables.", difficulty: "Medium", tags: ["JS", "Basics"], aiExplanation: "Scope determines where you can see or use a variable." },
    { question: "Let vs Var?", answer: "Let is block scoped, Var is function scoped.", difficulty: "Easy", tags: ["JS", "ES6"], aiExplanation: "Always use 'let' or 'const' in modern JS to avoid bugs." },
    { question: "What is the DOM?", answer: "Document Object Model - the data representation of the objects that comprise the structure and content of a document on the web.", difficulty: "Medium", tags: ["Web"], aiExplanation: "The DOM is how JS sees HTML." },
    { question: "Explain Async/Await", answer: "Syntactic sugar built on top of Promises to make asynchronous code look synchronous.", difficulty: "Expert", tags: ["JS", "Modern"], aiExplanation: "It makes reading async code much easier, like reading a normal story top-to-bottom." }
];

let currentCardIndex = 0;
let stats = { mastered: 0, review: 0 };
let currentDeckData = flashcardData; // Default to Neuro deck

function loadCard(index, dataSet) {
    // If a dataset is passed, use it. Otherwise default to current.
    if (dataSet) currentDeckData = dataSet;
    
    const totalCards = currentDeckData.length;

    if (index >= totalCards) {
        showDeckComplete();
        return;
    }

    const data = currentDeckData[index];
    const card = document.getElementById('main-flashcard');
    const aiContainer = document.getElementById('inline-ai-container');
    
    // Safety check
    if (!card) return;

    // Reset UI state
    card.classList.remove('flipped');
    if (aiContainer) { 
        aiContainer.style.display = 'none'; 
        aiContainer.innerHTML = ''; 
    }

    // Inject Content
    document.getElementById('question-text').innerText = data.question;
    document.getElementById('answer-text').innerText = data.answer;
    document.getElementById('difficulty-pill').innerText = data.difficulty;
    
    // Update Tags
    const tagsContainer = document.getElementById('tags-container');
    if (tagsContainer) {
        tagsContainer.innerHTML = data.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    updateUICounters(totalCards);
}

function updateUICounters(totalCards) {
    const progressBar = document.getElementById('progress-bar');
    const counter = document.getElementById('card-counter');
    
    if (progressBar && counter) {
        const progressPercent = ((currentCardIndex + 1) / totalCards) * 100;
        progressBar.style.width = `${progressPercent}%`;
        counter.innerText = `${currentCardIndex + 1} / ${totalCards}`;
    }

    const statMastered = document.getElementById('stat-mastered');
    const statReview = document.getElementById('stat-review');
    const statRemaining = document.getElementById('stat-remaining');

    if (statMastered) statMastered.innerText = stats.mastered;
    if (statReview) statReview.innerText = stats.review;
    if (statRemaining) statRemaining.innerText = totalCards - (stats.mastered + stats.review);
}

function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

function handleRating(type, event) {
    event.stopPropagation(); // Prevent card flip
    if (type === 'master') {
        stats.mastered++;
    } else {
        stats.review++;
    }
    currentCardIndex++;
    loadCard(currentCardIndex, currentDeckData);
}

function showDeckComplete() {
    // SAVE PROGRESS TO LOCAL STORAGE
    // Only save "neuro_progress" if we are on the main deck, not the generated one
    if (!window.location.pathname.includes('flashcard-generated.html')) {
        localStorage.setItem('neuro_progress', '100');
    }

    const cardArea = document.querySelector('.card-area');
    if(cardArea) {
        cardArea.innerHTML = `
            <div style="text-align: center; padding: 40px; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                <h2 style="font-size: 28px; margin-bottom: 10px;">🎉 Session Complete!</h2>
                <p style="color: #666; margin-bottom: 20px;">You mastered ${stats.mastered} cards.</p>
                <div style="display:flex; gap:10px; justify-content:center;">
                    <button class="ai-tutor-btn" onclick="location.reload()">Review Again</button>
                    <button class="rate-btn master" onclick="window.location.href='neurolearn.html'">Back to Dashboard</button>
                </div>
            </div>
        `;
    }
    const actions = document.getElementById('action-buttons');
    if (actions) actions.style.display = 'none';
}

function showInlineAI(event) {
    event.stopPropagation();
    const card = document.getElementById('main-flashcard');
    if (!card.classList.contains('flipped')) card.classList.add('flipped');

    const data = currentDeckData[currentCardIndex];
    const aiContainer = document.getElementById('inline-ai-container');

    if(aiContainer) {
        aiContainer.innerHTML = `
            <div class="ai-explanation-block">
                <div class="ai-exp-header"><i class="fas fa-sparkles"></i> AI Tutor Explanation</div>
                <p class="ai-exp-text">${data.aiExplanation}</p>
            </div>
        `;
        aiContainer.style.display = 'block';
    }
}

// --- CHATBOT LOGIC ---
function toggleChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) chatWindow.classList.toggle('active');
}

function sendChat(type) {
    const input = document.querySelector('.chat-input-area input');
    const body = document.querySelector('.chat-body');
    let userText = input.value;
    let aiResponse = "";

    // Predefined Responses based on Button Click
    if (type === 'explain') {
        userText = "Can you explain this card?";
        aiResponse = "Sure! This concept refers to the core building block of the topic. Think of it like a fundamental rule that allows other parts to function.";
    } else if (type === 'example') {
        userText = "Give me a real-world example.";
        aiResponse = "Imagine you are mailing a letter. The envelope is like the variable 'scope' - it keeps the contents safe inside and separates it from the outside world.";
    } else {
        // Generic response for typing
        if(!userText) return;
        aiResponse = "That's a great question. Based on your current progress, I recommend reviewing the previous card on definitions to clarify this.";
    }

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.innerText = userText;
    userMsg.style.cssText = "align-self: flex-end; background: #7c3aed; color: white; border-bottom-right-radius: 2px;";
    body.appendChild(userMsg);

    // Simulate Typing Delay
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-message ai';
        aiMsg.innerHTML = `<i class="fas fa-robot" style="margin-right:5px; color:#7c3aed;"></i> ${aiResponse}`;
        body.appendChild(aiMsg);
        body.scrollTop = body.scrollHeight; // Auto scroll
    }, 800);

    input.value = "";
}

