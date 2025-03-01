
const buttons = document.getElementsByClassName('first-func');
let clickedCount = 0;
        let totalButtons = buttons.length;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const deCre = document.getElementById('decrement');
        const countButton = document.getElementById('btn-h4')
        const activityLog = document.getElementById('activity-log');
        const clearHistoryBtn = document.getElementById('clear-history');
        
        alert('Board Updated Successfully');
        clickedCount++;
        if (deCre) {
            var currentValue = parseInt(deCre.innerText) || 0;
            deCre.innerText = currentValue - 1; 
        }
        if (countButton) { 
            const countValue = parseInt(countButton.innerText) || 0;
            countButton.innerText = countValue + 1;
        }

        if (clickedCount === totalButtons) {
            setTimeout(function () {
                alert("Congrats! You have completed all the tasks!");
            });
        }
          
          if (activityLog) {
            const taskCard = this.closest('.task-card');
            
            if (!taskCard) {
                console.error("Could not find the task card parent.");
                return;
            }
            var taskName = taskCard.querySelector('h3')?.innerText || "Unknown Task"; 
            var timestamp = new Date().toLocaleTimeString(); 
           
            var logEntry = document.createElement('p');
            logEntry.className = "text-sm text-gray-600 log-entry-bg"; 
            logEntry.innerText = `You have completed the task: "${taskName}" at ${timestamp}`;
            activityLog.appendChild(logEntry);

             
        this.disabled = true;
        this.style.opacity = "0.5";  
        this.style.pointerEvents = "none"; 
        

        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', function () {
                if (activityLog) {
                    activityLog.innerHTML = '';
                }
            });
        }
        }
    
    });
}

// Discover
document.getElementById('discover')
    .addEventListener('click' ,function(){
        window.location.href= "./question.html"
    })

