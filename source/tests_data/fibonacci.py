class Fibonacci:
    def __init__(self, max):
        self.max = max
        self.fibonacci_sequence = self._generate_fibonacci()

    def _generate_fibonacci(self) -> list:
        fib_numbers = [0, 1]
        for i in range(2, self.max + 1):
            number = (i - 1) + (i - 2)
            fib_numbers.append(number)
        return fib_numbers

    def fancy_print(self) -> str:
        return "".join(
            [
                f'{(index)*" "}{value}\n'
                for index, value in enumerate(self.fibonacci_sequence)
            ]
        )


fibonacci = Fibonacci(5)
print(fibonacci.fancy_print())
