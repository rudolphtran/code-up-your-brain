// Script to update all exercises 8-15 in homework2.html with data-lang-key attributes

const updates = [
    {
        exerciseNum: 8,
        searchText: `                <!-- Exercise 8: Password Strength -->
                <div class="exercise-card medium" data-exercise="8">
                    <div class="exercise-header">
                        <h3><span class="exercise-number">8.</span> Password Strength Validator</h3>
                        <div class="exercise-meta">
                            <span class="difficulty">Medium</span>
                            <span class="time">⏱️ 30-35 min</span>
                            <button class="complete-btn" onclick="toggleComplete(8)">
                                <i class="fas fa-check"></i> Mark Complete
                            </button>
                        </div>
                    </div>
                    <div class="exercise-content">
                        <div class="problem-statement">
                            <h4>Problem:</h4>
                            <p>Create a password strength checker that evaluates passwords based on multiple criteria.</p>
                        </div>
                        <div class="requirements">
                            <h4>Requirements:</h4>
                            <ul>
                                <li>Check length (minimum 8 characters)</li>`,
        replaceText: `                <!-- Exercise 8: Password Strength -->
                <div class="exercise-card medium" data-exercise="8">
                    <div class="exercise-header">
                        <h3><span class="exercise-number">8.</span> <span data-lang-key="exercise8-title">Password Strength Validator</span></h3>
                        <div class="exercise-meta">
                            <span class="difficulty" data-lang-key="difficulty-medium">Medium</span>
                            <span class="time">⏱️ 30-35 min</span>
                            <button class="complete-btn" onclick="toggleComplete(8)">
                                <i class="fas fa-check"></i> <span data-lang-key="mark-complete">Mark Complete</span>
                            </button>
                        </div>
                    </div>
                    <div class="exercise-content">
                        <div class="problem-statement">
                            <h4 data-lang-key="problem-label">Problem:</h4>
                            <p data-lang-key="exercise8-problem">Create a password strength checker that evaluates passwords based on multiple criteria.</p>
                        </div>
                        <div class="requirements">
                            <h4 data-lang-key="requirements-label">Requirements:</h4>
                            <ul>
                                <li data-lang-key="exercise8-req1">Check length (minimum 8 characters)</li>`
    }
    // Add more updates for exercises 9-15...
];

console.log("This script needs to be run manually for each exercise");
console.log("Use replace_string_in_file tool with the search and replace text above");