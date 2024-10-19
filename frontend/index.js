import { backend } from 'declarations/backend';

document.getElementById('parabola-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const x = parseFloat(document.getElementById('x').value);

    try {
        const result = await backend.calculateParabola(a, b, c, x);
        document.getElementById('result').textContent = `Result: y = ${result.toFixed(2)}`;
    } catch (error) {
        console.error('Error calculating parabola:', error);
        document.getElementById('result').textContent = 'Error: Could not calculate result';
    }
});
