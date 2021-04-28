function openSettingPanel() {
    document.getElementById("setting_panel").style.width = "50%";
    // document.getElementById("main").style.marginLeft = "50%";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.25)";
}

function closeSettingPanel() {
    document.getElementById("setting_panel").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = '#F2F0EB'
}

// Make the settings button clickable
document.getElementById("setting").addEventListener("click", openSettingPanel);
document.getElementById("setting_close_button").addEventListener("click", closeSettingPanel);

// generate date selection buttons
const dates = ['Daily', 'Weekly'];
window.onload = function() {
    dates.forEach(date => {
        var button = document.createElement("button");
        button.id = date;
        button.innerHTML = date;
    
        // var a = document.body.appendChild(button);
        button.addEventListener('click', updateButtonStyle)
        document.getElementById('date_selector').appendChild(button);
    })

    document.getElementById("Daily").click()
};

function updateButtonStyle(event) {
    console.log(event.target.id);
    var button = document.getElementById(event.target.id)
    button.style.borderRadius = '10px';
    button.style.color = '#5AC43B'
    button.style.backgroundColor = '#DCFFCF'
    button.style.border = '1px solid #5AC43B'
    button.style.boxSizing = 'border-box'

    let i = dates.filter(d => d != event.target.id)[0];
    document.getElementById(i).removeAttribute('style');
}




// Render the graph
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: Array.from({length: 7}, (_, i) => i + 1),
                            datasets: [
                                {
                                data: [{x: 1, y: 24}, {x: 1, y: 10}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }, {
                                data: [{x: 2, y: 24}, {x: 2, y: 8}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }, {
                                data: [{x: 3, y: 24}, {x: 3, y: 12}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }, {
                                data: [{x: 4, y: 24}, {x: 4, y: 6}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }, {
                                data: [{x: 5, y: 24}, {x: 5, y: 16}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }, {
                                data: [{x: 6, y: 24}, {x: 6, y: 4}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }, {
                                data: [{x: 7, y: 24}, {x: 7, y: 16}],
                                backgroundColor: ['#CFF0C4', '#5AC43B'],
                                borderRadius: 16,
                                barThickness: 24,
                                grouped: false
                            }

                        ]
                        },
                        options: {
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            events: [],
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    max: 24,
                                    grid: {
                                        display: false,
                                        drawBorder: true,
                                        drawOnChartArea: true,
                                        drawTicks: false,
                                    },
                                    ticks: {
                                        callback: function(value, index, values) {
                                            return value + "H"
                                        }
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false,
                                        drawBorder: true,
                                        drawOnChartArea: true,
                                        drawTicks: false,
                                    }
                                }
                            }
                        }
                    });