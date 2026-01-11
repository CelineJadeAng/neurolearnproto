<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NeuroLearn Dashboard</title>
    <link rel="stylesheet" href="neurolearn.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Extra styles for the new Study Mode Selection buttons */
        .mode-btn {
            flex: 1;
            padding: 20px;
            border: 2px solid #eee;
            border-radius: 12px;
            background: white;
            cursor: pointer;
            transition: 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        .mode-btn:hover { border-color: #a855f7; background: #fbf7ff; }
        .mode-icon { font-size: 24px; color: #7c3aed; }
        .mode-title { font-weight: bold; font-size: 16px; color: #333; }
    </style>
</head>
<body>

    <div class="nl-dashboard">
        
        <header class="nl-header-center">
            <div class="brand-logo">
                <div class="logo-icon"><i class="fas fa-brain"></i></div>
                <span>NeuroLearn</span>
            </div>
            <div class="brand-subtitle">AI-Powered Adaptive Learning • Quizlet on Steroids</div>
            <p class="brand-desc">
                Feed your lesson content, and let AI generate flashcards and quizzes instantly. Study smarter with adaptive difficulty and an AI tutor at your side.
            </p>
        </header>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon purple"><i class="fas fa-book-open"></i></div>
                <div><div class="stat-label">Total Decks</div><div class="stat-value">12</div></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon blue"><i class="fas fa-bullseye"></i></div>
                <div><div class="stat-label">Cards Mastered</div><div class="stat-value">348</div></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><i class="fas fa-chart-line"></i></div>
                <div><div class="stat-label">Study Streak</div><div class="stat-value">7 days</div></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon orange"><i class="fas fa-bolt"></i></div>
                <div><div class="stat-label">AI Sessions</div><div class="stat-value">43</div></div>
            </div>
        </div>

        <div class="create-deck-box" onclick="openGenerator()">
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
            <div>
                <div class="create-title">Create New Deck with AI</div>
                <div class="create-desc">Generate flashcards instantly from any topic or content</div>
            </div>
        </div>

        <div class="deck-tabs">
            <button class="tab-btn active">Active Decks</button>
            <button class="tab-btn">Mastered</button>
            <button class="tab-btn">All Decks</button>
        </div>

        <div class="decks-grid">
            
            <div class="deck-card" id="deck-generated" style="display: none; border-left: 5px solid #a855f7;">
                <div class="card-header">
                    <h3>JavaScript Promises & Async</h3>
                    <div class="tags"><span class="tag">Generated</span><span class="tag black">Hard</span></div>
                </div>
                <div class="card-stats"><span><i class="far fa-copy"></i> 5 items</span><span>New</span></div>
                <div class="progress-section">
                    <div class="progress-labels"><span>Progress</span><span>0%</span></div>
                    <div class="progress-track"><div class="progress-fill" style="width: 0%;"></div></div>
                </div>
                <div class="card-actions">
                    <button class="btn-study" onclick="openStudySelection()">Study Now</button>
                    <button class="btn-tutor">AI Tutor</button>
                </div>
            </div>

            <div class="deck-card" id="deck-neuroscience">
                <div class="card-header">
                    <h3>Neuroscience: Neuron Structure</h3>
                    <div class="tags"><span class="tag">Course 101</span><span class="tag gray">Medium</span></div>
                </div>
                <div class="card-stats">
                    <span><i class="far fa-copy"></i> 5 cards</span>
                    <span class="green-text"><i class="far fa-check-circle"></i> 1/5 mastered</span>
                </div>
                <div class="last-studied"><i class="far fa-clock"></i> Last studied 2 hours ago</div>
                <div class="progress-section">
                    <div class="progress-labels"><span>Progress</span><span>20%</span></div>
                    <div class="progress-track"><div class="progress-fill" style="width: 20%;"></div></div>
                </div>
                <div class="card-actions">
                    <button class="btn-study" onclick="window.location.href='flashcard-study.html'">
                        <i class="fas fa-play"></i> Study Now
                    </button>
                    <button class="btn-tutor"><i class="far fa-comment-alt"></i> AI Tutor</button>
                </div>
            </div>

            <div class="deck-card">
                <div class="card-header">
                    <h3>Python Data Structures</h3>
                    <div class="tags"><span class="tag">Data Science Course</span><span class="tag black">Hard</span></div>
                </div>
                <div class="card-stats">
                    <span><i class="far fa-copy"></i> 30 cards</span>
                    <span class="green-text"><i class="far fa-check-circle"></i> 22 mastered</span>
                </div>
                <div class="last-studied"><i class="far fa-clock"></i> Last studied 1 day ago</div>
                <div class="progress-section">
                    <div class="progress-labels"><span>Progress</span><span>73%</span></div>
                    <div class="progress-track"><div class="progress-fill" style="width: 73%;"></div></div>
                </div>
                <div class="card-actions">
                    <button class="btn-study" onclick="window.location.href='flashcard-study.html'">
                        <i class="fas fa-play"></i> Study Now
                    </button>
                    <button class="btn-tutor"><i class="far fa-comment-alt"></i> AI Tutor</button>
                </div>
            </div>

        </div>
    </div>

    <div class="chat-fab"><i class="fas fa-robot"></i></div>

    <div id="generator-modal" class="modal-overlay">
        <div class="modal-content">
            <div class="gen-header">
                <div class="gen-title"><i class="fas fa-sparkles"></i> AI Flashcard Generator</div>
                <div class="close-modal" onclick="closeGenerator()">Cancel</div>
            </div>
            <p class="gen-subtitle">Enter your topic or paste lesson content, and AI will create personalized flashcards</p>
            <div class="form-group">
                <label>Topic/Subject</label>
                <input type="text" class="form-control" placeholder="e.g., JavaScript Promises">
            </div>
            <div class="form-group">
                <label>Lesson Content (Optional)</label>
                <textarea class="form-control" rows="4" placeholder="Paste lecture notes or text here..."></textarea>
            </div>
            <div class="options-row">
                <div class="half">
                    <label>Number of Cards</label>
                    <input type="number" class="form-control" value="20">
                </div>
                <div class="half">
                    <label>Difficulty</label>
                    <select class="form-control">
                        <option>Auto (Adaptive)</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                    </select>
                </div>
            </div>
            <button class="btn-generate-modal" onclick="runGeneration()">
                <i class="fas fa-stars"></i> Generate Content
            </button>
        </div>
    </div>

    <div id="study-mode-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 500px; text-align: center;">
            <div class="gen-header">
                <div class="gen-title" style="justify-content: center;">Choose Study Mode</div>
            </div>
            <p class="gen-subtitle" style="margin-bottom: 30px;">How would you like to review this deck?</p>
            
            <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <div class="mode-btn" onclick="goToStudyMode('flashcard')">
                    <div class="mode-icon"><i class="fas fa-layer-group"></i></div>
                    <div class="mode-title">Flashcards</div>
                    <div style="font-size: 12px; color: #666;">Traditional flip cards</div>
                </div>

                <div class="mode-btn" onclick="goToStudyMode('quiz')">
                    <div class="mode-icon"><i class="fas fa-clipboard-list"></i></div>
                    <div class="mode-title">Quiz Mode</div>
                    <div style="font-size: 12px; color: #666;">Multiple choice test</div>
                </div>
            </div>

            <button onclick="closeStudySelection()" style="background: transparent; border: none; color: #999; cursor: pointer; text-decoration: underline;">Cancel</button>
        </div>
    </div>

    <script src="script.js"></script>

</body>
</html>
