function hanoi(height, left=1, middle=2, right=3) {
    if (height) {
        hanoi(height - 1, left, right, middle);
        console.log(`${left} => ${right}`);
        hanoi(height - 1, middle, left, right);
    }
}

hanoi(3)
