// Black Theme Ctrl+Key Handler
// This script clears the page and shows "nice try" when Ctrl + any key is pressed

document.addEventListener('keydown', function (event) {
    // Check if Ctrl key is pressed and it's not just Ctrl alone
    if (event.ctrlKey && event.key !== 'Control') {
        // Prevent any default browser behavior
        event.preventDefault();

        // Store original body content (optional, for debugging)
        window.originalContent = document.body.innerHTML;

        // Clear the entire body content
        document.body.innerHTML = '';

        // Apply black theme styles to body
        document.body.style.cssText = `
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background: #000000;
            height: 100vh;
            position: relative;
            overflow: hidden;
            color: #00ff00;
        `;

        // Create cyber grid background
        const grid = document.createElement('div');
        grid.className = 'cyber-grid';
        grid.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                linear-gradient(180deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            pointer-events: none;
            z-index: 1;
        `;

        // Create the "nice try" message
        const message = document.createElement('div');
        message.textContent = 'nice try';
        message.className = 'nice-try-message';
        message.style.cssText = `
            font-size: 5rem;
            font-weight: bold;
            color: #00ff00;
            text-shadow: 
                0 0 10px #00ff00,
                0 0 20px #00ff00,
                0 0 30px #00ff00;
            animation: cyber-pulse 1s infinite alternate;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        `;

        // Add keyframes for animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cyber-pulse {
                from {
                    text-shadow: 
                        0 0 10px #00ff00,
                        0 0 20px #00ff00,
                        0 0 30px #00ff00;
                    transform: translate(-50%, -50%) scale(1);
                }
                to {
                    text-shadow: 
                        0 0 20px #00ff00,
                        0 0 40px #00ff00,
                        0 0 60px #00ff00;
                    transform: translate(-50%, -50%) scale(1.1);
                }
            }
        `;

        // Append everything to body
        document.body.appendChild(style);
        document.body.appendChild(grid);
        document.body.appendChild(message);

        // Log for debugging (visible in console)
        console.log('Ctrl+' + event.key + ' pressed - Page cleared');
        console.log('Original content stored in window.originalContent');
    }
});

// Additional helper function to reset page (for testing)
function resetPage() {
    if (window.originalContent) {
        document.body.innerHTML = window.originalContent;
        console.log('Page reset to original content');
    } else {
        console.log('No original content stored. Reload page instead.');
        location.reload();
    }
}

