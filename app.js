async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    if (response.ok) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('feederPanel').style.display = 'block';
        loadSchedule();
    } else {
        alert('Ошибка входа!');
    }
}

async function loadSchedule() {
    const response = await fetch('http://localhost:5000/feeder/1');
    const data = await response.json();
    document.getElementById('schedule').value = JSON.stringify(data.schedule, null, 2);
}

async function updateSchedule() {
    const schedule = JSON.parse(document.getElementById('schedule').value);
    
    const response = await fetch('http://localhost:5000/feeder/1/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ schedule })
    });
    
    if (response.ok) {
        alert('Расписание обновлено!');
    } else {
        alert('Ошибка!');
    }
}
