function generateSequence() {
    const sequence = [];
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    while (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        sequence.push(numbers.splice(randomIndex, 1)[0]);
    }

    document.getElementById("sequenceDisplay").innerText = sequence.join(",  ");
}
